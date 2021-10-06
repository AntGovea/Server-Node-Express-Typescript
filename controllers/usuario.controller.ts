import { Request, Response } from "express";


export const getUsuarios = (req: Request, res: Response) => {
	res.status(200).send("get Api ");
	
};
export const postUsuarios = (req: Request, res: Response) => {
	res.status(201).send("post Api ");
	
};
export const putUsuarios = (req: Request, res: Response) => {
	res.status(202).send("put Api ");
	
};
export const deleteUsuarios = (req: Request, res: Response) => {
	res.status(202).send("delete Api ");
	
};
export const patchUsuarios = (req: Request, res: Response) => {
	res.status(202).send("pacth Api ");
	
};


