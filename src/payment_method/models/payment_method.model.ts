import { Column, DataType, Model, Table, HasMany } from "sequelize-typescript";
import { Payments } from "../../payments/models/payment.model";

interface PaymentMethodCreationAttrs{
    name: string;
};

@Table({tableName: 'payment_method'})
export class PaymentMethod extends Model<PaymentMethod, PaymentMethodCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
    })
    name: string;

    @HasMany(() => Payments)
    payments: Payments;
}
