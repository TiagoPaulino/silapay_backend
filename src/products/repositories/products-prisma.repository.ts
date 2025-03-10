import { PrismaClient, Product } from "@prisma/client";
import { ProductsRepository } from "../interfaces/products-repository.interface";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductDto } from "../dto/create-product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";


@Injectable()
export class PrismaProductsRepository implements ProductsRepository {
    constructor(private readonly prisma: PrismaClient) {}

    async create(product: CreateProductDto): Promise<Product> {
        return this.prisma.product.create({ data: product });
    }

    findAll(): Promise<Product[]> {
        return this.prisma.product.findMany();
    }

    async findOne(id: string): Promise<Product> {
        const product = await this.prisma.product.findUnique({ where: { id } });
        if (!product) {
            throw new NotFoundException("Product not found");
        }
        return product;
    }

    async update(id: string, product: UpdateProductDto): Promise<Product> {
        const dbProduct = await this.prisma.product.findUnique({ where: { id } });
        if (!dbProduct) {
            throw new NotFoundException("Product not found");
        }
        return await this.prisma.product.update({
            where: { id },
            data: product,
        });
    }

    async remove(id: string): Promise<Product> {
        const dbProduct = await this.prisma.product.findUnique({ where: { id } });
        if (!dbProduct) {
            throw new NotFoundException("Product not found");
        }
        return await this.prisma.product.delete({ where: { id } });
    }
}
