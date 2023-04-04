import { Request, Response, NextFunction } from "express";
const {check } = require("express-validator");
const {validateResult} = require("./validatorHelpers/validateHelper");


const createTicketValidate = [
    check('idRifa').exists().withMessage('Se debe ingresar el ID de la rifa').not().isEmpty().isString().withMessage('el id debe de ser un string'),
    check('ticketNumber').exists().withMessage('Se debe ingresar un N° de Ticket').not().isEmpty().isNumeric().withMessage('N° de ticket debe ser tipo numerico'),
    check('ticketState').exists().withMessage('Se debe ingresar el estado del ticket').not().isEmpty().isString().withMessage('Loot debe ser un string'),
    (req: Request, res: Response, next: NextFunction) => {
        validateResult(req, res, next);
    }
];


module.exports = { createTicketValidate };