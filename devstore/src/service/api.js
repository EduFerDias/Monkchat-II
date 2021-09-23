import axios from 'axios'

const api = axios.create({
    baseURL:'https://prova--api.herokuapp.com'
})

export default class Api {
    async listarProdutos() {
        let r = await api.get('/produto')
        return r.data;
    }
    async inserirProduto (nome, categoteria, pr_de, pr_por, avaliacao, desc, estoque, link) {
        let insert = {
            nome,
            categoteria,
            pr_de,
            pr_por,
            avaliacao,
            desc,
            estoque,
            link,
        }

        let r = await api.post('/produto', insert);
        return r.data;
    }
    async alterarAluno (id, nome, categoteria, pr_de, pr_por, avaliacao, desc, estoque, link) {
        let insert = {
            nome,
            categoteria,
            pr_de,
            pr_por,
            avaliacao,
            desc,
            estoque,
            link,
        }
        let r = await api.put(`/produto/${id}`, insert)
        return r.data;
    }

    async apagarProduto (id){
        let r =  await api.delete(`/produto/${id}`)
        return r.data
    }
}