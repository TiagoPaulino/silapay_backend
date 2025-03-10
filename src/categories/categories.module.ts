import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { PrismaClient } from '@prisma/client';
import { CategoriesPrismaRepository } from './repositories/categories-prisma.repository';
import { CategoriesService } from './categories.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, PrismaClient, CategoriesPrismaRepository],
})
export class CategoryModule {}
