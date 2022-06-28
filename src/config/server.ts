require('dotenv').config()
import express, {Application} from 'express';
import Routes from "../routes/routes";
import {Database} from './database'
import https from 'https';
import http from 'http';
import cors from 'cors';

class Server {
    private app: Application;
    private port: string;
    private server: https.Server | http.Server
    private routes: Routes = new Routes();
    static database: Database = new Database()

    constructor() {
        this.app = express();
        this.securityProtocol();
        this.config();
        this.database();
        this.server = https.createServer(this.app);
        this.port = process.env.LISTEN_PORT || '8001';
        this.routes.routes(this.app);
    }

    private config() { // configuración inicial del servidor
        // CORS
        this.app.use(cors());

        // Aqui podemos meter más seguridad con Helmet
    }

    private securityProtocol() {
        if (process.env.MODE === 'dev') {
            this.server = http.createServer(this.app);
        } else {
            console.log('Configurando Security Protocol para modo de producción...');
        }
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('API is running in port: ' + this.port);
        });
    }

    private async database() {
        let connection = await Server.database.connection()
        console.log(connection.message)
    }
}

export default Server;
