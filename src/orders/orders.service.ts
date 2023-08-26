import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Order } from './models/order.model';


@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order) private orderRepo: typeof Order){}

  async create(createOrderDto: CreateOrderDto) {
    const createOrder = await this.orderRepo.create(createOrderDto)
    return createOrder;
  };

  async findAll() {
    return await this.orderRepo.findAll({include: {all: true}});
  };

  async findOne(id: number) {
    return await this.orderRepo.findOne({where: {id}});
  };

  async remove(id: number) {
    return await this.orderRepo.destroy({where: {id}});
  };
};
