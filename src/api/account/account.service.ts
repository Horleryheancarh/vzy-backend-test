import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Accounts, AccountDocument } from 'src/database/models/Accounts.model';
import { UpdateProfileDto } from './dtos/UpdateProfileDto';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(Accounts.name)
    private readonly accountModel: Model<AccountDocument>,
  ) {}

  async getProfileById(userId: string) {
    const account = await this.accountModel
      .findById(userId)
      .select('-password');

    if (!account) throw new NotFoundException('Account not found');
    return account;
  }

  async updateProfile(userId: string, body: UpdateProfileDto) {
    const account = await this.accountModel.findById(userId);

    if (body.phone) {
      const owner = await this.accountModel.findOne({
        phone: body.phone,
      });
      if (owner && owner.id !== account.id) {
        throw new ConflictException('Phone number already in use');
      }
    }

    if (body.username) {
      const owner = await this.accountModel.findOne({
        username: body.username,
      });
      if (owner && owner.id !== account.id) {
        throw new ConflictException('Username already in use');
      }
    }
    await account.updateOne(body);
    return await this.accountModel.findById(userId);
  }
}
