import {Model, DataTypes} from 'sequelize';
import {database} from '../config/database';

export class RegisterModel extends Model {
    public id: any;
    public kid_name: any;
    public kid_birthday: any;
    public kid_age: any;
    public is_kid_allergy: any;
    public kid_allergy_description: any;
    public father_name: any;
    public father_cellphone: any;
    public mother_name: any;
    public mother_cellphone: any;
    public phone: any;
    public address: any;
    public email: any;
    public authorized_person: any;
    public is_member: any;
    public invited_by_mdf_member: any;
    public who_invites_name: any;
    public qr_code: any;
    public createdAt: any;
    public updatedAt: any;
}

RegisterModel.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            comment: "null",
            autoIncrement: true
        },
        kid_name: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        kid_birthday: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        kid_age: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        is_kid_allergy: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        kid_allergy_description: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        father_name: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        father_cellphone: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        mother_name: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        mother_cellphone: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        address: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        authorized_person: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        is_member: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        invited_by_mdf_member: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        who_invites_name: {
            type: DataTypes.STRING(150),
            allowNull: true
        },
        qr_code: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
    }, {
        sequelize: database,
        tableName: 'register',
        timestamps: true
    }
);

