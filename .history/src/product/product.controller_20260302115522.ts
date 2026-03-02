import { Get, Module, Param, UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ProductService } from './product.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';


@Controller('product')
export class ProductController {
    constructor(private readonly productservices: ProductService) { }

    @Get()
    @UseGuards(AuthGuard) // Apply the AuthGuard to this route
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
