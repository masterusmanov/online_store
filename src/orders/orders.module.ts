import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Order } from './models/order.model';
import { Users } from '../user/models/user.model';
import { Product } from '../products/models/product.model';

@Module({
  imports: [SequelizeModule.forFeature([Order, Users, Product])],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
