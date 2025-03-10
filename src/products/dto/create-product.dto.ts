import { Product } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { 
    IsNotEmpty, 
    IsString, 
    IsNumber,
    IsPositive, 
    IsOptional, 
    IsDate 
} from "class-validator";

export class CreateProductDto implements Partial<Product> {
    @IsNotEmpty({ message: "Name is required" })
    @IsString({ message: "Name must be a string" })
    name: string;
    id: string;

    @IsNotEmpty({ message: "Description is required" })
    @IsString({ message: "Description must be a string" })
    description: string;

    @IsNotEmpty({ message: "Price is required" })
    @IsNumber({}, { message: "Price must be a number" })
    @IsPositive({ message: "Price must be a positive number" })
    price: Decimal;

    @IsNotEmpty({ message: "Stock is required" })
    @IsNumber({}, { message: "Stock must be a number" })
    @IsPositive({ message: "Stock must be a positive number" })
    stock: number;


    @IsString({ message: "Image must be a string (URL or path)" })
    image: string;

    @IsNotEmpty({ message: "Category is required" })
    categoryId: string;

    @IsDate({ message: "CreatedAt must be a valid date" })
    createdAt?: Date;

    @IsOptional()
    @IsDate({ message: "UpdatedAt must be a valid date" })
    updateAt?: Date;
}
