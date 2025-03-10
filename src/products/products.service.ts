import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaProductsRepository } from './repositories/products-prisma.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly ProductsRepository: PrismaProductsRepository) {}

  async create(createProductDto: CreateProductDto) {
    return this.ProductsRepository.create(createProductDto);
  }

  async findAll() {
    return this.ProductsRepository.findAll();
  }

  async findOne(id: string) {
    return this.ProductsRepository.findOne(id);
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    return this.ProductsRepository.update(id, updateProductDto);
  }

  async remove(id: string) {
    return this.ProductsRepository.remove(id);
  }
}

