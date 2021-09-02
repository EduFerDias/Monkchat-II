import LoadingBar from 'react-top-loading-bar'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Container } from './styled'
import { ChatButton, ChatInput } from '../../components/outros/inputs'
import { useState, useRef } from 'react'

import { useHistory } from 'react-router-dom';

import Cookies from 'js-cookie'

import Api from '../../service/api'
const api = new Api();


export default function Login() {

const [usuario, setUsuario] = useState('');
const [senha, setSenha] = useState('');

const nav =  useHistory();
const loading = useRef(null);

const jaTaLogado = async() => {
    let Logado = Cookies.get('usuario-logado')
    if(Logado != null)
        nav.push('/chat')
}

const logar =  async () => {
    let r = await api.login(usuario, senha);
    loading.current.continuousStart();
    console.log(JSON.stringify(r))

    console.log(`PP: ${r.erro}`)

    if(!r.erro){
        Cookies.set('usuario-logado', JSON.stringify(r));
        nav.push('/chat')
    } else{    
        toast.error(`Erro: ${r.erro}`)
        loading.current.complete();

    }
    
}

    return (
        <Container onLoad={jaTaLogado}>
        <LoadingBar color="red" ref={loading} /> 
        <ToastContainer />
            <div className="box">
                <div className="titulo">
                    <img src="/assets/images/logo-monkchat.png" alt="" />
                    <br />
                    MonkChat
                </div>
            </div>

            <div className="login">
                <div className="container-form">
                    <div className="form-row">
                        <div className="title">Faça seu Login</div>
                    </div>

                    <div className="form-row">
                        <div>
                            <div className="label">Login </div>
                            <ChatInput
                                value={usuario}
                                onChange={e => setUsuario(e.target.value)}
                                style={{ border: '1px solid gray', fontSize: '1.5em' }}
                                />
                        </div>
                        <div>
                            <div className="label">Senha </div>
                            <ChatInput
                                type="password"
                                value={senha}
                                onChange={e => setSenha(e.target.value)}
                                style={{ border: '1px solid gray', fontSize: '1.5em' }}
                                />
                        </div>
                        <div>
                            <ChatButton
                                onClick={logar}
                                style={{ fontSize: '1.2em'}}> Login </ChatButton>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    )
}
