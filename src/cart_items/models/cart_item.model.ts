import { Column, DataType, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { ShoppingCarts } from "../../shopping_carts/models/shopping_cart.model";
import { Order } from "src/orders/models/order.model";

interface CartItemsCreationAttrs{
    orderId: number;
    shoppingcarts: number;
    amount: number;
};

@Table({tableName: 'cart_items'})
export class CartItems extends Model<CartItems, CartItemsCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @ForeignKey(() => ShoppingCarts)
    @Column({
        type: DataType.INTEGER
    })
    orderId: number

    @ForeignKey(() => ShoppingCarts)
    @Column({
        type: DataType.INTEGER
    })
    shoppingcarts: number

    @Column({
        type: DataType.INTEGER,
    })
    amount: number;

    @BelongsTo(() => ShoppingCarts)
    shoppingCart: ShoppingCarts

    @BelongsTo(() => Order)
    order: Order

}
