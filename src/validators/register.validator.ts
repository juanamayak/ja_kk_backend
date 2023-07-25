import { check } from 'express-validator';
import {validateResult} from '../helpers/validate';

export const validateCreate = [
    check('kid_name').exists().notEmpty().withMessage('Ingrese el nombre del niño/a correctamente.'),
    check('kid_birthday').exists().notEmpty().withMessage('Ingrese la fecha de nacimiento correctamente.'),
    check('kid_age').exists().notEmpty().withMessage('Ingrese la edad del niño correctamente.'),
    check('father_name').exists().notEmpty().withMessage('Ingrese el nombre del padre correctamente.'),
    check('father_cellphone').exists().notEmpty().withMessage('Ingrese el número celular del padre correctamente.'),
    check('mother_name').exists().notEmpty().withMessage('Ingrese el nombre de la madre correctamente.'),
    check('mother_cellphone').exists().notEmpty().withMessage('Ingrese el número celular de la madre correctamente.'),
    check('address').exists().notEmpty().withMessage('Ingrese la dirección correctamente.'),
    check('ap_name_one').exists().notEmpty().withMessage('Ingrese el nombre de la persona autorizada'),
    check('ap_relationship_one').exists().notEmpty().withMessage('Ingrese el parentesco de la persona autorizada'),
    check('ap_cellphone_one').exists().notEmpty().withMessage('Ingrese el numero celular de la persona autorizada'),
    check('kid_allergy').exists().notEmpty().withMessage('Indique si el niño/a es alérgico'),
    check('allergy_description').exists().withMessage('Ingrese la descripción de la alergia'),
    check('mdf_member').exists().notEmpty().withMessage('Ingrese si es miembro de Mundo de Fe Playa'),
    check('invited_mdf_member').exists().notEmpty().withMessage('Ingrese si lo invito alguien de Mundo de Fe Playa'),
    (req: any, res: any, next: any) => {
        validateResult(req, res, next)
    }
];
