import { Injectable, Request } from '@nestjs/common';
import {User} from './users/users.service';

type UserRequest = Request & {user: User}

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  googleLogin(req: UserRequest) {
    if (!req.user) {
      return 'No user from google';
    }

    return {
      message: 'User information from google',
      user: req.user,
    };
  }
}
