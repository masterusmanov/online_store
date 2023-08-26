import { Injectable } from '@nestjs/common';
import { CreateShoppingCartDto } from './dto/create-shopping_cart.dto';
import { InjectModel } from '@nestjs/sequelize';
import { ShoppingCarts } from './models/shopping_cart.model';

@Injectable()
export class ShoppingCartsService {
  constructor(@InjectModel(ShoppingCarts) private shoppingCartsRepo: typeof ShoppingCarts) {}

  async create(createShoppingCartDto: CreateShoppingCartDto) {
    return await this.shoppingCartsRepo.create(createShoppingCartDto);
  }

  async findAll() {
    return await this.shoppingCartsRepo.findAll({include: {all: true}});
  }

  async findOne(id: number) {
    return await this.shoppingCartsRepo.findOne({where: {id}});
  }

  async remove(id: number) {
    return await this.shoppingCartsRepo.findOne({where: {id}});

  }
}
