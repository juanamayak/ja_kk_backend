import {Op} from 'sequelize';
import {RegisterModel} from '../models/register.model';

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
}
