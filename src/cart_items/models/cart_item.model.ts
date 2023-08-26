import { Column, DataType, Model, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { ShoppingCarts } from "../../shopping_carts/models/shopping_cart.model";

interface CartItemsCreationAttrs{
    cartId: number;
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
    cartId: number

    @Column({
        type: DataType.INTEGER,
    })
    amount: number;

    @BelongsTo(() => ShoppingCarts)
    shoppingCart: ShoppingCarts

}
