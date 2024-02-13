import { Accounts } from 'src/database/models/Accounts.model';

export type AuthenticatedAccountDto = {
  account: Accounts;
  token: string;
};
