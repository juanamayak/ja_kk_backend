import {Model, DataTypes} from 'sequelize';
import {database} from '../config/database';

export class RegisterModel extends Model {
    public id: any;
    public kid_name: any;
    public kid_birthday: any;
    public kid_age: any;
    public studying_level: any;
    public father_name: any;
    public father_cellphone: any;
    public mother_name: any;
    public mother_cellphone: any;
    public address: any;
    public phone: any;
    public ap_name_one: any;
    public ap_relationship_one: any;
    public ap_cellphone_one: any;
    public ap_name_two: any;
    public ap_relationship_two: any;
    public ap_cellphone_two: any;
    public kid_allergy: any;
    public allergy_description: any;
    public mdf_member: any;
    public email: any;
    public invited_by_mdf_member: any;
    public inviters_name: any;
    public qr_code: any;
    public terms: any;
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
            type: DataTypes.STRING(100),
            allowNull: false
        },
        studying_level: {
            type: DataTypes.STRING(100),
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
        address: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING(15),
            allowNull: false
        },
        ap_name_one: {
            type: DataTypes.STRING(150),
            allowNull: true
        },
        ap_relationship_one: {
            type: DataTypes.STRING(150),
            allowNull: true
        },
        ap_cellphone_one: {
            type: DataTypes.STRING(15),
            allowNull: true
        },
        ap_name_two: {
            type: DataTypes.STRING(150),
            allowNull: true
        },
        ap_relationship_two: {
            type: DataTypes.STRING(150),
            allowNull: true
        },
        ap_cellphone_two: {
            type: DataTypes.STRING(15),
            allowNull: true
        },
        kid_allergy: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        allergy_description: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        mdf_member: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        invited_mdf_member: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        inviters_name: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        qr_code: {
            type: DataTypes.STRING(150),
            allowNull: true
        },
        terms: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        sequelize: database,
        tableName: 'register',
        timestamps: true
    }
);

