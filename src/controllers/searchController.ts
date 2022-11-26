import { Request, Response } from "express";
import { Clothe } from "../models/clothe";
import { createMenuOject };

export const search = (req: Request, res: Response) => {
    let query: string = req.query.busca as string;

    if (!query) {
        res.redirect('/');
        return;
    }

    let list = Clothe.getFromName(query);

    res.render('pegas/page', {
        menu: createMenuOject(''),
        list,
        query,
    })
};
 
