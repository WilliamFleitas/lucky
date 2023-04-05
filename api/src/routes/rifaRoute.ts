import { Router, Request, Response } from "express";
import { createRifa, getRifas } from "./controllers/rifaControllers";
import { TokenValidation } from "../libs/validateToken";
import { checkRoleAdmin, checkRoleAuth } from "../libs/roleAuth";
const {createRifaValidate} = require("../validators/rifaValidator");
const route = Router();
const rolType1: string = process.env.ROL_TYPE1 as string;
const rolType2: string = process.env.ROL_TYPE2 as string;

route.get("/allrifas", TokenValidation, checkRoleAuth(rolType1, rolType2), async (_req: Request, res: Response) => {
        try {
            const result = await getRifas();
            res.status(200).send(result);
        } catch (error: any) {
            res.status(400).send(error.message);
        }
});

route.post("/createrifa",TokenValidation, checkRoleAdmin(rolType1), createRifaValidate,  async (req: Request, res: Response) => {
    const  body  = req.body;
    try {
       const result = await createRifa(body);
       console.log("resultrifa", result);
       
        res.status(200).send(result);
       
    } catch (error: any) {
        res.status(400).send(error.message);
    }

});

export default route;