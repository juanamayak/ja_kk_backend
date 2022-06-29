import { check } from 'express-validator';
import {validateResult} from '../helpers/validate';

export const validateCreate = [
    check('kid_name').exists().notEmpty().withMessage('Ingrese el nombre del niño/a correctamente.'),
    check('kid_birthday').exists().notEmpty().withMessage('Ingrese la fecha de nacimiento correctamente.'),
    check('kid_age').exists().notEmpty().withMessage('Ingrese la fecha de nacimiento correctamente.'),
    check('is_kid_allergy').exists().notEmpty().withMessage('Indique si el niño/a es alérgico'),
    check('kid_allergy_description').exists().withMessage('Ingrese la descripción de la alergia'),
    check('father_name').exists().notEmpty().withMessage('Ingrese el nombre del padre correctamente.'),
    check('father_cellphone').exists().notEmpty().withMessage('Ingrese el número celular del padre correctamente.'),
    check('mother_name').exists().notEmpty().withMessage('Ingrese el nombre de la madre correctamente.'),
    check('mother_cellphone').exists().notEmpty().withMessage('Ingrese el número celular de la madre correctamente.'),
    check('phone').exists().notEmpty().withMessage('Ingrese el telefono fijo correctamente.'),
    check('address').exists().notEmpty().withMessage('Ingrese la dirección correctamente.'),
    check('email').exists().notEmpty().isEmail().withMessage('Ingrese el correo electrónico correctamente.'),
    check('authorized_person').exists().withMessage('Ingrese la persona autorizada para recoger al niño/a.'),
    check('is_member').exists(),
    check('invited_by_mdf_member').exists(),
    check('who_invites_name').exists().withMessage('Ingrese el nombre de la persona que lo invito.'),
    (req: any, res: any, next: any) => {
        validateResult(req, res, next)
    }
];
