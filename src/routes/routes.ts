import {Application} from 'express';

/* Controllers */
import {RegisterController} from "../controllers/register.controller";
import {CheckinAndOutController} from "../controllers/checkin_and_out.controller";

/* Middlewares */
import {validateCreate} from '../validators/register.validator';

export class Routes {
    public registerController: RegisterController = new RegisterController();
    public checkinAndOutController: CheckinAndOutController = new CheckinAndOutController();
    public routes(app: Application) {
        /* Routes for kids register */
        app.route('/api/register').post(validateCreate, this.registerController.register);
        app.route('/api/register/:id').get(this.registerController.show);
        app.route('/api/register/qr/:id').get(this.registerController.getQRCodeImage);
        app.route('/api/register/confirmation/:id').get(this.registerController.confirmation);

        /* Routes for check in and out*/
        app.route('/api/checkinAndOut/:id').get(this.checkinAndOutController.showByRegister);
        app.route('/api/checkinAndOut/checkin').post(this.checkinAndOutController.checkin);
        app.route('/api/checkinAndOut/checkout/:id').put(this.checkinAndOutController.checkout);
    }
}
