import {Response, Request} from 'express'
import {JsonResponse} from "../enums/json-response";
import QRCode from 'qrcode';

/* Queries */
import {KidsQuery} from '../queries/kids.query';

export class RegisterController {

    static kidsQuery: KidsQuery = new KidsQuery();

    public async register(req: Request, res: Response) {

        const data = req.body;
        let qr: any;

        const kid = await RegisterController.kidsQuery.register(data);

        if (!kid.ok) {
            return res.status(400).json({
                ok: false,
                message: 'Ocurrio un error a la hora realizar el registro. Intente nuevamente :)'
            })
        }



        QRCode.toDataURL('https://mundodefeplaya.org').then(url => {
            return res.status(200).json({
                ok: true,
                message: 'Se ha creado la cuenta correctamente',
                kid: kid.kid,
                qr: url
            });
        }).catch(err => {
            return res.status(400).json({
                ok: false,
                message: 'Ocurrio un error a la hora realizar el registro. Intente nuevamente :)'
            })
        });
    }

    public async users(req: Request, res: Response) {
        return res.status(JsonResponse.OK).json({
            ok: true,
            users: [
                {'name': 'Xavier', 'password': 'Xavier123--'},
                {'name': 'Peter', 'password': 'Peter123--'},
                {'name': 'María', 'password': 'Maria123--'},
                {'name': 'Jhon', 'password': 'Jhon123--'},
                {'name': 'Adele', 'password': 'Adele123--'},
            ]
        })
    }
}

