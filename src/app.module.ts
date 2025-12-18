import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { StudentModule } from './student/student.module';
import { CustomerModule } from './customer/customer.module';
import { MynameController } from './myname/myname.controller';

@Module({
  imports: [StudentModule, CustomerModule],
  controllers: [AppController,  ProductController, MynameController],
  providers: [AppService, ProductService],
})
export class AppModule {}
