import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEmail,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class RegisterDto {
  @ApiProperty({
    required: true,
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  firstName: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    required: true,
    example: 'P@ssw07d',
  })
  @IsStrongPassword()
  password: string;

  @ApiProperty({
    required: true,
    description: 'Should match password',
  })
  @IsString()
  confirmPassword: string;

  @ApiProperty({
    required: true,
    description: 'Unique username',
  })
  @IsDefined()
  @IsString()
  username: string;
}
