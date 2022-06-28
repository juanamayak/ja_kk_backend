import {Application} from 'express';

/* Controllers */
import {RegisterController} from "../controllers/register.controller";

/* Middlewares */

export class Routes {
    public registerController: RegisterController = new RegisterController();
    public routes(app: Application) {
        /* Rout for kids register */
        app.route('/api/register').post(this.registerController.register)
    }
}
