import { BelongsTo, Column, DataType, Model, Table, ForeignKey, HasMany } from "sequelize-typescript";
import { Users } from "../../user/models/user.model";
import { Product } from "../../products/models/product.model";
import { Payments } from "../../payments/models/payment.model";

interface OrderCreationAttrs{
    userId: number;
    productId: number;
    statusId: string;
    amount: number;
    pricePerItems: number
    totalPrice: string;
    address: string;
    zipCode: string;
};

@Table({tableName: 'order'})
export class Order extends Model<Order, OrderCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => Users)
    @Column({
        type: DataType.INTEGER,
    })
    userId: number;

    @ForeignKey(() => Product)
    @Column({
        type: DataType.INTEGER,
    })
    productId: number;

    @Column({
        type: DataType.DATE,
        defaultValue: new Date()
    })
    date: Date;

    @Column({
        type: DataType.INTEGER,
    })
    amount: number;

    @Column({
        type: DataType.INTEGER,
    })
    pricePerItems: number

    @Column({
        type: DataType.STRING,
    })
    totalPrice: string;

    @Column({
        type: DataType.STRING,
    })
    address: string;

    @Column({
        type: DataType.INTEGER,
    })
    zipCode: number;

    @HasMany(() => Payments)
    payments: Payments;

    @BelongsTo(() => Users)
    user: Users;

    @BelongsTo(() => Product)
    product: Product;
}
