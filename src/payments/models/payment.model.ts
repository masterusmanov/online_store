import { Column, DataType, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Order } from "../../orders/models/order.model";
import { PaymentMethod } from "../../payment_method/models/payment_method.model";

interface PaymentsCreationAttrs{
    orderId: number;
    paymentTypeId: number;
    paymentTime: Date;
    paymenAmount: number;
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
    orderId: number;

    @ForeignKey(() => PaymentMethod)
    @Column({
        type: DataType.INTEGER
    })
    paymentMethodId: number;

    @Column({
        type: DataType.DATE,
        defaultValue: new Date()
    })
    paymentTime: Date;

    @Column({
        type: DataType.INTEGER,
    })
    paymentAmount: number;

    @BelongsTo(() => Order)
    order: Order;

    @BelongsTo(() => PaymentMethod)
    paymentMethod: PaymentMethod;
}
