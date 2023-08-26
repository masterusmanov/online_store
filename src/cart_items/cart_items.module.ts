import { Module } from '@nestjs/common';
import { CartItemsService } from './cart_items.service';
import { CartItemsController } from './cart_items.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { CartItems } from './models/cart_item.model';
import { ShoppingCarts } from '../shopping_carts/models/shopping_cart.model';

@Module({
  imports: [SequelizeModule.forFeature([CartItems, ShoppingCarts])],
  controllers: [CartItemsController],
  providers: [CartItemsService]
})
export class CartItemsModule {}
