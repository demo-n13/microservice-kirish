import { Module } from '@nestjs/common';
import { CategoryModule, ChatModule, ProductModule } from '@modules';

@Module({
  imports: [CategoryModule, ProductModule, ChatModule],
})
export class AppModule {}
