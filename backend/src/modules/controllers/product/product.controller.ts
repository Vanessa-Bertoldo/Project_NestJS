import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateProductDto } from 'src/modules/dto/create-product.dto';
import { ProductService } from 'src/modules/services/product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    create(@Body() product: CreateProductDto) {
        return this.productService.create(product);
    }

    @Get()
    findAll() {
        return this.productService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.productService.findOne(+id);
    }
}
