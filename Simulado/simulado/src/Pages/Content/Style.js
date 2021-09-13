import styled from "styled-components"

const Conteudo = styled.div`

    display: flex;
    flex-direction: row;


.sidebar{
    font-family: "Roboto medium";
    background-color: #2B3031;
    width: 356px;
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
    padding-left: 65px;
}
.logo img{
    width: 175px;
}
.accent{
    height: 57px;
    background-color: #262626;
}
.adm{
    height: 57px;
    color: white;
    padding-left: 65px;
    padding-right: 28px;
}
.adm{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.adm img{
    padding-top:8px;
}
.students{
    display: flex;
    flex-direction: row;
    align-items: center;

    background-color: white;
    height: 57px;
}
.detalhe{
    background-color: #E911C6;
    width: 4px;
    height: 100%;
    margin-right: 65px;
}
.linha{
    background-color: #986CDF;
    border-radius: 20px;
    margin-right: 14px;

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
    padding: 15px 21px 17px 21px;

    background-color: white;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
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
    height: 57px;
    width: 57px;
}

.novo-aluno, .alunos{
    background-color: white;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
}

.alunos{
    margin-top: 32px;
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

    padding: 33px 0px 38px 0px;
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

    font-size: 32px;
    padding-bottom: 30px;
    align-self: flex-start;
    padding-left: 42px;
}
.novo-aluno button{
    font-family: "Roboto bold";
    background:#E911C6;
    width: 106px;
    height: 36px;
    border-radius: 44px;
    color: white;
    border: none;
}

.info {
    display: flex;
    flex-wrap: wrap;
    width: 750px;
}

.label{
    display: flex;
    align-items: center;
    margin-left: 67px;
}
.labelCurso{
    display: flex;
    align-items: center;
    margin-left: 71px;
}
.labelCham{
    display: flex;
    align-items: center;
    margin-left: 42px;
}

.info input{
    height: 25px;
    width: 190px;
    border-radius: 4px;
    border: 1px solid #A8A8A8;

    margin: 7.5px 11px;
}

.interac{
    padding-top: 32px;
    padding-left: 56px;
}

.titulo-alunos{
    display: flex;
    flex-direction: row;
    align-items: center;

    font-size: 32px;
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
    text-align:left;
    color: white;
}
th{
    padding-left: 47px;
}
.tabela-alunos table{
    width: 100%;
    border-collapse: collapse;
}
td{
    padding: 20px 0px 20px 47px;
    font-family: "Roboto regular";
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