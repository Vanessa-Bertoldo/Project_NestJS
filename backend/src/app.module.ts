import { ProductController } from './modules/controllers/product/product.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestController } from './test/test.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './modules/entities/product.entity';
import { ProductService } from './modules/services/product.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'ng@mastermaq2010',
      database: 'manager_inventory',
      entities: [Product],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Product]),
  ],
  controllers: [
    AppController, 
    TestController,
    ProductController
  ],
  providers: [
    AppService,
    ProductService
  ],
})
export class AppModule {}
