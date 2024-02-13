import { Body, Controller, Get, Put } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Accounts } from 'src/database/models/Accounts.model';
import { AuthUser } from 'src/decorators/auth';
import { APIResponse } from 'src/types/APIResponse';
import { AccountService } from './account.service';
import { UpdateProfileDto } from './dtos/UpdateProfileDto';

@Controller('accounts')
@ApiTags('Account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get('profile')
  @ApiBearerAuth()
  async getProfileById(@AuthUser() user: Accounts): Promise<Accounts> {
    return await this.accountService.getProfileById(user._id);
  }

  @Put('profile')
  @ApiBearerAuth()
  async updateProfile(
    @Body() body: UpdateProfileDto,
    @AuthUser() user: Accounts,
  ): Promise<APIResponse<Accounts>> {
    const updatedAccount = await this.accountService.updateProfile(
      user._id,
      body,
    );
    return new APIResponse<Accounts>(updatedAccount);
  }
}
