import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Payments } from './models/payment.model';
import { Order } from '../orders/models/order.model';
import { PaymentMethod } from '../payment_method/models/payment_method.model';

@Module({
  imports: [SequelizeModule.forFeature([Payments, Order, PaymentMethod])],
  controllers: [PaymentsController],
  providers: [PaymentsService]
})
export class PaymentsModule {}
