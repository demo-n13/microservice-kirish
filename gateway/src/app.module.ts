import { Module } from '@nestjs/common';
import { CategoryModule, ChatModule, ProductModule } from '@modules';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'client'),
      serveRoot: '/static',
    }),
    CategoryModule,
    ProductModule,
    ChatModule,
  ],
})
export class AppModule {}
