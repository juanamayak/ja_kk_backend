import {Response, Request} from 'express'
import {JsonResponse} from "../enums/json-response";
import QRCode from 'qrcode';
import {File} from '../helpers/files';

/* Queries */
import {KidsQuery} from '../queries/kids.query';
import {RegisterModel} from "../models/register.model";

export class RegisterController {
    static file: File = new File()
    static kidsQuery: KidsQuery = new KidsQuery();

    public async show(req: Request, res: Response) {
        const registerId = req.params.id;

        const register = await RegisterController.kidsQuery.show(registerId);

        if (!register.ok || !register.register) {
            return res.status(400).json({
                ok: false,
                message: 'No se encontro el registro solicitado'
            })
        }

        return res.status(200).json({
            ok: true,
            register: register.register,
        });
    }

    public async index(req: Request, res: Response) {

        const registers = await RegisterController.kidsQuery.index();

        if (!registers.ok) {
            return res.status(400).json({
                ok: false,
                message: 'No se encontro el registro solicitado'
            })
        }

        return res.status(200).json({
            ok: true,
            registers: registers.registers,
        });
    }

    public async confirmation(req: Request, res: Response) {
        const registerId = req.params.id;

        const register = await RegisterController.kidsQuery.show(registerId);

        if (!register.ok) {
            return res.status(400).json({
                ok: false,
                message: 'No se encontro el registro solicitado'
            })
        }

        const fileName = register.register ? register.register.qr_code : null;
        const qr = await RegisterController.file.download(fileName);

        if (!qr.ok) {
            return res.status(400).json({
                ok: false,
                message: 'Existen problemas al descargar el archivo QR'
            })
        }

        return res.status(200).json({
            ok: true,
            register: register.register,
            qr: qr.qr
        });
    }

    public async getQRCodeImage(req: Request, res: Response){
        const registerId = req.params.id;

        const register = await RegisterController.kidsQuery.show(registerId);

        if (!register.ok) {
            return res.status(400).json({
                ok: false,
                message: 'No se encontro el registro solicitado'
            })
        }

        const fileName = register.register ? register.register.qr_code : null;
        const qr = await RegisterController.file.download(fileName);

        if (!qr.ok) {
            return res.status(400).json({
                ok: false,
                message: 'Existen problemas al descargar el archivo QR'
            })
        }

        return res.status(200).json({
            ok: true,
            qr: qr.qr
        });

    }

    public async register(req: Request, res: Response) {

        const data = req.body;

        const kid = await RegisterController.kidsQuery.register(data);

        if (!kid.ok) {
            return res.status(400).json({
                ok: false,
                message: 'Ocurrio un error a la hora realizar el registro'
            })
        }

        const registerId = kid.kid? kid.kid.id : null;
        QRCode.toDataURL(`/verificacion/${registerId}`, {
            errorCorrectionLevel: 'H',
            type: 'image/jpeg',
            margin: 1
        }).then(async (url) => {
            const imageUpload = await RegisterController.file.converBase64ToJpg(url);
            if (!imageUpload.ok) {
                return res.status(400).json({
                    ok: false,
                    message: 'Existen problemas al guardar el archivo QR. Contacte a soporte.',
                })
            }

            const dataUpdate = {
                qr_code: imageUpload.image
            }

            const updatedRegister = await RegisterController.kidsQuery.update(registerId, dataUpdate);

            if (!updatedRegister.ok) {
                return res.status(400).json({
                    ok: false,
                    message: 'Existen problemas al actualizar el registro.',
                })
            }

            return res.status(200).json({
                ok: true,
                message: 'El registro se realizo con exito.',
                register: kid.kid,
            });
        }).catch(err => {
            console.log(err);
            return res.status(400).json({
                ok: false,
                message: 'Ocurrio un error a la hora realizar el registro. Intente nuevamente :)'
            })
        });
    }
}

