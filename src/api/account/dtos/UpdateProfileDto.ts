import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsOptional,
  IsString,
  Length,
  IsArray,
  IsUrl,
  ArrayMinSize,
  IsMobilePhone,
} from 'class-validator';
import { TransformToLowercase } from 'src/decorators/transformers';

export class UpdateProfileDto {
  @ApiProperty()
  @IsString()
  @IsOptional()
  @Length(3)
  @TransformToLowercase()
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
  @IsUrl()
  avatarUrl: string;
  
  @ApiProperty()
  @IsOptional()
  @IsUrl()
  coverImageUrl: string;

  @ApiProperty()
  @IsOptional()
  @IsDate()
  dateOfBirth: Date;

  @ApiProperty()
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  interests: string[];

  @ApiProperty()
  @IsString()
  @IsOptional()
  bio: string;

  @ApiProperty()
  @IsOptional()
  website: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  location: string;
}
