import { Request, Response, NextFunction } from "express";
const {check } = require("express-validator");
const {validateResult} = require("./validatorHelpers/validateHelper");


const createRifaValidate = [
    check('name').exists().withMessage('se debe ingresar un nombre').not().isEmpty().isString().withMessage('el nombre debe de ser un string').isLength({ min: 5 }).withMessage('Minimo 5+ caracteres de longitud'),
    check('price').exists().withMessage('Se debe ingresar un precio').not().isEmpty().isNumeric().withMessage('precio debe ser un numero'),
    check('loot').exists().withMessage('Se debe ingresar el monto del premio').not().isEmpty().isNumeric().withMessage('Loot debe ser un numero'),
    check('dateRifa').exists().withMessage('Se debe ingresar una fecha para la rifa').not().isEmpty().isString().withMessage('La fecha debe ser un string'),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    }
];


module.exports = { createRifaValidate };