import { personService } from "../service/service";
import { Request, Response } from "express";

export async function personController(req: Request, res: Response) {
    const persons = await personService()
    const random = Math.ceil((Math.random() * persons.length)-1)
    res.send(persons[random])
}