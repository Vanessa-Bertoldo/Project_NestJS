import { Injectable } from "@nestjs/common";
import { Product } from "../entities/product.entity";
import { CreateProductDto } from "../dto/create-product.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UpdadeProductDto } from "../dto/update-product.dto";

@Injectable()
export class ProductService{
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ){}

    async create(product: CreateProductDto): Promise<Product>{
        const newProduct = this.productRepository.create(product);
        return await this.productRepository.save(newProduct);
    }

    async findAll(): Promise<Product[]>{
        return await this.productRepository.find();
    }

    async findOne(id: number): Promise<Product>{
        return await this.productRepository.findOne({
            where: { id },
        });
    }

    async update(id: number, product: UpdadeProductDto): Promise<Product>{
        await this.productRepository.update(id, product);
        return await this.productRepository.findOne({ where: { id } });
    }

    async remove(id: number): Promise<void>{
        await this.productRepository.delete(id);
    }
}