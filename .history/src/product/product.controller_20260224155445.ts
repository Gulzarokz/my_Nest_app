import { Get, Module, Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ProductService } from './product.service';


@Controller('product')
export class ProductController {
    constructor(private readonly productservices: ProductService) { }

    @Get()
    getProducts() {
        return this.productservices.getAllProducts();
    }

    @Get(':id')
    getProduct(@Param('id') id: string) {
        return this.productservices.getProductById(
            Number(id)
        )
    }
}
