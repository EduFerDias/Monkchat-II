import express from "express"
import db from "./db.js"
import cors from "cors"

const app = express();
app.use(cors());

app.get ('/ninjas', async (req, resp) =>{
    let ninjas = await db.tb_ponto_extra_tarde.findAll()
    resp.send(ninjas);
})

app.listen(process.env.PORT,
    x => console.log(`The server is running at port: ${process.env.PORT}`))