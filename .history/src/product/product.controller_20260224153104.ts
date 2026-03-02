import Module from 'nest';
import { Controller } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly servicesProduct: ProductService)
}
