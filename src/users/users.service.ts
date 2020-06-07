import { Injectable } from '@nestjs/common';

export type User = {
  userID: number;
  googleID: string;
  username: string;
  name: string;
  email?: string;
};

type UserEmail = {
  value: string;
  verified: boolean;
};

type UserPhoto = {
  value: string;
};

export type GoogleProfile = {
  id: string;
  displayName: string;
  name: { familyName: string; givenName: string };
  emails?: UserEmail[];
  photos?: UserPhoto[];
};

@Injectable()
export class UsersService {
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userID: 1,
        googleID: '72674832',
        username: 'john',
        name: 'John Wick',
        email: 'j@wick.com',
      },
      {
        userID: 2,
        googleID: '346457654',
        username: 'wayne',
        name: 'Bruce Wayne',
        email: 'b@wayne.com',
      },
      {
        userID: 3,
        googleID: '6546547',
        username: 'scroodge',
        name: 'Scroodge McDuck',
        email: 's@mcduck.com',
      },
    ];
  }

  async findOrCreate(profile: GoogleProfile): Promise<User> {
    const found = this.users.find(user => user.googleID === profile.id);

    if (found) {
      return found;
    }
    
    const newUser = {
      userID: this.users.length + 1,
      googleID: profile.id,
      username: profile.displayName,
      name: profile.name.familyName || profile.name.givenName,
      email: profile.emails[0].value,
    };

    this.users.push(newUser);

    return newUser;
  }
}
