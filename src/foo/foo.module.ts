import { HttpModule, Module } from '@nestjs/common';

import { FooController } from './foo.controller';

@Module({
    imports: [
        /**
         * Here we can import either the common HttpModule or the one we defined.
         * It doesn't matter as long as our module is at least imported once (for instance in the AppModule)
         */
        HttpModule,
    ],
    controllers: [
        FooController,
    ],
})
export class FooModule {}
