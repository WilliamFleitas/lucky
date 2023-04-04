import { Router, Request, Response } from "express";
import { createRifa, getRifas } from "./controllers/rifaControllers";
const {createRifaValidate} = require("../validators/rifaValidator");
const route = Router();

route.get("/allrifas", async (_req: Request, res: Response) => {
        try {
            const result = await getRifas();
            res.status(200).send(result);
        } catch (error: any) {
            res.status(400).send(error.message);
        }
});

route.post("/createrifa",createRifaValidate,  async (req: Request, res: Response) => {
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