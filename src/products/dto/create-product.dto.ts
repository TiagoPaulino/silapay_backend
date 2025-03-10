import { Product } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";

export class CreateProductDto implements Product {
    name: string;
    id: string;
    description: string;
    price: Decimal;
    stock: number;
    image: string;
    categoryId: string;
    createdAt: Date;
    updateAt: Date;

}
