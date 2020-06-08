import { Controller, Get, UseGuards, Request, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { GoogleAuthGuard } from './auth/google-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('home')
  public showHome(@Request() req: any) {
    return { user: req.user };
  }

  @UseGuards(GoogleAuthGuard)
  @Get('profile')
  @Render('profile')
  public showProfile(@Request() req: any) {
    return { user: req.user };
  }

}
