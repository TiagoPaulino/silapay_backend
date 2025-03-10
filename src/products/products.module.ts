import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { PrismaProductsRepository } from './repositories/products-prisma.repository';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, PrismaClient,PrismaProductsRepository ],
})
export class ProductsModule {}
