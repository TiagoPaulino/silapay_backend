import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";
import { CategoriesPrismaRepository } from "./repositories/categories-prisma.repository";

@Injectable()
export class CategoriesService {
  constructor(private readonly CategoriesRepository: CategoriesPrismaRepository) {}

  async create(CreateCategoryDto: CreateCategoryDto) {
    return this.CategoriesRepository.create(CreateCategoryDto);
  }

  async findAll() {
    return this.CategoriesRepository.findAll();
  }

  async findOne(id: string) {
    return this.CategoriesRepository.findOne(id);
  }

  async update(id: string, UpdateCategoryDto: UpdateCategoryDto) {
    return this.CategoriesRepository.update(id, UpdateCategoryDto);
  }

  async remove(id: string) {
    return this.CategoriesRepository.remove(id);
  }
}

