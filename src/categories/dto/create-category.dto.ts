import { Category } from "@prisma/client";


export class CreateCategoryDto implements Category{
    name: string;
    id: string;
}