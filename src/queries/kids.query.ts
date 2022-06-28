import {Op} from 'sequelize';
import {RegisterModel} from '../models/register.model';

export class KidsQuery {
    public async register(data: any) {
        try {
            const kid = await RegisterModel.create(data);
            return {ok: true, kid}
        } catch (e) {
            console.log(e);
            return {ok: false}
        }
    }
}
