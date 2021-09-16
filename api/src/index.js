import db from './db.js'
import cors from "cors"
import express from "express"

const app = express();
app.use(cors());
app.use(express.json());

app.get('/matricula', async(req, resp) =>{
    let r = await db.tb_matricula.findAll({
       order:[["id_matricula", "desc"]]
    });
    resp.send(r);
});

app.post('/matricula', async(req, resp) =>{
    try{
        let data = req.body;

        if(data.nome.length < 4){
            resp.send({erro: "o nome não pode ter menos que quatro caractéres"})
            return;
        } 
        else if (data.chamada <= 0) {
            resp.send({erro: "a chamada não pode ser menor ou igual a zero"})
            return;
        }
        else if (data.curso.length <  4 ) {
            resp.send({erro: "a chamada não pode ter menos que quatro caractéres"})
            return;
        } 
        else if (data.turma.length < 4) {
            resp.send({erro: "a turma não pode ter menos que quatro caracteres"})
            return;
        } 
        else if (isNaN(data.chamada)) {
            resp.send({erro: "a chamada tem que ser um numero"})
            return;
        } 
        else if ( !isNaN(data.curso)) {
            resp.send({erro: "o nome do curso não pode ser um numero"})
            return;
        } 
        else if ( !isNaN(data.nome)) {
            resp.send({erro: "o nome do aluno não pode ser um numero"})
            return;
        } 
        else if ( !isNaN(data.turma)) {
            resp.send({erro: "o nome da turma não pode ser um numero"})
            return;
        }       

        let insert = {
            nm_aluno: data.nome,
            nr_chamada: data.chamada,
            nm_curso: data.curso,
            nm_turma: data.turma
        }

        let rev = await db.tb_matricula.findOne({where:{nm_turma: insert.nm_turma, nr_chamada: insert.nr_chamada}})
        if(rev !== null){
            resp.send({erro: "este aluno ja existe"})
            return;
        }

        let r = await db.tb_matricula.create(insert)
        resp.sendStatus(200);
    } catch(e) {
        resp.send({erro: `${e}`})
    }
});

app.put('/matricula/:id', async (req, resp) => {
    try{
        let {nome, chamada, curso, turma} = req.body;
        let id = Number(req.params.id);

        if(nome.length < 4){
            resp.send({erro: "o nome não pode ter menos que quatro caractéres"})
            return;
        } 
        else if (chamada <= 0) {
            resp.send({erro: "a chamada não pode ser menor ou igual a zero"})
            return;
        }
        else if (curso.length <  4 ) {
            resp.send({erro: "a chamada não pode ter menos que quatro caractéres"})
            return;
        } 
        else if (turma.length < 4) {
            resp.send({erro: "a turma não pode ter menos que quatro caracteres"})
            return;
        } 
        else if (isNaN(chamada)) {
            resp.send({erro: "a chamada tem que ser um numero"})
            return;
        } 
        else if (!isNaN(curso)) {
            resp.send({erro: "o nome do curso não pode ser um numero"})
            return;
        } 
        else if (!isNaN(nome)) {
            resp.send({erro: "o nome do aluno não pode ser um numero"})
            return;
        } 
        else if (!isNaN(turma)) {
            resp.send({erro: "o nome da turma não pode ser um numero"})
            return;
        } 

        let ref = {
            nm_aluno:nome,
            nr_chamada:chamada,
            nm_curso:curso,
            nm_turma:turma
        }
        
        let rev = await db.tb_matricula.findOne({where:{ nm_turma: ref.nm_turma, nr_chamada: ref.nr_chamada}})
        if(rev !== null){
            resp.send({erro: "este aluno ja existe"})
            return;
        }

        let r = await db.tb_matricula.update(ref, {where:{id_matricula:id}})
        resp.sendStatus(200)
    } catch(e){
        resp.send({erro: `Erro ${e}`})
    }
});

app.delete('/matricula/:id', async (req, resp) => {
    try {
        let id = req.params.id;

        let r = db.tb_matricula.destroy({where:{id_matricula:id}})

        resp.sendStatus(200)
    } catch(e) {
        resp.send({erro: `${e}`})
    }

});

app.listen(process.env.PORT,
            x => console.log(`>> Server running at port ${process.env.PORT}`))