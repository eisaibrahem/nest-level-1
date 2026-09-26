import { Controller, Get, Post, Query, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/api/test')
  getTest(@Query('name') name?: string): string {
    return this.appService.getTest(name ?? 'no name');
  }

  @Post('/api/test')
  postTest(@Req() req: Request, @Res() res: Response) {
    res.send(this.appService.postTest(req.body?.name ?? 'no name'));
  }




}
