import { HasMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Product } from "../../products/models/product.model";


interface CategoryCreationAttrs{
    product_category: string;
    description: string;
};

@Table({tableName: 'category'})
export class Category extends Model<Category, CategoryCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
    })
    product_category: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description: string;

    @HasMany(() => Product)
    product: Product;
}
