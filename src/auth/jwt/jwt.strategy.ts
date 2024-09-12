import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtConfig } from './jwt.config';
// import { UsersService } from '../users/users.service';
import { AuthService } from '../auth.service';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt-user') {
    constructor(private authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: JwtConfig.user_secret
        });
    }

    // async validate(payload: any) {
    //     return {
    //         user_id: payload.sub,
    //         email: payload.email,
    //         expired: payload.exp
    //     };
    // }

    // async validate(payload: any) {
    //     return this.userService.findUserByEmail(payload.email);
    // }

    async validate(payload: any){
        return this.authService.findUserById(payload.sub)
    }
}