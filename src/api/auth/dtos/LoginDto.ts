import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class LoginDto {
  @ApiProperty({
    required: true,
  })
  @Length(3)
  identifier: string;

  @ApiProperty({
    required: true,
  })
  @IsString()
  password: string;
}
