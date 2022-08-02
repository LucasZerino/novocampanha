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
import PageFooter from '../PageFooter'
import EditIcon from '@mui/icons-material/Edit';

const NewCampanhaBody = () => {

    const navigate = useNavigate();
    const [value, onChange] = useState(new Date());
    const definirdata = () => { 
      if((document.getElementById('datepiker').classList.value) === 'col-md-6 datepiker'){
        document.getElementById('datepiker').classList.add("ativado");
      }else{
        document.getElementById('datepiker').classList.remove("ativado");
      }
    }

    const irConfig = () => {

      //remover form anterior
      document.getElementById('config').classList.add("ativo");
      document.getElementById('message').classList.remove("ativo");
      document.getElementById('contato').classList.remove("ativo");

      //remover icone
      document.getElementById('configura').classList.remove("btn-light");
      document.getElementById('configura').classList.add("btn-primary");

      //remover icone mensagem
      document.getElementById('menssage').classList.remove("btn-primary");
      document.getElementById('menssage').classList.add("btn-light");

      //remover icone contatos
      document.getElementById('ctt').classList.remove("btn-primary");
      document.getElementById('ctt').classList.add("btn-light");
    }

    const irMessage = () => {
      //remover form anterior
      document.getElementById('message').classList.add("ativo");
      document.getElementById('config').classList.remove("ativo");
      document.getElementById('contato').classList.remove("ativo");

      //remover icone
      document.getElementById('menssage').classList.add("btn-primary");
      document.getElementById('menssage').classList.remove("btn-light");

        //remover icone contatos
        document.getElementById('ctt').classList.remove("btn-primary");
        document.getElementById('ctt').classList.add("btn-light");

         //remover icone config
      document.getElementById('configura').classList.remove("btn-primary");
      document.getElementById('configura').classList.add("btn-light");
    }

    const irContato = () => {


       //remover form anterior
       document.getElementById('message').classList.remove("ativo");
       document.getElementById('config').classList.remove("ativo");
       document.getElementById('contato').classList.add("ativo");


       //add icone contatos
       document.getElementById('ctt').classList.remove("btn-light");
       document.getElementById('ctt').classList.add("btn-primary");


        //remover icone config
        document.getElementById('configura').classList.remove("btn-primary");
        document.getElementById('configura').classList.add("btn-light");

             //remover icone mensagem
      document.getElementById('menssage').classList.remove("btn-primary");
      document.getElementById('menssage').classList.add("btn-light");
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
                    onClick={() => navigate(`/mezap`)}
                    >
                        <i><HomeIcon/></i>
                        <span>Home</span>
                    </a>
                  </li>
                  <li className="dropdown">
                  <a className="nav-link menu-title active"
                  onClick={() => navigate(`/mezap/campanhas`)}
                  >
                        <i><BusinessCenterIcon/></i>
                        <span>Campanhas</span>
                    </a>
                    <ul className="nav-submenu menu-content">
                      <li><a className='lista'
                      onClick={() => navigate(`/mezap/campanhas`)}
                      >Minhas Campanhas</a></li>
                      <li><a className='lista active'
                      onClick={() => navigate(`/mezap/campanhas/criar`)}
                      >Nova Campanha</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                  <a className="nav-link menu-title"
                  onClick={() => navigate(`/mezap/sett`)}
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
                  <h3 className='title'><br/>Nova Campanha</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a
                    className='listabr active' 
                    onClick={() => navigate(`/mezap`)}
                    >Home</a></li>
                    <li className="breadcrumb-item active"><a
                    onClick={() => navigate(`/mezap/campanhas`)}
                    className='listabr'
                    >campanhas</a></li>
                    <li className="breadcrumb-item active"><a
                     onClick={() => navigate(`/mezap/campanhas/criar`)}
                     className='listabr'
                    >nova campanha</a></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <div class="abas"></div>
        <div class="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div class="card">
                  <div class="stepwizard">
                    <div class="stepwizard-row setup-panel">
                      <div class="stepwizard-step"><a class="btn btn-primary flex1" id='configura' onClick={irConfig}><SettingsIcon/> Configurações</a></div>
                      <div class="stepwizard-step"><a class="btn btn-light flex1" id='menssage' onClick={irMessage}><SendToMobileIcon/> Mensagem</a></div>
                      <div class="stepwizard-step"><a class="btn btn-light flex1" id='ctt' onClick={irContato}><ContactsIcon/> Contatos</a></div>
                    </div>
                  </div>





                  <div class="card-body none ativo" id='config'>
                    <label className="form-label">Nome da sua campanha</label>
                    <input type='text' 
                    name='lista' 
                    id='lista'
                    className="form-control"
                    />
                    <br/>
                    <div className='row'>
                      <div className='col-md-6'>
                        <div className='rowmanual'>
                        <div className='rowmanual2'>
                              <label className='form-label checkbox'>Iniciar agora</label>
                              <input type="checkbox" id="iniciar"/>
                        </div>
                        <div className='rowmanual2'>
                              <label className='form-label checkbox'>Definir data</label>
                              <input type="checkbox" id="definir" onClick={definirdata}/>
                        </div>
                      </div>
                      </div>
                      <div className='col-md-6 datepiker' id='datepiker'>
                        <label className='form-label checkbox'>Selecione a data de início</label>
                        <DateTimePicker onChange={onChange} value={value} />
                      </div>
                    </div>
                    <br/>
                    <label className="form-label">Tipo da campanha</label>
                    <input type='text' 
                    name='lista' 
                    id='lista'
                    className="form-control"
                    />
                    <br/>
                     <label className="form-label">Integração</label>
                    <input type='text' 
                    name='lista' 
                    id='lista'
                    className="form-control"
                    />
                    <br/>
                    <label className="form-label">Webhook</label>
                    <input type='text' 
                    name='lista' 
                    id='lista'
                    className="form-control"
                    />
                    <br/>
                  <div className='row'>
                    <div className='col-md-6'>
                      <label className="form-label">Envie a lista</label>
                      <input type='file' 
                      name='lista' 
                      id='lista'
                      className="form-control"
                      />
                    </div>
                    <div className='col-md-6'>
                      <div className='alinhar22'>
                        <label className="form-label">Exemplo de Lista</label>
                        <a className="nav-btn2" ><span><FileDownloadIcon/> BAIXAR EXEMPLO</span></a>
                      </div>
                    </div>
      
                    <div className='salvarcampanha'>
                      <a className="nav-btn2" ><span>Salvar Campanha</span></a>
                    </div>
                  </div>
                  </div>






                  <div class="card-body none" id='message'>
                    <div className='mensagem'>
                      <h6>Mensagem para iniciar campanha</h6>
                      <a className="nav-btn2" ><span>Editar</span></a>
                    </div>
                    <br/>
                    <div className='mensagem'>
                      <h6>Mensagem de finalização da campanha</h6>
                      <a className="nav-btn2" ><span>Editar</span></a>
                    </div>
                      <br/>
                    <div className='mensagem'>
                      <h6>Mensagem caso a resposta do cliente não bata com a validação da pergunta</h6>
                      <a className="nav-btn2" ><span>Editar</span></a>
                    </div>
                    <br/>
                    <br/>
                    <div className='salvarcampanha'>
                      <a className="nav-btn2" ><span>Salvar Alterações</span></a>
                    </div>
                  </div>






                  <div class="card-body none" id='contato'>
                    <div className='salvarcampanha2'>
                      <a className="nav-btn2" ><span>Cadastrar contato</span></a>
                    </div>
                    <div className="table-responsive">
                      <table className="table table-xl">
                          <thead>
                              <tr>
                                  <th><strong>Nome do cliente</strong></th>
                                  <th><strong>Serviço</strong></th>
                                  <th><strong>Número</strong></th>
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

export default NewCampanhaBody