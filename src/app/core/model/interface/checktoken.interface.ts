import { UserAuth } from "./user.interfaces";

export interface CheckTokenResponse {
  username: UserAuth;
  token: string;
}
