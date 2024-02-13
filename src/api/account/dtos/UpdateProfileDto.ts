import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsOptional,
  IsString,
  Length,
  IsMobilePhone,
} from 'class-validator';

export class UpdateProfileDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  @Length(3)
  username: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(2)
  firstName: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  @Length(2)
  lastName: string;

  @ApiProperty()
  @IsMobilePhone('en-NG')
  @IsOptional()
  phone: string;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  dateOfBirth: Date;
}
