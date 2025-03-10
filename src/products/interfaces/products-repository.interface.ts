
import { Product } from "@prisma/client";
import {CreateProductDto} from "../dto/create-product.dto";
import {UpdateProductDto} from "../dto/update-product.dto";

export interface ProductsRepository {
    create(product: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product> | null;
    update(id: string, product: UpdateProductDto): Promise<Product> | null;
    remove(id: string): Promise<Product>;
}