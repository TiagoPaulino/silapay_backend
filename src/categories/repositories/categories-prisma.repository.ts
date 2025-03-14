import { Injectable, NotFoundException } from "@nestjs/common";
import { CategoryRepository } from "../interfaces/categories-repository.interface";
import { Category, PrismaClient } from "@prisma/client";
import { CreateCategoryDto } from "../dto/create-category.dto";
import { UpdateCategoryDto } from "../dto/update-category.dto";

@Injectable()
export class CategoriesPrismaRepository implements CategoryRepository{
    constructor( private readonly prisma: PrismaClient) {}
    async create(category: CreateCategoryDto): Promise<Category> {
        return this.prisma.category.create({data: category})
    }
    findAll(): Promise<Category[]> {
        return this.prisma.category.findMany()
    }
    async findOne(id: string): Promise<Category>{
        const categorie =  await this.prisma.category.findUnique({where: {id}})
        if(!categorie) {
            throw new NotFoundException("Category not found");
        }
        return categorie
    }
    async update(id: string, category: UpdateCategoryDto): Promise<Category>{
        const categorie =  await this.prisma.category.findUnique({where: {id}})
        if(!categorie) {
            throw new NotFoundException("Category not found");
        }
        return this.prisma.category.update({where: {id}, data: category})
        
    }
    async remove(id: string): Promise<Category>{
        const categorie = await this.prisma.category.findUnique({where: {id}})
        if(!categorie) {
            throw new NotFoundException("Category not found");
        }
        return this.prisma.category.delete({where: {id}})
    }
}
