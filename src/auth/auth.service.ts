import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login-auth.dto';
import { compare } from 'bcrypt';
import { JwtConfig } from './jwt/jwt.config';
import { omit } from 'lodash';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthService {
  accessToken: any;
  existingToken: any;
  tokenData: any[] = [];

  constructor(private jwtService: JwtService, 
    private dbService: PrismaService) { }

  /**
   * Register Service
   * @param dto 
   * @returns 
   */
  async register(data: any) {
      let user = await this.dbService.user.findFirst({
          where: {
              email: data.email
          }
      });
      //check user
      if (user) {
          throw new HttpException('User Exists', HttpStatus.BAD_REQUEST);
      }
      //create user
      let createUser = await this.dbService.user.create({
          data: {
              name: data.name,
              email: data.email,
              password: data.password,
              role: {
                connect: {
                    id: data.role as number
                }
              }
          }
      })
      if (createUser) {
          return {
              statusCode: 200,
              message: 'Register success',
          };
      }
      throw new HttpException('Bad request', HttpStatus.BAD_REQUEST);
  }

  /**
   * Login Service
   * @param dto 
   * @returns 
   */
  async login(dto: LoginDto) {
      let user = await this.dbService.user.findFirst({
          where: {
              email: dto.email 
          }
      });
 
      if (!user) {
          throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }

      let checkPassword = await compare(dto.password, user.password);
      if (!checkPassword) {
          throw new HttpException('Credential Incorrect', HttpStatus.UNAUTHORIZED);
      }
      //call generateJwt function
      return await this.generateJwt(
        user.id, 
        user.email, 
        user, 
        user.roleId,
        JwtConfig.user_secret, 
        JwtConfig.user_expired);
  }

  /**
   * Generate JWT
   * @param id
   * @param email
   * @param user
   * @param secret
   * @param expired
   * @returns
   */
  async generateJwt(userId: any, email: string, user: any, role: any,secret: any, expired = JwtConfig.user_expired) {
      this.accessToken = await this.jwtService.sign({
          sub: userId,
          email,
          name: user.name,
          role: role
      }, {
          expiresIn: expired,
          secret
      });
      this.checkIsTokenExpired(this.accessToken);
      this.tokenData.push(this.accessToken);
      return {
          message: 'Login Success',
          statusCode: 200,
        //   accessToken: this.accessToken,
          user: omit(user, ['password','created_at','updated_at'])
      };
  }

  async checkIsTokenExpired(token: any){
      if(token == undefined){
          this.tokenData.pop();
          console.log('token expired');
          
      } else {
          this.existingToken = token
      }
  }

  async getJwtAccessToken(){
      if (this.tokenData.length == 0 || this.existingToken == undefined) {
          return 'token not found';
      } 

      let buildData = {
          data_token: this.existingToken
      }
      return JSON.stringify(buildData);
  }

  async getCurrentUserData() {
    if(this.existingToken == undefined){
        return 'token not found';
    }
    let base64URL = this.existingToken.split('.')[1];
    let base64 = base64URL.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  }

  async findUserByEmail(email: string) {
    return this.dbService.user.findUnique({
        where: {
            email
        },
        include: {
            role: true
        }
    })
  }

  async findUserById(id: number) {
    return this.dbService.user.findUnique({
        where: {
            id
        },
        include: {
            role: true
        }
    })
  }

  async getAllUser(){
    return this.dbService.user.findMany({
        include: {
            role: true
        }
    })
  }

  async removeUser(id: number) {
    return this.dbService.user.delete({
        where: {
            id
        }
    })
  }

  //role
//   async getRole() {
//     return this.dbService.role.findMany();
//   }

  async updateRole(id: number, data: any) {
    return this.dbService.user.update({
        where: {
            id
        },
        data: data
    })
  }

  
//   async update(id: number, updatePerformanceAppraisalYearDto: UpdatePerformanceAppraisalYearDto) {
//     const updateData = await this.dbService.performance_appraisal_year.update({
//       data: updatePerformanceAppraisalYearDto,
//       where: {
//         id
//       }
//     });

//     return {
//       statusCode: 200,
//       message: 'Successfully Update Evaluation Period',
//       data: updateData
//     }
//   }
}
