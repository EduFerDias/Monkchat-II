import express from "express"
import db from './bd.js'
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());


app.get ('/ninjas', async (req, resp) =>{
    let ninjas = await db.tb_ponto_extra_tarde.findAll()
    resp.send(ninjas);
})

app.post ('/ninjas', async (req, resp) => {
    
    let ninja = req.body;

    let insertNinja = {
        nm_aluno: ninja.nome,
        nm_turma: ninja.turma,
        nr_chamada: ninja.numero
    }

    let r = await db.tb_ponto_extra_tarde.create(insertNinja)
    resp.send(r)
})

app.listen(process.env.PORT,
    x => console.log(`The server is running at port: ${process.env.PORT}`))