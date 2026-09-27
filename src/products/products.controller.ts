import { Controller, Get } from '@nestjs/common';
import { ProductsService } from './products.service.js';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get("all")
    getAllProducts() {
        return this.productsService.getAllProducts();
    }
}
