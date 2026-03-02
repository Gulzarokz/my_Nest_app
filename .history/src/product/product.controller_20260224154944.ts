import { Get, Module } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ProductService } from './product.service';


@Controller('product')
export class ProductController {
    constructor(private readonly productservices: ProductService) { }

    @Get()
    getroduct() {
        return this.productservices.getAllProducts();
    }

    @Get(':id')
    getproduct() {
        return this.productservices.getProductById()
    }
}
