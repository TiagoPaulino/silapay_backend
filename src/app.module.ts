import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoryModule } from './categories/categories.module';

@Module({
  imports: [ProductsModule,CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
