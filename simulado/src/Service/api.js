import axios from 'axios'

const api = axios.create({
    baseURL: 'https://simuladoapi.herokuapp.com'
})

export default class Api {
    async ListarAlunos() {
        let r = await api.get(`/matricula`);
        return r.data;
    } 

    async InserirAluno (nome, chamada, curso, turma) {
        try{
            
            let env = {
                nome,
                chamada,
                turma,
                curso
            }
             let r = await api.post(`/matricula`, env)
            return r.data;
    } catch(e){
        return`${e}`
    }
    }

    async AlterarAluno(id, nome, chamada, curso, turma) {
        let info = {
            nome,
            chamada,
            turma,
            curso
        }
        let r = await api.put(`/matricula/${id}`, info)
        return r.data;
    }

    async DeletarAluno(id) {
        let r = await api.delete(`/matricula/${id}`)
        return r.data;
    }
}