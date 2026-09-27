import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {


    getAllProducts() {
        return 'All products from service';
    }
}
