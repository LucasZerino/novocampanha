import React from 'react'
import LogImg from '../../Assets/Images/log.png'
import RegImg from '../../Assets/Images/register.png'
import userico from '../../Assets/Icons/user.png'
import businessico from '../../Assets/Icons/portfolio.png'
import passico from '../../Assets/Icons/padlock.png'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

  const navigate = useNavigate();

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
            <input type="text" placeholder="Nome de usuario" />
          </div>
          <div className="input-field">
                <i className='userico'><img src={passico} className='userimg' alt='passworld icon' /></i>
            <input type="password" placeholder="Senha" />
          </div>
          <div className='form-footer'>
            <button 
            onClick={() => navigate(`/mezap`)} 
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
            <button value="Entrar" className="nav-btn">
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