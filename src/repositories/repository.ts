import { db } from "../config/database"

export function getPersons() {
    return db.query(`SELECT * FROM people;`)
}