import { useState, useEffect, useRef } from "react";

import Api from '../../Service/api'

import Conteudo from './Style.js'

import LoadingBar from "react-top-loading-bar"

import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { confirmAlert } from "react-confirm-alert"
import 'react-confirm-alert/src/react-confirm-alert.css'

const api = new Api();

export default function Pagina () {
    const [ chamada, setCham ] = useState('')
    const [ nome, setNome ] = useState('')
    const [ turma, setTurma ] = useState('')
    const [ curso, setCurso ] = useState('')
    const [ alunos, setAlunos ] = useState([])
    const [ idAlt, setAlt ] = useState(0)

    const ref = useRef(null)

    useEffect (() => {
        carregarAlunos()
    });

    function validarResposta(r){
        let valido = false;
        if(r.erro){
            valido = true;
            toast.error(`Erro: ${r.erro}`);
            ref.current.complete();
        }
        return valido
    }

    async function carregarAlunos(){
       let r = await api.ListarAlunos();
       return setAlunos(r)
    }

    async function inserirAluno (){
        ref.current.continuousStart()
        let y = '';
        let r = undefined;
        

        if(idAlt !== 0){
                        let env = {
                            nome,
                            chamada,
                            turma,
                            curso
                        }
                        r = await api.AlterarAluno(idAlt, env)
                        y ='Aluno alterado com sucesso!'
                        setAlt(0);

        }else{

                let env = {
                            nome,
                            chamada,
                            turma,
                            curso
                        }
                        console.log(env);
                        y = 'Aluno inserido com sucesso!'
                        r = await api.InserirAluno(env)
            }

        if(validarResposta(r))
            return;
        else
            toast.success(y)

            setNome('');
            setTurma('');
            setCurso('');
            setCham('');
            ref.current.complete();
        return r
    }

    async function deletarAluno (id) {
        confirmAlert({
            title: "Remover aluno",
            message: `tem certeza que quer deletar o aluno ${id}?`,
            buttons: [
                {
                    label: "Sim",
                    onClick: async () => {
                        ref.current.continuousStart()

                        let r = await api.DeletarAluno(id);
                        toast.success('Aluno deletado com sucesso')

                        ref.current.complete()
                        return r;

                    }
                },
                {
                    label: "Não"
                }
            ]
        });
    }

    async function alterarAluno (x) {
        setAlt(x.id_matricula);
        setNome(x.nm_aluno);
        setCham(x.nr_chamada);
        setCurso(x.nm_curso);
        setTurma(x.nm_turma);
        return idAlt;
    }

    return(
        <Conteudo>
            <LoadingBar ref={ref} color='#E911C6'/>
            <ToastContainer theme="dark" />
            <div class="sidebar">
                <div class="logo"><img src="../assets/images/Logo.png" alt=""/></div>
                <div class="accent"></div>
                <div class="adm">Gerenciamento <img src="../assets/images/chevron-down.svg" alt=""/></div>
                <div class="students"><div class="detalhe">&nbsp;</div>Alunos</div>
            </div>
            <div class="menu">
                <div class="cabecalho">

                    <div class="usuario">
                        
                        <div class="foto-user">  
                                <button class="notificacao">3</button> 
                        </div> 
                        Olá, ciclano
                    
                    </div>

                    <div class="acoes">
                        <button class="action"><img src="../assets/images/Vector.svg" alt="" /></button>
                        <button class="action2"><img src="../assets/images/log-out.svg" alt="" /></button>
                    </div>
                </div>
                <div class="interac">
                    <div class="novo-aluno">
                        <div class="titulo-new"><div class="linha">&nbsp;</div> {idAlt === 0 ?"Novo Aluno" :"Alterando Aluno: " + idAlt} </div>
                        <span class="form" >
                            <form class="info">
                                <label name="name" class="label">Nome: </label>
                                <input type="text" name="nome" value={nome} onChange={e => setNome(e.target.value)}/>

                                <label name="Curso" class="labelCurso">Curso: </label>
                                <input type="text" name="Curso" value={curso} onChange={e => setCurso(e.target.value)}/>

                                <label name="Chamada" class="labelCham">Chamada: </label>
                                <input type="text" name="Chamada" value={chamada} onChange={e => setCham(e.target.value)}/>

                                <label name="Turma" class="label">Turma: </label>
                                <input type="text" name="Turma" value={turma} onChange={e => setTurma(e.target.value)}/>
                            </form>
                            <button onClick={inserirAluno}>{idAlt === 0 ?"Cadastrar" :"Alterar"}</button>
                        </span>
                    </div>

                    <div class="alunos">
                        <div class="titulo-alunos"><div class="linha">&nbsp;</div> Alunos Matriculados </div>
                        <div class="tabela-alunos">
                            <table>
                                <thead>
                                    <tr>
                                        <th >ID</th>
                                        <th >Nome</th>
                                        <th >Chamada</th>
                                        <th >Turma</th>
                                        <th >Curso</th>
                                        <th><div>&nbsp;</div></th>
                                    </tr>

                                    
                                </thead>
                                <tbody>

                                    {alunos.map(x =>
                                        <tr >
                                            <td>{x.id_matricula}</td>
                                            <td title = {x.nm_aluno}>
                                            {x.nm_aluno != null && x.nm_aluno.length >= 25
                                                            ?x.nm_aluno.substr(0, 25) + '...' 
                                                            :x.nm_aluno }
                                            </td>
                                            <td>{x.nr_chamada}</td>
                                            <td>{x.nm_turma}</td>
                                            <td>{x.nm_curso}</td>
                                            <td class="icons">
                                                    <span className="coluna-acao"><button><img onClick={() => alterarAluno(x)} src="../assets/images/edit.svg" alt="" /></button></span>
    
                                                    <span className="coluna-acao"><button><img onClick={() => deletarAluno(x.id_matricula)} src="../assets/images/trash-2.svg" alt="" /></button></span>
                                            </td>
                                        </tr>
    
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Conteudo>
    );
}
