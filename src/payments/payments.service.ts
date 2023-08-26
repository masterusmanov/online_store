import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Payments } from './models/payment.model';

@Injectable()
export class PaymentsService {
  constructor(@InjectModel(Payments) private paymentsRepo: typeof Payments){}

  async create(createPaymentDto: CreatePaymentDto) {
    return await this.paymentsRepo.create(createPaymentDto);
  }

  async findAll() {
    return await this.paymentsRepo.findAll({include: {all: true}});
  }

  async findOne(id: number) {
    return this.paymentsRepo.findOne({where: {id}});
  }

  async remove(id: number) {
    return this.paymentsRepo.destroy({where: {id}});
  }
}
