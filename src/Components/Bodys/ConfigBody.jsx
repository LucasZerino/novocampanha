import React, {useState} from 'react'
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

const ConfigBody = () => {

    const { data } = useParams();
    const navigate = useNavigate();
    const [value, onChange] = useState(new Date());
    const definirdata = () => { 
      if((document.getElementById('datepiker').classList.value) === 'col-md-6 datepiker'){
        document.getElementById('datepiker').classList.add("ativado");
      }else{
        document.getElementById('datepiker').classList.remove("ativado");
      }
    }

    const irUser =() => {
        document.getElementById('config').classList.remove("ativo");
        document.getElementById('message').classList.remove("ativo");
        document.getElementById('contato').classList.remove("ativo");
        document.getElementById('usero').classList.add("ativo");


        //remover icone
        document.getElementById('user').classList.remove("btn-light");
        document.getElementById('user').classList.add("btn-primary");
     

      //remover icone mensagem
      document.getElementById('menssage').classList.remove("btn-primary");
      document.getElementById('menssage').classList.add("btn-light");

      //remover icone contatos
      document.getElementById('ctt').classList.remove("btn-primary");
      document.getElementById('ctt').classList.add("btn-light");

       //remover icone config
       document.getElementById('configura').classList.remove("btn-primary");
       document.getElementById('configura').classList.add("btn-light");
  
    }

    const irConfig = () => {

      //remover form anterior
      document.getElementById('config').classList.add("ativo");
      document.getElementById('message').classList.remove("ativo");
      document.getElementById('contato').classList.remove("ativo");
      document.getElementById('usero').classList.remove("ativo");

      //remover icone
      document.getElementById('configura').classList.remove("btn-light");
      document.getElementById('configura').classList.add("btn-primary");

      //remover icone mensagem
      document.getElementById('menssage').classList.remove("btn-primary");
      document.getElementById('menssage').classList.add("btn-light");

      //remover icone contatos
      document.getElementById('ctt').classList.remove("btn-primary");
      document.getElementById('ctt').classList.add("btn-light");

      //remover icone user
      document.getElementById('user').classList.remove("btn-primary");
      document.getElementById('user').classList.add("btn-light");
    }

    const irMessage = () => {
      //remover form anterior
      document.getElementById('message').classList.add("ativo");
      document.getElementById('config').classList.remove("ativo");
      document.getElementById('contato').classList.remove("ativo");
      document.getElementById('usero').classList.remove("ativo");

      //remover icone
      document.getElementById('menssage').classList.add("btn-primary");
      document.getElementById('menssage').classList.remove("btn-light");

        //remover icone contatos
        document.getElementById('ctt').classList.remove("btn-primary");
        document.getElementById('ctt').classList.add("btn-light");

         //remover icone config
      document.getElementById('configura').classList.remove("btn-primary");
      document.getElementById('configura').classList.add("btn-light");

      
      //remover icone user
      document.getElementById('user').classList.remove("btn-primary");
      document.getElementById('user').classList.add("btn-light");
    }

    const irContato = () => {


       //remover form anterior
       document.getElementById('message').classList.remove("ativo");
       document.getElementById('config').classList.remove("ativo");
       document.getElementById('contato').classList.add("ativo");
       document.getElementById('usero').classList.remove("ativo");


       //add icone contatos
       document.getElementById('ctt').classList.remove("btn-light");
       document.getElementById('ctt').classList.add("btn-primary");


        //remover icone config
        document.getElementById('configura').classList.remove("btn-primary");
        document.getElementById('configura').classList.add("btn-light");

             //remover icone mensagem
      document.getElementById('menssage').classList.remove("btn-primary");
      document.getElementById('menssage').classList.add("btn-light");

      
      //remover icone user
      document.getElementById('user').classList.remove("btn-primary");
      document.getElementById('user').classList.add("btn-light");
    }


  return (
    <div className="page-body-wrapper sidebar-icon">
        <header className="main-nav">
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
                        <i><SettingsIcon/></i>
                        <span>Configurações</span>
                    </a>
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
                  <h3 className='title'><br/>Configurações</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a
                    className='listabr active' 
                    onClick={() => navigate(`/mezap/home${data}`)}
                    >Home</a></li>
                    <li className="breadcrumb-item active"><a
                    onClick={() => navigate(`/mezap/sett/${data}`)}
                    className='listabr'
                    >Configurações</a></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <div className="abas"></div>
        <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
                <div className="card">
                  <div className="stepwizard">
                    <div className="stepwizard-row setup-panel">
                      <div className="stepwizard-step"><a className="btn btn-primary flex1" id='configura' onClick={irConfig}><SettingsIcon/> Configurações Gerais</a></div>
                      <div className="stepwizard-step"><a className="btn btn-light flex1" id='menssage' onClick={irMessage}><ContactsIcon/> Usuários</a></div>
                      <div className="stepwizard-step"><a className="btn btn-light flex1" id='ctt' onClick={irContato}><BusinessIcon/> Empresas</a></div>
                      <div className="stepwizard-step"><a className="btn btn-light flex1" id='user' onClick={irUser}><PersonPinIcon/> Perfil de Usuário</a></div>
                    </div>
                  </div>



                <div className='none ativo' id='config'>
                    <div className='separador'>
                        <h1>Usuários</h1>
                    </div>
                    <div className="card-body none ativo" id='config'>
                    <br/>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='convidar'>
                            <label>Convide novos usuários</label>
                            <div className='convidar-item'>
                                <input
                                placeholder='Insira o E-mail aqui'
                                />
                                <a className='btn-new'>Enviar</a>
                            </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='convidar'>
                            <label className='flex33'><SupervisedUserCircleIcon/> 2 Usuários ativos</label>
                            <div className='convidar-item'>
                                <a className='nav-btn2'><span>Gerenciar usuários ativos <ArrowRightAltIcon/></span></a>
                            </div>
                        </div>
                      </div>
                    </div>
                    <br/>
                  </div>
                    <div className='separador'>
                        <h1>Empresas</h1>
                    </div>
                     <div className="card-body none ativo" id='config'>
                    <br/>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='convidar'>
                            <label>Webck Soluções</label>
                            <div className='convidar-item'>
                                <span className='descri-inv'>Rua alberto silva, 1265
                                    <br/>
                                    Lagoa Seca
                                    <br/>
                                    59022300 - Natal
                                    <br/>
                                    Rio Grande do Norte - Brasil
                                </span>
                            </div>
                        </div>
                      </div>
                      <div className='col-md-6'>
                        <div className='convidar'>
                            <label className='flex33'><BusinessCenterIcon/> 5 Empresas ativas</label>
                            <div className='convidar-item'>
                                <a className='nav-btn2'><span>Gerenciar Empresas <ArrowRightAltIcon/></span></a>
                            </div>
                        </div>
                      </div>
                    </div>
                    <br/>
                  </div>
                </div>







                  <div className="card-body none" id='message'>
                    <div className='salvarcampanha2'>
                        <a className="nav-btn2" 
                        onClick={() => navigate(`/mezap/sett/user/${data}`)}
                        ><span>Cadastrar Usuário</span></a>
                        </div>
                        <div className="table-responsive">
                        <table className="table table-xl">
                            <thead>
                                <tr>
                                    <th><strong>Nome</strong></th>
                                    <th><strong>Última autenticação</strong></th>
                                    <th><strong>Empresa</strong></th>
                                    <th><strong>Status</strong></th>
                                    <th><strong>Opções</strong></th>
                                </tr> 
                            </thead>      
                        </table>
                        </div>
                  </div>






                  <div className="card-body none" id='contato'>
                    <div className='salvarcampanha2'>
                      <a className="nav-btn2" ><span>Cadastrar Empresa</span></a>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-xl">
                          <thead>
                              <tr>
                                <th><strong>Nome da empresa</strong></th>
                                <th><strong>Status</strong></th>
                                <th><strong>Opções</strong></th>
                              </tr> 
                          </thead>      
                      </table>
                    </div>
                  </div>


                  <div className="card-body none" id='usero'>
                    <div className='salvarcampanha2'>
                      <a className="nav-btn2" ><span>Cadastrar Perfil</span></a>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-xl">
                          <thead>
                              <tr>
                                  <th><strong>Nome</strong></th>
                                  <th><strong>Quantidade de usuários ativos</strong></th>
                                  <th><strong>Status</strong></th>
                                  <th><strong>Opções</strong></th>
                              </tr> 
                          </thead>      
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

export default ConfigBody