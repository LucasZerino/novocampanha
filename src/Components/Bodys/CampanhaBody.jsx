import React, { useEffect, useState } from 'react'
import dashboard1 from '../../Pages/assets/images/dashboard/1.png'
import SettingsIcon from '@mui/icons-material/Settings';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { useNavigate } from 'react-router-dom'
import campanhaicon from '../../Assets/Icons/campanha.png'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import playico from '../../Assets/Icons/play-button.png'

const CampanhaBody = () => {

  const { data } = useParams();
  const [respo, setRespo] = useState();
  const [userID, setUserId] = useState();
  const navigate = useNavigate();
  const [item, setItem] = useState({linhas: []})

  document.querySelectorAll("img").forEach(function(img){
    img.addEventListener("click", function(event) {
    const el = event.target || event.srcElement;
    const idCampanha = el.id;
    if(el.className==='playico'){
        start(idCampanha);
    }
})})

const start = (idCampanha) => {
  console.log(idCampanha)
  var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsdWNhc21hdGhldXNhcmF1am80OEBnbWFpbC5jb20iLCJpZENsaWVudCI6IjVjNGE3Yjc2LTBmMWYtNDYzOC05MmE4LWMwNTMwYzA3MjBjOCIsImNyZWF0ZWQiOjE2NTk2MjExMTk1MTMsInJvbGVzIjpbIlJPTEVfQVBJIiwiUk9MRV9EQVNIQk9BUkQiLCJST0xFX0RBU0hCT0FSRF9HUk9VUFMiLCJST0xFX0dST1VQUyIsIlJPTEVfSU5URUdSQVRJT05fVVNFUiIsIlJPTEVfVFJJQUwiLCJST0xFX1VTRVJTIiwiUk9MRV9XRUJIT09LIl0sImlkIjozMjAsImV4cCI6MTY5MTE1NzExOX0.Pd6xmvdFewFZSKF4D9srNKw1bskzyzvA12uO4C7DfRLHIX56uO1rB0GGffXuiD7jujRch1DaG0XcvrbY9F9RyA");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  redirect: 'follow'
};

fetch(`https://api-front.moorse.io/campaign-service/api/v1/campaigns/${idCampanha}/start-now`, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

}

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
                         <i><ConnectWithoutContactIcon/></i>
                        <span>Integração</span>
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
                                                  backgroundColor: item.status == 'FINISHED' ? "#6e6b6c" : "#1b4c43",
                                          }}
                                              >
                                              {item.status}
                                              </span>
                                          </td>
                                          <td>
                                          <div className="d-flex" id='fora'>  
                                            <a
                                            className="btn2 btn-primary shadow btn-xs sharp mr-1"
                                            ><img className='playico' id={item.id} src={playico}/><div className="fechado"><span className="tooltiptext">Iniciar Campanha</span></div></a>
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

export default CampanhaBody

