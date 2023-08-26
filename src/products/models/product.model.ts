import { BelongsTo, Column, DataType, Model, Table, ForeignKey, HasMany } from "sequelize-typescript";
import { Category } from "src/category/models/category.model";


interface ProductCreationAttrs{
    product_name: string;
    price: string;
    stock: string;
    category_id: number;
};

@Table({tableName: 'product'})
export class Product extends Model<Product, ProductCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
    })
    product_name: string;

    @Column({
        type: DataType.STRING,
    })
    price: string;

    @Column({
        type: DataType.STRING,
    })
    stock: string;

    @ForeignKey(() => Category)
    @Column({
        type: DataType.INTEGER,
    })
    category_id: number;

    @BelongsTo(() => Category)
    category: Category;
}
