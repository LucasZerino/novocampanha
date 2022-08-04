import React, { useEffect, useState } from 'react'
import dashboard1 from '../../Pages/assets/images/dashboard/1.png'
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useNavigate } from 'react-router-dom'
import campanhaicon from '../../Assets/Icons/campanha.png'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CampanhaBody = () => {

  const { data } = useParams();
  const [respo, setRespo] = useState();
  const [userID, setUserId] = useState();
  const navigate = useNavigate();
  const [item, setItem] = useState({linhas: []})


const buscarCampanhas = () => {
  var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-front.moorse.io/campaign-service/api/v1/campaigns',
  headers: { 
    'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlcmljb2Nlc2FyQHdlYmNrLmNvbS5iciIsImlkQ2xpZW50IjoiYTdjNGFkOWItZGVjZS00YmIwLTlhYzktOTMwNzc2Y2JmNGRhIiwiY3JlYXRlZCI6MTY1OTYyODYxNDk3Niwicm9sZXMiOlsiUk9MRV9BUEkiLCJST0xFX0RBU0hCT0FSRCIsIlJPTEVfREFTSEJPQVJEX0dST1VQUyIsIlJPTEVfR1JPVVBTIiwiUk9MRV9JTlRFR1JBVElPTl9VU0VSIiwiUk9MRV9UUklBTCIsIlJPTEVfVVNFUlMiLCJST0xFX1dFQkhPT0siXSwiaWQiOjMwMCwiZXhwIjoxNjkxMTY0NjE0fQ.SRY6iVwsW121yx91JuuXMGGtItZMU2Wvr0SkOhC1v1WNnTlVvA9SxnIUTLcUX5aJaEcXVq1eKnTLwxx8Q3DE_g'
  }
};

axios(config)
.then(function (response) {
  setRespo((response.data));
  
})
.catch(function (error) {
  console.log(error);
});

if(respo!=undefined && respo!=null && respo?.data!=null && respo?.data!=undefined){
  setItem({linhas: respo?.data?.content})
}

}


useEffect(() => {
  buscarCampanhas()
  setUserId(respo?.data?.content['0'].id)
},[respo])


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
                  <a className="nav-link menu-title active"
                  onClick={() => navigate(`/mezap/campanhas/${data}`)}
                  >
                        <i><BusinessCenterIcon/></i>
                        <span>Campanhas</span>
                    </a>
                    <ul className="nav-submenu menu-content">
                      <li><a className='lista active'
                      onClick={() => navigate(`/mezap/campanhas/${data}`)}
                      >Minhas Campanhas</a></li>
                      <li><a className='lista'
                      onClick={() => navigate(`/mezap/campanhas/criar/${data}/${userID}`)}
                      >Nova Campanha</a></li>
                    </ul>
                  </li>
                  <li className="dropdown">
                  <a className="nav-link menu-title"
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
              <div className='card'>
                <div className="card-body none ativo" id='message'>
                  <br/>
                  <br/>
                    <div className='salvarcampanha2'>
                        <a className="nav-btn2" 
                        onClick={() => navigate(`/mezap/campanhas/criar/${data}/${userID}`)}
                        ><span>Criar Campanha</span></a>
                        </div>
                        <br/>
                        <div className="table-responsive">
                        <table className="table table-xl">
                            <thead>
                                <tr>
                                    <th><strong>Nome</strong></th>
                                    <th><strong>Data de Criação</strong></th>
                                    <th><strong>Data de Início</strong></th>
                                    <th><strong>Data de Término</strong></th>
                                    <th><strong>Tipo da integração</strong></th>
                                    <th><strong>Status</strong></th>
                                    <th><strong>Ações</strong></th>
                                </tr> 
                            </thead>
                            <tbody>
                              {
                                  item.linhas!=null && item.linhas.map((item)=>(
                                      <tr key={item.id} >
                                        <td><strong>{item.name}</strong></td>
                                          <td><strong>{item.creationDate}</strong></td>
                                          <td><strong>{item.startDate}</strong></td>
                                          <td><strong>{item.finishDate}</strong></td>
                                          <td> <span
                                              className='badge light ' 
                                              style={{color: "white",
                                                  backgroundColor: "rgba(242,168,20,.6)",
                                          }}
                                              >{item.type}</span></td>
                                          <td>
                                              <span
                                              className='badge light ' 
                                              style={{color: item.status == 'ATIVO' ? "white" : "white",
                                                  backgroundColor: item.status == 'ATIVO' ? "#1b4c43" : "#d22d3d",
                                          }}
                                              >
                                              {item.status}
                                              </span>
                                          </td>
                                          <td>
                                         
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

export default CampanhaBody

