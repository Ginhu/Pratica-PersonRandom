import { getPersons } from "../repositories/repository";

type Resposta = {id: number; firstName: string; lastName: string}

export async function personService(){
    const people = await getPersons()
    const respo: Resposta[] = people.rows
    return respo
}