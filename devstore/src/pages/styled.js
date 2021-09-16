import styled from "styled-components"

const Faixa1 = styled.div`

    display: flex;
    flex-direction: row;
    background-color: #F5F5F5;


.sidebar{
    background-color: #2B3031;
    position: fixed;
    height: 100vh;
    font-family: Roboto-medium;
    cursor: default;
}
.logo{
    padding: 49px 0 47px 80px;
}
.separacao{
    background-color: #262626;
    width: 356px;
    height: 57px;
}
.gerenciamento{
    display: flex;
    align-content: center;
    justify-content: space-between;
    padding: 25px 28px 25px 65px;
    font-size: 1.2em;

    color: white;
}
.detalhe{
    width: 4px;
    height: 100%;
    background-color: #6CC3DF;
    margin-right: 61px;
}
.produ{
    display: flex;
    align-items: center;

    font-size: 1.2em;
    background-color: white;
    height: 57px;
}
.menu{
    width: 100%;
    padding-left: 24%;
}
.cabecalho{
    font-family: Roboto-regular;
    color: #615858;

    background-color: white;
    padding: 17px 22px 0px 18px;
    font-size: 1em;
}
.name{
    font-family: Roboto-medium;
}
.user{
    display: flex;
    flex-direction: row;
    padding: 0px 16px 0px 11px;
}
.user-info{
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
    cursor: default;
}
.notificacao{
    background-image: url("../assets/images/account_avatar_face_man_people_profile_user_icon_123197.svg");
    display: flex;
    flex-direction: row-reverse;
    width: 57px;
    height: 57px;
}
.notificacao button{
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 44px;
    border: 2px solid white;
    background-color: #119FDC;
    color: white;
    font-size: 10px;
    height: 20px;
    width: 20px;

    cursor: pointer;
}
.user-interactions{
    display: flex;
    flex-direction: row;
}
.user-interactions button{
    display: flex;
    background-color: #119FDC;
    border: none;
    border-radius: 50px;
    margin: 0px 3px;

    height: 44px;
    width: 44px;

    justify-content: center;
    align-items: center;

    transition: 0.5s;
    cursor: pointer;

}
.user-interactions button:hover {
    background-color: #6CC3DF;
}
.cabecalho hr {
    /*margin: 18px 9px 0px 12px;*/
    border-bottom: #D9D9D9 1px;
}

.interactions{
    padding: 32px 42px 47px 52px;
}

.novo-produto{
    padding: 33px 0px 45px 27px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
}
.np-titulo{
    display: flex;
    flex-direction: row;
    align-items: center;

    font-family: Roboto-medium;
    color:#3C3939;
    letter-spacing: 0px;

    padding-bottom: 37px;
    font-size: 2em;
}
.linha{
    width: 6px;
    border-radius: 6px;
    height: 26px;
    background-color: #119FDC;
    margin-right: 14px;
    margin-left: 26px;
    
}

.np-form{
    display: flex;
    flex-direction: row;
    align-items:flex-end;
}

.np-form form{
    width: 45.3em;
}

.f-doubles{
    display: flex;
    flex-wrap: wrap;

    
    font-family:Roboto-medium;
    color: #615858;
    padding-left: 12px;
}
.f-doubles input{
    width: 209px;
    height: 1.5em;
    border-radius: 5px;
    border: 1px solid #a8a8a8;
}

.nome{
    padding-left: 67px;
}
.ava{
    padding-left: 37px;
}
.cat{
    padding-left: 38px;
}
.pr-de{
    padding-left: 62px;
}
.pr-por{
    padding-left: 48px;
}
.estoq{
    padding-left: 70px;
}

.link{
    padding-right: 10px;
    font-size: 1.125em;

    font-family:Roboto-medium;
    color: #615858;
}

.desc{
    padding-left: 44px;
    padding-right: 14px;

    font-family:Roboto-medium;
    color: #615858
}

.pr-de,.pr-por,.estoq,.ava,.cat,.nome{
    padding-right: 11px;
    padding-bottom: 1em;
    font-size: 1.125em;
    cursor: default;

}
.f-one input{
    width: 79.3%;
    height: 1.5em;
    border-radius: 5px;
    border: 1px solid #a8a8a8;
}
.f-desc{
    display: flex;
    flex-direction: row;
    padding-top: 1em;
    font-size: 1.125em;
    margin-right:30px;
    width: 100%;
    cursor: default;
}
.f-desc textarea{
    width: 79.7%;

    border-radius: 5px;
    border: 1px solid #a8a8a8;
    height: 154px;
    resize: none; 
}
.f-button button{
    border: none;
    margin-left: 30px;
    padding:10px 22px;
    border-radius: 44px;
    background-color:#119FDC;
    color: white;
    font-size: 0.9em;
    transition: 0.5s;
    cursor: pointer;
}
.f-button button:hover {
    background-color: #6CC3DF;
}

.tabela-produto{
    margin-top: 38px;
    padding: 36px 30px 47px 48px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
}
.tp-titulo{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 35px;
    font-size: 2em;

    color: #3C3939;
    font-family: Roboto-medium;
}
.tp-produtos{
    width: 100%;
}
.tp-produtos table{
    width: 100%;
    border-collapse: collapse;
    font-size: 1.125em;
}
tbody tr:nth-child(odd){
    background-color: #f5f5f5;
}
thead th{
    text-align: left;
    background-color: #6CC3DF;
    color: white;
}

th{
    padding:23px 0px;
    font-family: Roboto-bold;
    text-align: left;
    cursor: default;

}

td{
    padding: 10px 20px 10px 0px;
    font-family: Roboto-medium;
    color: #615858;
    cursor: default;
}

.actions{
    display: flex;
    flex-direction: row;
    padding: 20px;
}
.action > button {
    visibility: hidden;
}
tr:hover{
    .action > button {
        visibility: visible;
    }
}
.action button{
    padding: 3px 0px 0px 0px;
    
    background-color: #565656;
    border: none;
    height: 31px;
    width: 31px;
    margin: 0px 3.5px;
    border-radius: 44px;

    cursor: pointer;
}
.action button svg{
    height: 17px;
    width: 17px;
}
.action button:hover{
    background-color: #a8a8a8;
    transition: 0.5s;
} 

.produto-imagem {
    height: 40px;
    width: 40px;
}
.celula-imagem{
    display: flex;
    justify-content: center;
    align-content: center;

    padding: 10px 20px 10px 10px;
}
.preco{
    padding-right: 10px;
}

.linha2{
    width: 6px;
    border-radius: 6px;
    height: 26px;
    background-color: #119FDC;
    margin-right: 14px;
    margin-left: 5px;
}
`

export { Faixa1 };