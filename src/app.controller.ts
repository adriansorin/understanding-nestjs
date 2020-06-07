import { Controller, Get, UseGuards, Request, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home')
  public showHome(@Request() req) {
    return req.user ? { user: req.user } : {};
  }

  @Get('login')
  @Render('login')
  public showLogin() {
    return null;
  }

  @UseGuards(AuthGuard('google'))
  @Get('profile')
  @Render('profile')
  public showProfile(@Request() req) {
    // const user = {
    //   userID: 1,
    //   username: 'john',
    //   name: 'John Wick',
    //   email: 'j@wick.com',
    // };
    return { user: req.user };
  }

  @UseGuards(AuthGuard('google'))
  @Get('login/google')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async googleLogin(@Request() _) {}
}
