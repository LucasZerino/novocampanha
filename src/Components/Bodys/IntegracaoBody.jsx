import React, {useEffect, useState} from 'react'
import dashboard1 from '../../Pages/assets/images/dashboard/1.png'
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useNavigate } from 'react-router-dom'
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import ContactsIcon from '@mui/icons-material/Contacts';
import DateTimePicker from 'react-datetime-picker';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import BusinessIcon from '@mui/icons-material/Business';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useParams } from 'react-router-dom'
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import CloseIcon from '@mui/icons-material/Close';
import Delete from '../../Assets/Icons/delete.png'
import Remove from '../../Assets/Icons/remove.png'

const IntegracaoBody = () => {


  const cadastrar = () => {
    document.getElementById('tokeni').classList.add("ativo");
  }

  const fecharCadastro = () => {
    document.getElementById('tokeni').classList.remove("ativo");
  }

    const { data } = useParams();
    const navigate = useNavigate();
    const [respo, setRespo] = useState();
    const [item, setItem] = useState({linhas: []})
    const [nome, setNome] = useState();
    const [drescr, setDrescr] = useState();

    document.querySelectorAll("img").forEach(function(img){
        img.addEventListener("click", function(event) {
        const el = event.target || event.srcElement;
        const idCampanha = el.id;
        if(el.className==='remover'){
          remover(idCampanha);
        }else if(el.className==='excluir'){
          excluir(idCampanha)
        }
    })})

    const remover = (idCampanha) => {
      const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlcmljb2Nlc2FyQHdlYmNrLmNvbS5iciIsImlkQ2xpZW50IjoiYTdjNGFkOWItZGVjZS00YmIwLTlhYzktOTMwNzc2Y2JmNGRhIiwiY3JlYXRlZCI6MTY1OTY5ODgzNDY3OSwicm9sZXMiOlsiUk9MRV9BUEkiLCJST0xFX0RBU0hCT0FSRCIsIlJPTEVfREFTSEJPQVJEX0dST1VQUyIsIlJPTEVfR1JPVVBTIiwiUk9MRV9JTlRFR1JBVElPTl9VU0VSIiwiUk9MRV9UUklBTCIsIlJPTEVfVVNFUlMiLCJST0xFX1dFQkhPT0siXSwiaWQiOjMwMCwiZXhwIjoxNjkxMjM0ODM0fQ.7M1p6JOoSNmb4fPRKSpFqAFl6t_Pcvs1qbyG7YeGu5EJRDJVuSYhJ3IMBdVco94FkiNGS4jmFkR5GWYr3gu15g/3881361c-a84c-4325-b677-8ee3a17f5cd3'
        }
      };
      
      fetch(`https://api.moorse.io/v2/whatsapp/${idCampanha}/logout`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }

    const excluir = (idCampanha) => {
      console.log("Excluida a campanha: ", idCampanha)
      const options = {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlcmljb2Nlc2FyQHdlYmNrLmNvbS5iciIsImlkQ2xpZW50IjoiYTdjNGFkOWItZGVjZS00YmIwLTlhYzktOTMwNzc2Y2JmNGRhIiwiY3JlYXRlZCI6MTY1OTY5ODgzNDY3OSwicm9sZXMiOlsiUk9MRV9BUEkiLCJST0xFX0RBU0hCT0FSRCIsIlJPTEVfREFTSEJPQVJEX0dST1VQUyIsIlJPTEVfR1JPVVBTIiwiUk9MRV9JTlRFR1JBVElPTl9VU0VSIiwiUk9MRV9UUklBTCIsIlJPTEVfVVNFUlMiLCJST0xFX1dFQkhPT0siXSwiaWQiOjMwMCwiZXhwIjoxNjkxMjM0ODM0fQ.7M1p6JOoSNmb4fPRKSpFqAFl6t_Pcvs1qbyG7YeGu5EJRDJVuSYhJ3IMBdVco94FkiNGS4jmFkR5GWYr3gu15g/3881361c-a84c-4325-b677-8ee3a17f5cd3'
        }
      };
      
      fetch(`https://api.moorse.io/v2/whatsapp/${idCampanha}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }

   useEffect(()=>{
    const options = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${data}`
        }
      };
      
      fetch('https://api.moorse.io/v2/whatsapp', options)
        .then(response => response.json())
        .then(response => setRespo((response?.data?.content)))
        .catch(err => console.error(err));
        setItem({linhas: respo})
   },[respo])

   const criarInte = () => {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${data}`
      },
      body: JSON.stringify({name: nome, description: drescr})
    };
    
    fetch('https://api.moorse.io/v2/whatsapp', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
   }

  return (
    <div className="page-body-wrapper sidebar-icon">
        <header className="main-nav" id='main-nav'>
        <div className="sidebar-user text-center">
            <a className="setting-primary">
                <i className='onfigicon' data-feather="settings"><SettingsIcon sx={{ fontSize: 90 }} /></i>
                </a>
            <img className="img-90 rounded-circle" src={dashboard1} alt=""/>
            <div className="badge-bottom"><span className="badge badge-primary">Érico César - Admin</span></div>
            <h6 className="mt-3 f-14 f-w-600 integracao">Integração</h6>
            <h6 className="mt-2 f-14 f-w-500">Pensar Clube Associados</h6>
        </div>
        <nav>
            <div className="main-navbar">
                <div className="left-arrow" id="left-arrow"><i data-feather="arrow-left"></i></div>
                <div id="mainnav">           
                <ul className="nav-menu custom-scrollbar">
                    <li className="back-btn">
                    <div className="mobile-back text-end"><span>Back</span><i className="fa fa-angle-right ps-2" aria-hidden="true"></i></div>
                    </li>
                    <li className="sidebar-main-title">
                    <div>
                        <h6>Dashboard</h6>
                    </div>
                    </li>
                    <li className="dropdown">
                    <a className='nav-link menu-title'
                    onClick={() => navigate(`/mezap/home/${data}`)}
                    >
                        <i><HomeIcon/></i>
                        <span>Home</span>
                    </a>
                    </li>
                    <li className="dropdown">
                    <a className="nav-link menu-title"
                    onClick={() => navigate(`/mezap/campanhas/${data}`)}
                    >
                        <i><BusinessCenterIcon/></i>
                        <span>Campanhas</span>
                    </a>
                    </li>
                    <li className="dropdown">
                    <a className="nav-link menu-title active"
                    onClick={() => navigate(`/mezap/sett/${data}`)}
                    >
                        <i><ConnectWithoutContactIcon/></i>
                        <span>Integração</span>
                    </a>
                    <ul className="nav-submenu menu-content">
                      <li><a className='lista active'
                      onClick={() => navigate(`/mezap/sett/${data}`)}
                      >Integrações ativas</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
                <div className="right-arrow" id="right-arrow"><i data-feather="arrow-right"></i></div>
            </div>
            </nav>
        </header>
        <div className='page-body'>
        <div className='container-fluid dashboard-default-sec'>
          <div className="page-header">
                <div className="row">
                  <div className="col-sm-6">
                    <h3 className='title'><br/>Lista de Campanhas</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><a
                      className='listabr active' 
                      onClick={() => navigate(`/mezap/home${data}`)}
                      >Home</a></li>
                      <li className="breadcrumb-item active"><a
                      onClick={() => navigate(`/mezap/campanhas/${data}`)}
                      className='listabr'
                      >campanhas</a></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <div className="container-fluid">
          <div className='row'>
            <div className='col-sm-12'>
            <div className='tokeni' id='tokeni'>
                <CloseIcon 
                className='fechado2'
                onClick={fecharCadastro}/>
                <h1 className='token-tit'>Cadastrar Integração</h1>
                <label className="form-label">Nome da integração</label>
                <input type='text' 
                name='nome' 
                id='nome'
                className="form-control"
                placeholder={nome}
                value={nome}
                onChange={(e)=> setNome(e.target.value)}
                />
                <br/>
                <label className="form-label">Descrição</label>
                <input type='text' 
                name='nome' 
                id='nome'
                className="form-control"
                placeholder={drescr}
                value={drescr}
                onChange={(e)=> setDrescr(e.target.value)}
                />
                <br/>
                <div className='final2'>
                <a className="nav-btn2" 
                onClick={criarInte}
                ><span>Criar Integração</span></a>
                </div>
              </div>
              <div className='card'>
                <div className="card-body none ativo" id='message'>
                  <br/>
                  <br/>
                    <div className='salvarcampanha2'>
                        <a className="nav-btn2" 
                        onClick={cadastrar}
                        ><span>Criar Integração</span></a>
                        </div>
                        <br/>
                        <div className="table-responsive">
                        <table className="table table-xl">
                            <thead>
                                <tr>
                                    <th><strong>Nome</strong></th>
                                    <th><strong>Ações</strong></th>
                                </tr> 
                            </thead>
                            <tbody>
                            {
                                  item.linhas!=null && item.linhas.map((item)=>(
                                      <tr key={item.id} >
                                        <td><strong>{item.name}</strong></td>
                                          <td>
                                            <div className="d-flex" id='fora'>  
                                                <a
                                                className="btn2 btn-primary shadow btn-xs sharp mr-1"
                                                ><img className='remover' id={item.id} src={Remove}/><div className="fechado"><span className="tooltiptext">Remover Integração</span></div></a>
                                                  <a
                                                className="btn2 btn-danger shadow btn-xs sharp mr-1"
                                                ><img className='excluir' id={item.id} src={Delete}/><div className="fechado"><span className="tooltiptext">Excluir</span></div></a>
                                            </div>
                                          </td>
                                      </tr>
                                  ))
                              }
                            </tbody>      
                        </table>
                        </div>
                </div>
              </div>
            </div>  
          </div>  
        </div>
      </div>
    </div>
  )
}

export default IntegracaoBody