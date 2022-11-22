import { Request, Response } from "express";
import { title } from "process";
import { createMenuObject } from "../helpers/createMenuObject.js";

export const home = (req: Request, res: Response) => {
    res.render('pages/page', {
        menu: createMenuObject('all'),
        banner: {
            title: "Todos os Produtos",
            background: "banner.jpeg",
        }
    })
};

export const vestidos = (req: Request, res: Response) => {
    res.render('pegas/page', {
        menu: createMenuObject('vestido'),
        banner: {
            title: "Vestidos",
            background: "roupas.jpg",
        }
    })
};

export const sapatos = (req: Request, res: Response) => {
    res.render('pegas/page', {
        menu: createMenuObject('sapato'),
        banner: {
            title: "Sapatos",
            background: "sapatos.jpg",
        }
    })
};

export const joias = (req: Request, res: Response) => {
    res.render('pegas/pega', {
        menu: createMenuObject('joia'),
        benner: {
            title: "Jóias",
            background: "joias.jpg",
        }
    })
};