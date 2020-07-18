import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

    constructor(
        private readonly httpService: HttpService,
    ) {}

    async getHello(): Promise<string> {
        return 'Hello World!';
    }
}
