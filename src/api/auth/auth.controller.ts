import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Public } from 'src/decorators/auth';
import { APIResponse } from 'src/types/APIResponse';
import { AuthService } from './auth.service';
import { AuthenticatedAccountDto } from './dtos/AuthenticatedAccountDto';
import { LoginDto } from './dtos/LoginDto';
import { RegisterDto } from './dtos/RegisterDto';
import { RefreshTokenDto } from './dtos/RefreshTokenDto';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @Public()
  async register(
    @Body() registerDto: RegisterDto,
  ): Promise<APIResponse<AuthenticatedAccountDto>> {
    const createdAccount = await this.authService.createAccount(registerDto);

    return new APIResponse<AuthenticatedAccountDto>({
      account: createdAccount,
      ...(await this.authService.signAccount(createdAccount)),
    } as AuthenticatedAccountDto);
  }

  @Post('login')
  @HttpCode(200)
  @Public()
  async login(
    @Body() loginDto: LoginDto,
  ): Promise<APIResponse<AuthenticatedAccountDto>> {
    const account = await this.authService.login(loginDto);

    return new APIResponse<AuthenticatedAccountDto>({
      account: account,
      ...(await this.authService.signAccount(account)),
    } as AuthenticatedAccountDto);
  }

  @Post('refresh_token')
  @Public()
  async refreshAuthToken(@Body() refreshTokenDto: RefreshTokenDto) {
    // : Promise<APIResponse<AuthenticatedAccountDto>>
    return await this.authService.verifyRefreshToken(refreshTokenDto);
  }
}
