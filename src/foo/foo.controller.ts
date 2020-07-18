import { Controller, Get, HttpService } from '@nestjs/common';

@Controller('/foo')
export class FooController {

    constructor(
        private readonly httpService: HttpService,
    ) {}

    @Get()
    async bar(): Promise<any> {
        const response = await this.httpService.get('https://api.github.com/users/paztek').toPromise();

        return response.data;
    }
}
