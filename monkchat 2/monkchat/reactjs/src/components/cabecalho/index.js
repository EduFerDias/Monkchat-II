import { Barra, ContainerCabecalho } from './styled'

import Cookies from 'js-cookie'
import { useHistory } from 'react-router-dom'



export default function Cabecalho() {

    const nav = useHistory();

   let logout = x =>  {
       Cookies.remove('usuario-logado')
       nav.push('/')
   }
    return (
        <ContainerCabecalho>
            <img src="/assets/images/logo-monkchat.png" alt="" />
            <Barra />
            <div className="titulo"> MonkChat </div>
            <div onClick={logout}>&nbsp; &nbsp; Sair</div>
        </ContainerCabecalho>
    )
}
