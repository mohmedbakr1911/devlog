import { Controller, Get, Param, Post, Query, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/greet")
  getGreet(): string{
    return this.appService.getGreet("mohamed");
  }

  @Post("/hello/:username")
  postHello(@Param() namd: any,  @Req() req: any, @Res() res: any): string{ 
    return res.send(this.appService.getGreet("Mohamed"));
  }


}
