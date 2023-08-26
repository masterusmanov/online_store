import { Module } from '@nestjs/common';
import { ShoppingCartsService } from './shopping_carts.service';
import { ShoppingCartsController } from './shopping_carts.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ShoppingCarts } from './models/shopping_cart.model';
import { Users } from '../user/models/user.model';
import { Product } from '../products/models/product.model';

@Module({
  imports: [SequelizeModule.forFeature([ShoppingCarts, Users, Product])],
  controllers: [ShoppingCartsController],
  providers: [ShoppingCartsService]
})
export class ShoppingCartsModule {}
