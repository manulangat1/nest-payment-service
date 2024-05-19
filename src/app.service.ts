import { Injectable } from '@nestjs/common';
import { AppconfigService } from './appconfig/appconfig.service';

@Injectable()
export class AppService {
  constructor(private appConfigService: AppconfigService) {}
  getHello(): string {
    console.log(this.appConfigService.port);
    return 'Hello World!';
  }
}
