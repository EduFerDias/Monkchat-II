import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import LoadingBar from 'react-top-loading-bar'
 
import { ContainerConteudo } from './conteudo.styled'
import { ChatButton, ChatInput, ChatTextArea } from '../../components/outros/inputs'

import { useState, useRef } from 'react';

import { useHistory } from 'react-router-dom'

import Cookies from 'js-cookie'

import Api from '../../service/api';
const api = new Api();

function LerULogado(nav) {

    let logado = Cookies.get('usuario-logado')
    if(logado == null){
        nav.push('/');
        return null;
    }

    
    let user = JSON.parse(logado);
    return user;
}

export default function Conteudo() {
    const nav = useHistory();
    let usuarioLogado = LerULogado(nav) || {};

    const [idChat, setId] = useState(0);
    const [chat, setChat] = useState([]);
    const [sala, setSala] = useState('');
    const [usu, setUsu] = useState(usuarioLogado.nm_usuario);
    const [msg, setMsg] = useState('')

    const loading = useRef(null);

    const validarResposta = (resp) => {

        if (!resp.erro)
            return true;
        toast.error(`${resp.erro}`);
        console.log(resp);
        return false;
    }

    const carregarMensagens = async () => {
        loading.current.continuousStart();

        const mensagens = await api.listarMensagens(sala);
        
        if (validarResposta(mensagens))
            setChat(mensagens);

        loading.current.complete();
    }

    const enviarMensagem = async (event) => {
        if(!(event && event.ctrlKey && event.charCode == 13))
        return;

        console.log(idChat)

        if(idChat > 0){
            let r = api.alterarMensagem(idChat, msg);
            if(!validarResposta(r))
                return

            toast.dark('💕 Mensagem alterada com sucesso!')
            setId(0);
            setMsg('');
            await carregarMensagens()
            
        }   else {

            const resp = await api.inserirMensagem(sala, usu, msg);
            if (!validarResposta(resp)) 
                return;
            
            toast.dark('💕 Mensagem enviada com sucesso!');
            await carregarMensagens();
        }
    }

    const inserirUsuario = async () => {
        const resp = await api.inserirUsuario(usu);
        if (!validarResposta(resp)) 
            return;
        
        toast.dark('💕 Usuário cadastrado!');
        await carregarMensagens();
    }

    const inserirSala = async () => {
        const resp = await api.inserirSala(sala);
        if (!validarResposta(resp)) 
            return;
        
        toast.dark('💕 Sala cadastrada!');
        await carregarMensagens();
    }

    const removerMsg = async (id) => {
        let r = api.removerMesagem(id);

        if (!validarResposta(r)) 
        return;
    
    toast.dark('💕 Mensagem removida!');
    await carregarMensagens()

    }

    const editar = async (item) => {
        setId(item.id_chat);
        setMsg(item.ds_mensagem);
    }


    
    return (
        <ContainerConteudo>
            <ToastContainer />
            <LoadingBar color="red" ref={loading} />
            <div className="container-form">
                <div className="box-sala">
                    <div>
                        <div className="label">Sala</div>
                        <ChatInput value={sala} onChange={e => setSala(e.target.value)} />
                    </div>
                    <div>
                        <div className="label">Nick</div>
                        <ChatInput value={usu} readOnly={true} />
                    </div>
                    <div>
                        <ChatButton onClick={inserirSala}> Criar </ChatButton>
                        <ChatButton onClick={inserirUsuario}> Entrar </ChatButton>
                    </div>
                </div>
                <div className="box-mensagem">
                    <div className="label">Mensagem</div>
                    <ChatTextArea value={msg} onChange={e => setMsg(e.target.value)} onKeyPress={enviarMensagem}/>
                    <ChatButton onClick={enviarMensagem} className="btn-enviar"> Enviar </ChatButton>
                </div>
            </div>
            
            <div className="container-chat">
                
                <img onClick={carregarMensagens}
                   className="chat-atualizar"
                         src="/assets/images/atualizar.png" alt="" />
                
                <div className="chat">
                    {chat.map(x =>
                        <div key={x.id_chat}>
                            <div className="chat-message">
                                <div><img onClick={() => removerMsg(x.id_chat)} src='/assets/images/delete.svg' alt='' style={{cursor:'pointer'}}/></div>
                                <div><img onClick={() => editar(x)} src='/assets/images/editar.svg' alt='' style={{cursor:'pointer'}}/></div>
                                <div>({new Date(x.dt_mensagem.replace('Z', '')).toLocaleTimeString()})</div>
                                <div><b>{x.tb_usuario.nm_usuario}</b> fala para <b>Todos</b>:</div>
                                <div> {x.ds_mensagem} </div>
                            </div>
                        </div>
                    )}
                    
                </div>
            </div>
        </ContainerConteudo>
    )
}