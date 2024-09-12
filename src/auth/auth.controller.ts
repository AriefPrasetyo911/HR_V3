import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TransformPasswordPipe } from './pipes/transform-password/transform-password.pipe';
// import { RegisterDto } from './dto/register-auth.dto';
import { LoginDto } from './dto/login-auth.dto';
import { JwtAuthGuard } from './guards/jwt-auth/jwt-auth.guard';
import { ApiTags } from '@nestjs/swagger';
import { ACGuard, InjectRolesBuilder, RolesBuilder, UseRoles } from 'nest-access-control';
// import { Role } from './enums/role.enum';
// import { Roles } from './decorators/roles/roles.decorator';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    /**
     * Constructor
     * @param authService 
     */
    constructor(private authService: AuthService,
        @InjectRolesBuilder()
        private readonly rolesBuilder: RolesBuilder
    ) {}

    /**
     * Register controller
     * @param dto 
     * @returns 
     */
    
    @UsePipes(ValidationPipe, TransformPasswordPipe)
    @HttpCode(200)
    @UseRoles({
        possession: 'any',
        action: 'create',
        resource: 'user'
    })
    @Post('register')
    async register(@Body() userData: {
        name: string,
        email: string,
        password: string,
        role: any
    }) {
        
        return await this.authService.register(userData);
    }

    /**
     * Login Controller
     * @param dto 
     * @returns 
     */
    @HttpCode(200)
    @Post('login')
    async login(@Body() dto: LoginDto) {
        return await this.authService.login(dto);
    }

    /**
     * Get detail User
     */
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    async profile() {
        return {
            message: "Profile"
        }
    }

    @Get('access-token')
    async getAccessToken(){
        return await this.authService.getJwtAccessToken();
    }

    
    @Get('current-user')
    async getCurrentUser(){
        return await this.authService.getCurrentUserData();
    }

    @Get('users')
    async findAll() {
        return await this.authService.getAllUser();
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard, ACGuard)
    @UseRoles({
        possession: 'own',
        action: 'read',
        resource: 'user'
    })
    async findOne(@Param('id') id: string) {
        return await this.authService.findUserById(Number(id));
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, ACGuard)
    async remove(@Param('id') id: string) {
        return await this.authService.removeUser(Number(id));
    }

    //role
    // @UseGuards(JwtAuthGuard)
    // @Get('role')
    // @UseRoles({
    //     action: 'read',
    //     resource: 'role'
    // })
    // async getRole() {
    //     return await this.authService.getRole();
    // }

    @Patch('role/:id')
    async updateRole(@Param('id') id: string, @Body() data: any) {
        return await this.authService.updateRole(Number(id), data);
    }
}
