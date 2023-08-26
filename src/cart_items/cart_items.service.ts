import { Injectable } from '@nestjs/common';
import { CreateCartItemDto } from './dto/create-cart_item.dto';
import { UpdateCartItemDto } from './dto/update-cart_item.dto';
import { InjectModel } from '@nestjs/sequelize';
import { CartItems } from './models/cart_item.model';

@Injectable()
export class CartItemsService {
  constructor(@InjectModel(CartItems) private cartItemsRepo: typeof CartItems){}

  async create(createCartItemDto: CreateCartItemDto) {
    return await this.cartItemsRepo.create(createCartItemDto);
  }

  async findAll() {
    return await this.cartItemsRepo.findAll({include: {all: true}});
  }

  async findOne(id: number) {
    return await this.cartItemsRepo.findOne({where: {id}});
  }

  async update(id: number, updateCartItemDto: UpdateCartItemDto) {
    return await this.cartItemsRepo.update(updateCartItemDto, {
      where: {id},
      returning: true
    });
  }

  async remove(id: number) {
    return await this.cartItemsRepo.destroy({where: {id}});
  }
}
