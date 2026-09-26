import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello eisa!';
  }

  getTest(name?: string): string {
    return `test get with query from service: ${name ?? 'no name'}`;
  }

  postTest(body: string): string {
    return `test from service: ${body ?? 'no name'}`;
  }
}
