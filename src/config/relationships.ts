import {RegisterModel} from '../models/register.model';
import {CheckInAndOutModel} from '../models/checkin_and_out.model';

export default class Relationship {
    static init() {
        RegisterModel.hasMany(CheckInAndOutModel, {foreignKey: 'register_id'});
    }
}
