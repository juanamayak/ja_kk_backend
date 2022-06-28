import { Model, DataTypes } from 'sequelize';
import { database } from '../config/database';

 export class checkin_and_out extends Model { 	
   public id:any;
   public register_id:any;
   public checkin_date:any;
   public checkout_date:any;
   public createdAt:any;
   public updatedAt:any; 
 } 

checkin_and_out.init({
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         comment: "null",
         autoIncrement: true
      },
      register_id: {
         type: DataTypes.INTEGER,
         allowNull: false
      },
      checkin_date: {
         type: DataTypes.DATE,
         allowNull: false
      },
      checkout_date: {
         type: DataTypes.DATE,
         allowNull: true
      },
      createdAt: {
         type: DataTypes.DATE,
         allowNull: true
      },
      updatedAt: {
         type: DataTypes.DATE,
         allowNull: true
      }
   }, {
      sequelize: database,
      tableName: 'checkin_and_out',
      timestamps: false
   }
);

