import {Application} from 'express';

/* Controllers */
import ExampleController from "../controllers/example.controller";

/* Middlewares */

class Routes {
    public exampleController: ExampleController = new ExampleController();
    public routes(app: Application) {
        app.route('/api/example').get(this.exampleController.example)
    }
}

export default Routes;
