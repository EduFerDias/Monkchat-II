import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3030'
})

export default class Api {
    async ListarAlunos() {
        let r = await api.get(`/matricula`);
        return r.data;
    } 

    async InserirAluno (dado) {
        try{


        let r = await api.post(`/matricula`, dado)
        return r.data;
    } catch(e){
        return`${e}`
    }
    }

    async AlterarAluno(id, info) {
        let r = await api.put(`/matricula/${id}`, info)
        return r.data;
    }

    async DeletarAluno(id) {
        let r = await api.delete(`/matricula/${id}`)
        return r.data;
    }
}