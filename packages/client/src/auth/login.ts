import { belongResponse } from '../http';

export interface LoginBody {
  email: string;
  password: string;
}

interface LoginResultSessionMetadata {
  device: string;
  os: string;
  version: string;
  client: string;
}

interface Session {
  id: string;
  user_uuid: string;
  token: string;
  platform: string;
  metadata: LoginResultSessionMetadata;
  created: string;
  expired: string;
}

interface User {
  uuid: string;
  username: string;
  email: string;
  email_validated: boolean;
  first_name: string;
  last_name: string;
  user_id: string;
}
export interface LoginResult {
  user: User;
  session: Session;
}

export type LoginResponse = belongResponse<LoginResult>;
