import { Controller, UseGuards, Request, Get } from '@nestjs/common';
import { GoogleAuthGuard } from './google-auth.guard';

@Controller('auth')
export class AuthController {
  @UseGuards(GoogleAuthGuard)
  @Get('login/google')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async googleLogin(@Request() _: any) {}
}
