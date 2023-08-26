import { BelongsTo, Column, DataType, Model, Table, ForeignKey, HasMany } from "sequelize-typescript";
import { Users } from "../../user/models/user.model";
import { Product } from "../../products/models/product.model";
import { Payments } from "../../payments/models/payment.model";

interface OrderCreationAttrs{
    user_id: number;
    product_id: number;
    amount: number;
    price_items: number
    total_price: string;
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
    user_id: number;

    @ForeignKey(() => Product)
    @Column({
        type: DataType.INTEGER,
    })
    product_id: number;

    @Column({
        type: DataType.INTEGER,
    })
    amount: number;

    @Column({
        type: DataType.INTEGER,
    })
    price_items: number

    @Column({
        type: DataType.STRING,
    })
    total_price: string;

    @HasMany(() => Payments)
    payments: Payments;

    @BelongsTo(() => Users)
    user: Users;

    @BelongsTo(() => Product)
    product: Product;
}
