import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Status } from 'src/constants/metadata';

@Schema({
  timestamps: true,
})
export class Accounts {
  _id: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ unique: true })
  phone: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  dateOfBirth: Date;

  @Prop({ default: Status.FREE, enum: Status })
  status: Status;
}

export type AccountDocument = Accounts & Document;

export const AccountModel = SchemaFactory.createForClass(Accounts);
