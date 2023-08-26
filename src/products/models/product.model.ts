import { BelongsTo, Column, DataType, Model, Table, ForeignKey, HasMany } from "sequelize-typescript";
import { Category } from "src/category/models/category.model";


interface ProductCreationAttrs{
    productName: string;
    newOrDifferent: string;
    price: string;
    stock: string;
    categoryId: number;
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
    productName: string;

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
    categoryId: number;

    @BelongsTo(() => Category)
    category: Category;

   

}
