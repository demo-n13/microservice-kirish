import { Module } from '@nestjs/common';
import { CategoryModule, ProductModule } from '@modules';

@Module({
  imports: [CategoryModule, ProductModule],
})
export class AppModule {}
