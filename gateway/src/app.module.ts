import { CategoryModule } from '@modules';
import { Module } from '@nestjs/common';

@Module({
  imports: [CategoryModule],
})
export class AppModule {}
