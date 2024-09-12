import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt/jwt.strategy';
// import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
// import { RolesModule } from './roles/roles.module';

@Module({
  imports: [
    RolesModule,
    PassportModule.register(
      {
        defaultStrategy: 'jwt',
        property: 'user',
        session: false
      }
    ),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '60m'
      }
    }),
    // UsersModule,
    // RolesModule
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
