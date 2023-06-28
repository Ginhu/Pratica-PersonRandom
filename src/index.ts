import express from 'express';
import personRouter from './router/route';

const app = express()
app.use(express.json())
app.use(personRouter)

const PORT = 4000

app.listen(PORT, ()=> console.log(`Server running on Port: ${PORT}`))