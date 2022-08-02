import React from 'react'
import dashboard1 from '../../Pages/assets/images/dashboard/1.png'
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useNavigate } from 'react-router-dom'
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const CadastroUser = () => {

  const navigate = useNavigate();

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
                  <a className="nav-link menu-title"
                  onClick={() => navigate(`/mezap/campanhas`)}
                  >
                        <i><BusinessCenterIcon/></i>
                        <span>Campanhas</span>
                    </a>
                  </li>
                  <li className="dropdown">
                  <a className="nav-link menu-title active"
                  onClick={() => navigate(`/mezap/sett`)}
                  >
                        <i><SettingsIcon/></i>
                        <span>Configurações</span>
                    </a>
                    <ul className="nav-submenu menu-content">
                      <li><a className='lista active'
                      onClick={() => navigate(`/mezap/sett/user`)}
                      >Cadastro de usuário</a></li>
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
                    <h3 className='title'><br/>Cadastro de Usuário</h3>
                    <ul className="breadcrumb">
                      <li className="breadcrumb-item"><a
                      className='listabr active' 
                      onClick={() => navigate(`/mezap`)}
                      >Home</a></li>
                      <li className="breadcrumb-item active"><a
                      onClick={() => navigate(`/mezap/sett`)}
                      className='listabr'
                      >Configurações</a></li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <div class="card">
                    <div className='none ativo' id='config'>
                        <div className='separador2'>
                            <h1>Cadastro de usuários</h1>
                        </div>
                        <div class="card-body none ativo" id='config'>
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
                        <div class="card-body none ativo" id='config'>
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
                    </div>
                </div>
            </div>
          </div>
      </div>
  </div>
  )
}

export default CadastroUser