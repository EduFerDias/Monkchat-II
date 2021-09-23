import { useEffect, useState, useRef } from 'react'
import { Faixa1 } from './styled'
import Api from '../service/api'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar'

import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const api = new Api();

export default function Pagina() {
    const loading =  useRef(null);

    async function listarProdutos(){
        let r = await api.listarProdutos();
        return setTb(r);
    }
    async function InserirProdutos(){
        let y = ''
        let r = undefined;

        if(alterarId > 0){
            loading.current.continuousStart();
            r = await api.alterarAluno(alterarId, nome, cat, preco_d, preco_p, ava, desc, estoq, link)
            y = 'Produdo alterado com sucesso!';
            setAlt(0)
        }
        else{
            loading.current.continuousStart();
            r = await api.inserirProduto(nome.trim(), cat.trim(), preco_d, preco_p, ava, desc.trim(), estoq, link.trim());
            y = 'Produto inserido com sucesso!';
        }

        if(r.erro){
            toast.error(`Erro: ${r.erro}`)
            loading.current.complete();
            return;
        }else{
            toast.success(y)
            loading.current.complete();
        }
        setNm('');
        setCat('');
        setAva('');
        setLink('');
        setPrd('');
        setPrp('');
        setEstoq('');
        setDesc('');
        loading.current.complete();
        return;
    }

    async function deletarProduto(id){
        confirmAlert({
            title:`Apagar produto ${id}`,
            message: `Tem certeza que quer apagar o produto ${id}?`,
            buttons: [
                {
                    label:"Sim",
                    onClick: async () => {
                        loading.current.continuousStart();

                        let r = await api.apagarProduto(id);
                        toast.success("Produto apagado com sucesso!")

                        loading.current.complete();
                        return r;
                    }
                },
                {
                    label:"Não"
                }
            ]
        });

    }


    async function alterarAluno(item){
        setAlt(item.id_produto);

        setNm(item.nm_produto);
        setCat(item.ds_categoria);
        setAva(item.vl_avaliacao);
        setLink(item.img_produto);
        setPrd(item.vl_preco_de);
        setPrp(item.vl_preco_por);
        setEstoq(item.qtd_estoque);
        setDesc(item.ds_produto);
    }

    useEffect (() => {
        listarProdutos();
    });

    const [ tabela, setTb ] = useState([]);
    const [ alterarId, setAlt ] = useState(0);

    const [ nome, setNm ] = useState('');
    const [ cat, setCat ] = useState('');
    const [ preco_d , setPrd ] = useState('')
    const [ preco_p, setPrp ] =  useState('')
    const [ ava, setAva ]  = useState('')
    const [ desc, setDesc] =  useState('')
    const [ estoq, setEstoq ] = useState('')
    const [ link, setLink ]  = useState('')


    return(
        <Faixa1>
        <ToastContainer theme="dark" limit="4"/>
        <LoadingBar color="#6CC3DF" height="2px" ref={loading}/>
        <div class="sidebar">
            <div class="logo"><img src="../assets/images/Group 28.png" alt="" /></div>
            <div class="separacao">&nbsp;</div>
            <div class="gerenciamento"> Gerenciamento <img src="../assets//images/chevron-down.svg" alt=""/></div>
            <div class="produ"><div class="detalhe">&nbsp;</div>Produtos</div>
        </div>
        <div class="menu">
            <div class="cabecalho">
                <div class="user">
                    <div class="user-info">
                        <div class="notificacao"><button>3</button></div> 
                        <span>Ola, <span class="name">Beltrano</span></span>
                    </div>
                    <div class="user-interactions">
                        <button><img src="../assets/images/Vector.svg" alt="" /></button>
                        <button><img src="../assets/images/log-out.svg" alt="" /></button>
                    </div>
                </div>
                <hr/>
            </div>
            <div class="interactions">
                <div class="novo-produto">
                    <div class="np-titulo"><div class="linha">&nbsp;</div>{alterarId > 0 ?`Alterando o produto ${alterarId}` :"Novo Produto"}</div>
                    <div class="np-form">
                        <form>
                            <div class="f-doubles">
                                <label name="nome" class="nome">Nome: </label>
                                <input name="nome" type="text" value={nome} onChange={e => setNm(e.target.value)}/>

                                <label name="pr-de" class="pr-de">Preço DE:</label>
                                <input name="pe-de" type="text" value={preco_d} onChange={e => setPrd(e.target.value)}/>

                                <label name="cat" class="cat">Categoria: </label>
                                <input name="cat" type="text" value={cat} onChange={e => setCat(e.target.value)}/>


                                <label name="pr-por" class="pr-por">Preço POR:</label>
                                <input name="pr-por" type="text" value={preco_p} onChange={e => setPrp(e.target.value)}/>

                                <label name="ava" class="ava">Avaliação:</label>
                                <input name="ava" type="text" value={ava} onChange={e => setAva(e.target.value)}/>

                                <label name="estoq" class="estoq">Estoque:</label>
                                <input name="estoq" type="text" value={estoq} onChange={e => setEstoq(e.target.value)}/>
                            </div>
                            <div class="f-one">
                                <label name="link" class="link">Link da Imagem:</label>
                                <input type="text" name="link" value={link} onChange={e => setLink(e.target.value)}/>
                            </div>
                            <div class="f-desc">
                                <label name="descrcao" class="desc">Descrição:</label>
                                <textarea name="descricao" value={desc} onChange={e => setDesc(e.target.value)}></textarea>
                            </div>
                        </form>
                        <div class="f-button">
                            <button onClick={InserirProdutos} >{alterarId > 0 ?"Alterar" :"Cadastrar"}</button>
                        </div>
                    </div>
                </div>
                <div class="tabela-produto">
                    <div class="tp-titulo"><div class="linha2">&nbsp;</div>Produtos Cadastrados</div>
                    <div class="tp-produtos">
                        <table>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>ID</th>
                                    <th>Produto</th>
                                    <th>Categoria</th>
                                    <th>Preco</th>
                                    <th>Estoque</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {tabela.map(x => 
                                        <tr>
                                           <td class="celula-imagem"><img class="produto-imagem"src={x.img_produto} alt="" /></td>
                                           <td>{x.id_produto}</td>
                                           <td title={x.nm_produto}>{x.nm_produto.length < 25 && x.nm_produto != null ?x.nm_produto :x.nm_produto.substr(0,25)+'...'}</td>
                                           <td>{x.ds_categoria}</td>
                                           <td class="preco">R$ {x.vl_preco_por != null ?x.vl_preco_por.replace(".",",") :x.vl_preco_por}</td>
                                           <td>{x.qtd_estoque}</td>
                                           <td class="actions">
                                               <div class="action"><button><img onClick={() => alterarAluno(x)}src="../assets/images/edit.svg" alt="Editar"/></button></div>
                                               <div class="action"><button><img onClick={() => deletarProduto(x.id_produto)} src="../assets/images/trash-2.svg" alt="Deletar" /></button></div>
                                           </td>
                                        </tr>
                                )}
 

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        
        </div>
    </Faixa1>

    )
}