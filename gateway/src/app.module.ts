import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import {
  AuthModule,
  CategoryModule,
  ChatModule,
  LocalizationModule,
  ProductModule,
} from '@modules';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'client'),
      serveRoot: '/static',
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/microservice'),
    JwtModule.register({
      global: true,
      secret: 'my-secret-key',
      signOptions: { expiresIn: 120 },
    }),
    AuthModule,
    CategoryModule,
    ProductModule,
    ChatModule,
    LocalizationModule,
  ],
})
export class AppModule {}
