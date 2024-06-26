import {Op} from 'sequelize';
import {RegisterModel} from '../models/register.model';
import {CheckInAndOutModel} from "../models/checkin_and_out.model";
import moment from "moment";

export class KidsQuery {

    public async show(registerId: any) {
        try {
            const register = await RegisterModel.findOne({
                where: {
                    id: registerId
                }
            })
            return {ok: true, register}
        } catch (e) {
            console.log(e);
            return {ok: false}
        }
    }

    public async index() {
        try {
            const registers = await RegisterModel.findAll({
                include: [
                    {
                        model: CheckInAndOutModel,
                        order: [['createdAt', 'DESC']]
                    }
                ]
            });
            return {ok: true, registers}
        } catch (e) {
            console.log(e);
            return {ok: false}
        }
    }

    public async register(data: any) {
        try {
            const kid = await RegisterModel.create(data);
            return {ok: true, kid}
        } catch (e) {
            console.log(e);
            return {ok: false}
        }
    }

    public async update(registerId: any, data: any) {
        try {
            const register = await RegisterModel.update(
                data,
                {
                    where: {
                        id: registerId
                    }
                }
            );
            return {ok: true}
        } catch (e) {
            console.log(e);
            return {ok: false}
        }
    }

    public async indexByAge(age: any){
        try {
            const registers = await RegisterModel.findAll({
                where: {
                    kid_age: age
                },
                include: [
                    {
                        model: CheckInAndOutModel,
                        order: [['createdAt', 'DESC']]
                    }
                ]
            });
            return {ok: true, registers}
        } catch (e) {
            console.log(e);
            return {ok: false}
        }
    }
}
