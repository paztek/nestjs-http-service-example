import { Module } from '@nestjs/common';

import { HttpModule } from './http/http.module';
import { FooModule } from './foo/foo.module';

@Module({
    imports: [
        HttpModule,
        FooModule, // <- we'll make use of the "augmented" HttpService in this module
    ],
})
export class AppModule {}
