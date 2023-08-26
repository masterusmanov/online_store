import { Column, DataType, Model, Table, HasMany } from "sequelize-typescript";

interface UsersCreationAttrs{
    first_name: string;
    last_name: string;
    username: string;
    hashed_password: string;
    email: string;
    phoneNumber: string;
    is_active: boolean;
    hashed_refresh_token: string;
};

@Table({tableName: 'users'})
export class Users extends Model<Users, UsersCreationAttrs> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    first_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    last_name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    username: string;

    @Column({
        type: DataType.STRING,
    })
    hashed_password: string;
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    email: string;
    
    @Column({
        type: DataType.STRING
    })
    phoneNumber: string;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
    })
    is_active: boolean;

    @Column({
        type: DataType.STRING,
    })
    hashed_refresh_token: string;

    @Column({
        type: DataType.STRING,
    })
    activationLink: string;

    // @HasMany(() => ShoppingCarts)
    // shoppingCart: ShoppingCarts;
}
