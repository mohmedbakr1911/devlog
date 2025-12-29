import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getGreet(name: string): string {
    return `Welcome ${name}, Good luck`
  }
}

