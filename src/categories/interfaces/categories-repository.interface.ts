
import { Category } from "@prisma/client";
import {CreateCategoryDto} from "../dto/create-category.dto";
import {UpdateCategoryDto} from "../dto/update-category.dto"

export interface CategoryRepository {
    create(category: CreateCategoryDto): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: string): Promise<Category> | null;
    update(id: string, category: UpdateCategoryDto): Promise<Category> | null;
    remove(id: string): Promise<Category> | null;
}