import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        { id: 1, name: "Mobile", price: 20000 },
        { id: 2, name: "Tv", price: 30000 },
        { id: 3, name: "Tablet", price: 40000 },

    ]
}
