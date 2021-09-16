import db from './bd.js'
import cors from "cors"
import express from "express"

const app =  express();

app.use(cors());
app.use(express.json());

app.get('/produto', async (req, resp) => {
    try{
        let r = await db.tb_produto.findAll({
            order:[["id_produto", "desc"]]
        });
        resp.send(r);
    }catch(e){
        console.log(e);
    }
});

app.post('/produto', async (req, resp) => {
    try{
       const {nome, categoteria, pr_de, pr_por, avaliacao, desc, estoque, link} = req.body;
       if(nome.length < 4){
           resp.send({erro: "o campo nome não pode conter menos de quatro caracteres"})
           return;
       } else if (categoteria.length < 4 ) {
           resp.send({erro: "o campo categoria não pode conter menos de quatro caracteres"})
           return;
       } else if (desc.length < 4){
           resp.send({erro: "o campo de descrição nao pode conter menos de quatro caratceres"})
           return;
       } else if (link.length < 4){
           resp.send({erro: "o campo de Link não pode ser menor que quatro caracteres"})
           return;
       } else if (pr_de <= 0 || pr_por <= 0) {
            resp.send({erro: "os campos de preço tem que ser maior ou igual a zero"})
            return;
       } else if (avaliacao <= 0){
            resp.send({erro: "o campo de avaliacao não pode ser menor ou igual a zero"})
            return;
       } else if(estoque <= 0 ) {
           resp.send({erro: "o campo de estoque não pode ser menor ou igual a zero"})
           return;
       } else if (isNaN(pr_de) || isNaN(pr_por)){
           resp.send({erro: "os campos referentes a preço tem que ser um numero"})
           return;
       } else if (isNaN(avaliacao)){
           resp.send({erro: "o campo de avaliacao tem que ser um numero"})
           return;
       } else if(isNaN(estoque)) {
           resp.send({erro: "o campo de estoque tem que ser um numero"})
           return;
       }

       let verif = await db.tb_produto.findOne({where:{nm_produto: nome}})
       if(verif != null){
           resp.send({erro:"o produto inserido já existe!"})
           return;
       }

        let insert = {
            nm_produto: nome,
            ds_categoria: categoteria,
            vl_preco_de: Number(pr_de).toFixed(2),
            vl_preco_por: Number(pr_por).toFixed(2),
            vl_avaliacao: Number(avaliacao).toFixed(2),
            ds_produto: desc,
            qtd_estoque: Number(estoque),
            img_produto: link,
            bt_ativo: true,
            dt_inclusao: new Date()
        }

        let r = await db.tb_produto.create(insert);
        resp.sendStatus(200);
    }catch(e){
        console.log(e)
    }
});
app.put('/produto/:id', async (req, resp) => {
    try{
        const {nome, categoteria, pr_de, pr_por, avaliacao, desc, estoque, link} = req.body;
        let id = req.params.id;
        if(nome.length < 4){
            resp.send({erro: "o campo nome não pode conter menos de quatro caracteres"})
            return;
        } else if (categoteria.length < 4 ) {
            resp.send({erro: "o campo categoria não pode conter menos de quatro caracteres"})
            return;
        } else if (desc.length < 4){
            resp.send({erro: "o campo de descrição nao pode conter menos de quatro caratceres"})
            return;
        } else if (link.length < 4){
            resp.send({erro:"o campo de Link não pode ser menor que quatro caracteres"})
            return;
        } else if (pr_de <= 0 || pr_por <= 0) {
             resp.send({erro:"os campos de preço tem que ser maior ou igual a zero"})
             return;
        } else if (avaliacao <= 0){
             resp.send({erro:"o campo de avaliacao não pode ser menor ou igual a zero"})
             return;
        } else if(estoque <= 0 ) {
            resp.send({erro:"o campo de estoque não pode ser menor ou igual a zero"})
            return;
        } else if (isNaN(pr_de) || isNaN(pr_por)){
            resp.send({erro:"os campos referentes a preço tem que ser um numero"})
            return;
        } else if (isNaN(avaliacao)){
            resp.send({erro: "o campo de avaliacao tem que ser um numero"})
            return;
        } else if(isNaN(estoque)) {
            resp.send({erro: "o campo de estoque tem que ser um numero"})
            return;
        }

        let insert = {
            nm_produto: nome,
            ds_categoria: categoteria,
            vl_preco_de: Number(pr_de).toFixed(2),
            vl_preco_por: Number(pr_por).toFixed(2),
            vl_avaliacao: Number(avaliacao).toFixed(2),
            ds_produto: desc,
            qtd_estoque: Number(estoque),
            img_produto: link,
            bt_ativo: true,
        }
        let r = await db.tb_produto.update(insert, {where:{id_produto: id}})
        resp.sendStatus(200);
    }catch(e){
        console.log(e)
    }
});
app.delete('/produto/:id', async (req, resp) => {
    let id = req.params.id;

    let r = await db.tb_produto.destroy({where:{id_produto: id}});
    resp.sendStatus(200);
});



app.listen( process.env.PORT,
            x => console.log(`>> Server up at port: ${ process.env.PORT }`))