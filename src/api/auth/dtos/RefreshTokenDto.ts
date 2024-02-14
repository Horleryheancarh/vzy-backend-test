import { ApiProperty } from '@nestjs/swagger';
import { IsJWT } from 'class-validator';

export class RefreshTokenDto {
  @ApiProperty({
    required: true,
    description: "Email address for the account's password to reset",
  })
  @IsJWT()
  refreshToken: string;
}
