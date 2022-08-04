import React, { useState } from 'react'
import LogImg from '../../Assets/Images/log.png'
import RegImg from '../../Assets/Images/register.png'
import userico from '../../Assets/Icons/user.png'
import businessico from '../../Assets/Icons/portfolio.png'
import passico from '../../Assets/Icons/padlock.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginPage = () => {

  var bodyFormData = new FormData();
  const formdata2 = [
    {
      "key": "name",
      "value": "Dev - Campanha Teste",
      "type": "text"
    },
    {
      "key": "botname",
      "value": "",
      "type": "text"
    },
    {
      "key": "sendTemplate",
      "value": "Olá, *#{name}*.\\n\\nMensagem de campanha teste para implementação de integração Moorse .\\n\\nConfirme o número de CNPJ da empresa teste *#{cnpj}*.",
      "type": "text"
    },
    {
      "key": "finishTemplate",
      "value": "",
      "type": "text"
    },
    {
      "key": "errorTemplate",
      "value": "",
      "type": "text"
    },
    {
      "key": "integrationType",
      "value": "WHATSAPP",
      "description": "WHATSAPP",
      "type": "text"
    },
    {
      "key": "integrationId",
      "value": "f27f1202-02fd-431a-8ce1-7b82cfd8bb85",
      "type": "text"
    },
    {
      "key": "startDate",
      "value": "2022-12-31 12:00:00",
      "description": "yyyy-MM-dd HH:mm:ss (ex: 2021-10-01 10:00:00)",
      "type": "text"
    },
    {
      "key": "mailing",
      "description": "Arquivo de extensão xlsx com a ordem dos dados (telefone, name, cnpj). A aplicação ignora a primeira linha da planilha",
      "type": "file",
      "src": []
    },
    {
      "key": "image",
      "type": "file",
      "src": [],
      "disabled": true
    },
    {
      "key": "type",
      "value": "NOTIFICATION",
      "description": "Tipos de campanha (NPS e NOTIFICATION)",
      "type": "text"
    },
    {
      "key": "mailingLayout",
      "value": "name;cnpj",
      "description": "Template defaut: account;client;service;username",
      "type": "text"
    },
    {
      "key": "webhookId",
      "value": "89b90936-8db8-4b74-bb5e-3864b18f7321",
      "type": "text",
      "disabled": true
    }
  ]


  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [respo, setRespo] = useState('');
  const [teste, setTeste] = useState('');
  const navigate = useNavigate();

  const entrarbtn = (e) => {
    e.preventDefault()
    const options = {
      method: 'POST',
      headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({login: login, senha: password})
    };
    
    fetch('https://api.moorse.io/oauth/login', options)
      .then(response => (response.json()))
      .then(response => setRespo(response))
      .catch(err => setRespo(err));
      console.log(respo)
      if(respo?.data===null || respo?.data===undefined){
        setTeste(respo?.errors)
        console.log("inválido")
      }else{
        var data = respo?.data
        navigate(`/mezap/home/${data}`)
        setTeste('Usuário autenticado com sucesso!')
      }
  }

  const registrarbtn = (e) => {
    e.preventDefault()
      axios({
        method: "post",
        url: {
					"raw": "https://api-front.moorse.io/campaign-service/api/v1/campaigns",
					"protocol": "https",
					"host": [
						"api-front",
						"moorse",
						"io"
					],
					"path": [
						"campaign-service",
						"api",
						"v1",
						"campaigns"
					]
				},
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });
      }
    
  const changeRegistro = () => {
    document.getElementById('container-login').classList.add("sign-up-mode");
  }

  const changeLogin = () => {
    document.getElementById('container-login').classList.remove("sign-up-mode");
  }

  return (
    <div id='container-login' className='container-login'>
    <div className="forms-container-login">
      <div className="signin-signup">
        <form action="#" className="sign-in-form">
          <h2 className="title">Fazer Login</h2>
          <div className="input-field">
            <i className='userico'><img src={userico} className='userimg' alt='usericon'/></i>
            <input type="text" placeholder="Nome de usuario" 
             name='login' 
             id='login'
             className='input' 
             value={login}
             onChange={(e)=> setLogin(e.target.value)}
            />
          </div>
          <div className="input-field">
                <i className='userico'><img src={passico} className='userimg' alt='passworld icon' /></i>
            <input type="password" placeholder="Senha" 
               name='password' 
               id='password'
               className='input' 
               value={password}
               onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          <h6>{teste}</h6>
          <div className='form-footer'>
            <button 
            onClick={entrarbtn} 
            className="nav-btn">
              <span>Entrar</span>
            </button>
          </div>
        </form>
        <form action="#" className="sign-up-form">
          <h2 className="title">Registrar-se</h2>
          <div className="input-field">
            <i className='userico'><img src={businessico} className='userimg' alt='business icon'/></i>
            <input type="text" placeholder="Empresa" />
          </div>
          <div className="input-field">
                <i className='userico'><img src={userico} className='userimg' alt='user icon'/></i>
            <input type="text" placeholder="Nome de usuario" />
          </div>
          <div className="input-field">
                <i className='userico'><img src={passico} className='userimg' alt='passworld icon'/></i>
            <input type="password" placeholder="Senha" />
          </div>
          <div className='form-footer'>
            <button value="Entrar" className="nav-btn" onClick={registrarbtn}>
                <span>Registrar</span>
            </button>
          </div>
        </form>
      </div>
    </div>

    <div className="panels-container-login">
      <div className="panel left-panel">
        <div className="content">
          <h3>Novo Aqui ?</h3>
          <p>
            Registre-se agora e conheça a nossa inovadora ferramenta, seja bem vindo ao MeZap chamadas!
          </p>
          <button onClick={changeRegistro} id="sign-up-btn" className='nav-btn'>
            <span>Registrar</span>
          </button>
        </div>
        <img src={LogImg} className="image" alt="mulher falando com chatbot" />
      </div>
      <div className="panel right-panel">
        <div className="content">
          <h3>Já é cadastrado?</h3>
          <p>
            Faça login na plataforma e não perca os benefícios do MeZap chamadas!
          </p>
          <button onClick={changeLogin} id="sign-up-btn" className='nav-btn'>
            <span>Login</span>
          </button>
        </div>
        <img src={RegImg}  className="image" alt="homem com chatbot" />
      </div>
    </div>
  </div>
  )
}

export default LoginPage