import { Column, DataType, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Order } from "../../orders/models/order.model";
import { PaymentMethod } from "../../payment_method/models/payment_method.model";

interface PaymentsCreationAttrs{
    order_id: number;
    paymentmethod_id: number;
};

@Table({tableName: 'payments'})
export class Payments extends Model<Payments, PaymentsCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => Order)
    @Column({
        type: DataType.INTEGER
    })
    order_id: number;

    @ForeignKey(() => PaymentMethod)
    @Column({
        type: DataType.INTEGER
    })
    paymentmethod_id: number;

    @BelongsTo(() => Order)
    order: Order;

    @BelongsTo(() => PaymentMethod)
    paymentmethod: PaymentMethod;
}
