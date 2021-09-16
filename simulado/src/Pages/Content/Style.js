import styled from "styled-components"

const Conteudo = styled.div`

    display: flex;
    flex-direction: row;


.sidebar{
    font-family: "Roboto medium";
    background-color: #2B3031;
    width: 22.25em;
    height: 100vh;
    position: fixed;
}
.usuario{
    font-family: "Roboto medium";
}
.logo{
    text-align: center;
    height:110px;
}
.logo{
    display: flex;
    align-items: center;
    padding-left: 4em;
}
.logo img{
    width: 10em;
}
.accent{
    height: 3.5em;
    background-color: #262626;
}
.adm{
    height: 3.5em;
    color: white;
    padding-left: 4em;
    padding-right: 1.75em;
}
.adm{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.adm img{
    padding-top:0.5em;
}
.students{
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: white;
    height: 3.5em;
}
.detalhe{
    background-color: #E911C6;
    width: 0.25em;
    height: 100%;
    margin-right: 4em;
}
.linha{
    background-color: #986CDF;
    border-radius: 1.25em;
    margin-right: 0.875em;

    height: 26px ;
    width: 6px;
}
.menu{
    font-family: "Roboto medium";
    width: 73.4%;
    padding-left: 23.7%;
}
.cabecalho{
    display:flex;
    flex-direction: row;
    width: 100%;
    padding: 1em 1.25em;

    background-color: white;
    box-shadow: 0px 0px 0.25em 0.0625em rgba(186, 186, 186, 0.25);
}

.usuario{
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    align-items: center;
}

.foto-user{
    display: flex;
    flex-direction: row-reverse;

    background-image: url("./assets/images/account_avatar_face_man_people_profile_user_icon_123197.svg");
    height: 3.5em;
    width: 3.5em;
}

.novo-aluno, .alunos{
    background-color: white;
    box-shadow: 0px 0px 0.25em 0.0625em rgba(186, 186, 186, 0.25);
}

.alunos{
    margin-top: 2em;
}
.notificacao{
    font-family: "Roboto bold";
    color:white;
    align-self: top;
    background-color: #DB21BD;
    
    padding: 4px;
    border-radius: 50px;

    border:2px solid white;
    font-size: 10px;

    height: 23px;
    width:  23px;
    
}

.acoes{
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    width: 94px;
}

.action2{
    padding: 10px 9px;
    background-color: #986CDF;
    border: none;

    height: 44px;
    width: 44px;
    border-radius: 30px;
}

.action{
    padding: 12px 10px 12px 10px;
    background-color: #986CDF;
    border: none;

    height: 44px;
    width: 44px;
    border-radius: 30px;
}

.novo-aluno{
    display: flex;
    flex-direction: column;

    padding: 2em 0px 2.3em 0px;
    font-family: "Roboto regular";
}
.form{
    display: flex;
    flex-direction: row;

    align-items:flex-end;
}
.titulo-new{
    font-family: "Roboto bold";
    display: flex;
    flex-direction: row;
    align-items: center;

    font-size: 2em;
    padding-bottom: 30px;
    align-self: flex-start;
    padding-left: 42px;
}
.novo-aluno button{
    font-family: "Roboto bold";
    background:#E911C6;
    padding:10px 22px;
    border-radius: 44px;
    color: white;
    border: none;
}

.info {
    font-family: "Roboto medium";
    display: flex;
    flex-wrap: wrap;
    width: 750px;
    color: #615858;
}

.label{
    display: flex;
    align-items: center;
    margin-left: 4.1em;
}
.labelCurso{
    display: flex;
    align-items: center;
    margin-left: 4.4em;
}
.labelCham{
    display: flex;
    align-items: center;
    margin-left: 2.625em;
}

.info input{
    height: 25px;
    width: 190px;
    border-radius: 0.25em;
    border: 1px solid #A8A8A8;

    margin: 7.5px 11px;
}

.interac{
    padding-top: 2em;
    padding-left: 56px;
}

.titulo-alunos{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "Roboto bold";

    font-size: 2em;
    padding-bottom: 30px;
}

.alunos{
    padding: 43px 38px;
}

.tabela-alunos thead, th{
    font-family: "Roboto bold";
    background-color: #986CDF;
    height: 67px;
}
th{
    font-size: 1.125em;
    text-align:left;
    color: white;
}
th{
    padding-left: 37px;
}
.tabela-alunos table{
    width: 100%;
    border-collapse: collapse;
}
td{
    padding: 20px 0px 20px 37px;
    font-family: "Roboto medium";
    font-size: 1.125em;
    color:#6D6868;
}
tr:nth-child(odd){
    background-color: #f5f5f5;
    
}

.coluna-acao > button {
    visibility:hidden;
}
tr:hover{
    .coluna-acao > button{
        visibility:visible;
        transition: 0.5s;
    }
}


.icons{
    display: flex;
    flex-direction: row;
}
.icons button:hover{
    background-color: #797979;
}
.icons button{
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #565656;
    border: none;
    border-radius: 60px;
    margin: 0px 8.5px;
    height: 38px;
    width: 38px;
}
.icons button svg{
    height: 20px;
    width: 20px;
}
`

export default Conteudo;