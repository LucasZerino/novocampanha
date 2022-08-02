import React from 'react'
import dashboard1 from '../../Pages/assets/images/dashboard/1.png'
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useNavigate } from 'react-router-dom'

const HomeBody = () => {

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
                        <a className='nav-link menu-title active'
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
            
            </div>
         </div>
    </div>
  )
}

export default HomeBody