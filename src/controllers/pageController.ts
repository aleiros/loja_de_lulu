import { Request, Response } from "express";
import { title } from "process";
import { createMenuObject } from "../helpers/createMenuObject.js";
import { Clothe } from "../models/clothe.js";

export const home = (req: Request, res: Response) => {
    let list = Clothe.getAll();

    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: "Todos os Produtos",
            background: "banner.jpeg",
        }
        list,
    })
};

export const vestidos = (req: Request, res: Response) => {
    let list = Clothe.getFromType('vestido');

    res.render('pegas/page', {
        menu: createMenuObject('vestido'),
        banner: {
            title: "Vestidos",
            background: "roupas.jpg",
        }
        list,
    })
};

export const sapatos = (req: Request, res: Response) => {
    let list = Clothe.getFromType("sapato");

    res.render('pegas/page', {
        menu: createMenuObject('sapato'),
        banner: {
            title: "Sapatos",
            background: "sapatos.jpg",
        }
        list,
    })
};

export const joias = (req: Request, res: Response) => {
    let list = Clothe.getFromType("joia");

    res.render('pegas/pega', {
        menu: createMenuObject('joia'),
        benner: {
            title: "Jóias",
            background: "joias.jpg",
        }
        list,
    })
};