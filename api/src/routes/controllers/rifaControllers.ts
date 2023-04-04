import { rifaType } from "../../typos";

const { Rifa } = require("../../database");

export const getRifas = async () => {
  try {
    const findRifas = await Rifa.findAll();
    if (findRifas.length) {
      return findRifas;
    } else {
      throw new Error("No se encontraron rifas");
    }
  } catch (error: any) {
    throw new Error(error);
  }
};

export const createRifa = async (body: rifaType) => {
  try {
    console.log(body);
    const findRifa = await Rifa.findAll({ where: { name: body.name } });
    console.log("find", findRifa);
    if (findRifa.length) {
      throw new Error("Ya existe una rifa con ese nombre");
    }
    const newObj = {
      name: body.name,
      price: body.price,
      loot: 0,
      dateRifa: body.dateRifa,
    };
    console.log("asdasda2", body);

    if (typeof body.loot === "number") {
      console.log("entroaca");
      newObj.loot = body.loot;
    } else if (typeof body.loot === "string") {
      if (!isNaN(parseFloat(body.loot))) {
        console.log("entroaca2");
        console.log("asda", body.loot);
        console.log("asd2", parseFloat(body.loot));
        newObj.loot = parseFloat(body.loot);
      } else {
        console.log("entroaca3");
        throw new Error("El premio debe ser un numero");
      }
    }

    const result = await Rifa.create(newObj);

    if (result) {
      return result;
    } else {
      throw new Error("no se pudo crear la rifa");
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
