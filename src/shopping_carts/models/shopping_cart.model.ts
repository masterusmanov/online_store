import { Column, DataType, Model, Table, HasMany, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Users } from "../../user/models/user.model";
import { Product } from "../../products/models/product.model";
import { CartItems } from "../../cart_items/models/cart_item.model";


interface ShoppingCartsCreationAttrs{
    userId: number;
    productId: number;
};

@Table({tableName: 'shopping_carts'})
export class ShoppingCarts extends Model<ShoppingCarts, ShoppingCartsCreationAttrs> {
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

    @HasMany(() => CartItems)
    cartItems: CartItems

    @BelongsTo(() => Users)
    user: Users

    @BelongsTo(() => Product)
    product: Product

}
