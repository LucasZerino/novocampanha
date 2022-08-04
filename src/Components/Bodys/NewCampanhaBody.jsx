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
import { useParams } from 'react-router-dom'
import listaExemplo from '../../Assets/listaexemplo.xlsx'

const NewCampanhaBody = () => {

    const [nome, setNome] = useState();
    const [file, setFile] = useState()
    const { data } = useParams();
    const { userID } = useParams();
    const navigate = useNavigate();
    const [dataE, setDataE] = useState('');
    const [value, setValue] = useState(new Date());
    const definirdata = () => { 
      if((document.getElementById('datepiker').classList.value) === 'col-md-6 datepiker'){
        document.getElementById('datepiker').classList.add("ativado");
      }else{
        document.getElementById('datepiker').classList.remove("ativado");
      }
    }

    function handleChange(event) {
      setFile(event.target.files[0])
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


    console.log(value)
const result1 = value.toString().slice(17, 24)
console.log(result1)
const dia = value.toString().slice(8, 10);
const mes = value.toString().slice(4, 7);
const ano = value.toString().slice(11, 15);
const hora = value.toString().slice(15, 24);

if(mes==='Jan'){
  console.log("mes 1")
  const mes2='01';
  const teste = ano+'-'+mes2+'-'+dia+hora;
console.log(teste)
}else if(mes==='Feb'){
  console.log("mes 2")
  const mes2='02';
  const teste = ano+'-'+mes2+'-'+dia+hora;
console.log(teste)
}else if(mes==='Mar'){
  console.log("mes 3")
  const mes2='03';
  const teste = ano+'-'+mes2+'-'+dia+hora;
console.log(teste)
}else if(mes==='Apr'){
  console.log("mes 4")
  const mes2='04';
  const teste = ano+'-'+mes2+'-'+dia+hora;
console.log(teste)
}else if(mes==='May'){
  console.log("mes 5")
  const mes2='05';
  const teste = ano+'-'+mes2+'-'+dia+hora;
console.log(teste)
}else if(mes==='Jun'){
  console.log("mes 6")
  const mes2='06';
  const teste = ano+'-'+mes2+'-'+dia+hora;
console.log(teste)
}else if(mes==='Jul'){
  console.log("mes 7")
  const mes2='07';
  const teste = ano+'-'+mes2+'-'+dia+hora;
console.log(teste)
}else if(mes==='Aug'){
  console.log("mes 8")
  const mes2='08';
  const teste = ano+'-'+mes2+'-'+dia+hora;
console.log(teste)
}else if(mes==='Sep'){
  console.log("mes 9")
  const mes2='09';
  const teste = ano+'-'+mes2+'-'+dia+hora;
console.log(teste)
}else if(mes==='Oct'){
  console.log("mes 10")
  const mes2='10';
  const teste = ano+'-'+mes2+'-'+dia+hora;
console.log(teste)
}else if(mes==='Nov'){
  console.log("mes 11")
  const mes2='11';
  const teste = ano+'-'+mes2+'-'+dia+hora;
console.log(teste)
}else if(mes==='Dec'){
  console.log("mes 12")
  const mes2='12';
  const teste = ano+'-'+mes2+'-'+dia+hora;
console.log(teste)
}







    const Criarcampanha = () => {

      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlcmljb2Nlc2FyQHdlYmNrLmNvbS5iciIsImlkQ2xpZW50IjoiYTdjNGFkOWItZGVjZS00YmIwLTlhYzktOTMwNzc2Y2JmNGRhIiwiY3JlYXRlZCI6MTY1OTYzNDA4OTM5OSwicm9sZXMiOlsiUk9MRV9BUEkiLCJST0xFX0RBU0hCT0FSRCIsIlJPTEVfREFTSEJPQVJEX0dST1VQUyIsIlJPTEVfR1JPVVBTIiwiUk9MRV9JTlRFR1JBVElPTl9VU0VSIiwiUk9MRV9UUklBTCIsIlJPTEVfVVNFUlMiLCJST0xFX1dFQkhPT0siXSwiaWQiOjMwMCwiZXhwIjoxNjkxMTcwMDg5fQ.JO3G1S4V7rpYey6i262UdbD1zb7nyacckZMMpmyC6Y4iA9vDmiFwpWTGiu6P0NPwLmO5--qdCsedsCQsEfVdvQ");

      const formdata = new FormData();
      formdata.append("name", nome);
      formdata.append("botname", "\"\"");
      formdata.append("sendTemplate", "Olá, *#{name}*.\\\\n\\\\nMensagem de campanha teste para implementação de integração Moorse .\\\\n\\\\nConfirme o número de CNPJ da empresa teste *#{cnpj}*.");
      formdata.append("finishTemplate", "");
      formdata.append("errorTemplate", "");
      formdata.append("integrationType", "WHATSAPP");
      formdata.append("integrationId", "f27f1202-02fd-431a-8ce1-7b82cfd8bb85");
      formdata.append("startDate");
      formdata.append("mailing", file);
      formdata.append("type", "NOTIFICATION");
      formdata.append("mailingLayout", "name;cnpj");
      formdata.append("clientId", userID);

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
      };

      fetch("https://api-front.moorse.io/campaign-service/api/v1/campaigns", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));


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
                  <a className="nav-link menu-title active"
                  onClick={() => navigate(`/mezap/campanhas/${data}`)}
                  >
                        <i><BusinessCenterIcon/></i>
                        <span>Campanhas</span>
                    </a>
                    <ul className="nav-submenu menu-content">
                      <li><a className='lista'
                      onClick={() => navigate(`/mezap/campanhas/${data}`)}
                      >Minhas Campanhas</a></li>
                      <li><a className='lista active'
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
                  <h3 className='title'><br/>Nova Campanha</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item"><a
                    className='listabr active' 
                    onClick={() => navigate(`/mezap/home${data}`)}
                    >Home</a></li>
                    <li className="breadcrumb-item active"><a
                    onClick={() => navigate(`/mezap/campanhas/${data}`)}
                    className='listabr'
                    >campanhas</a></li>
                    <li className="breadcrumb-item active"><a
                     onClick={() => navigate(`/mezap/campanhas/criar/${data}/${userID}`)}
                     className='listabr'
                    >nova campanha</a></li>
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
                      <div className="stepwizard-step"><a className="btn btn-primary flex1" id='configura' onClick={irConfig}><SettingsIcon/> Configurações</a></div>
                      <div className="stepwizard-step"><a className="btn btn-light flex1" id='menssage' onClick={irMessage}><SendToMobileIcon/> Mensagem</a></div>
                      <div className="stepwizard-step"><a className="btn btn-light flex1" id='ctt' onClick={irContato}><ContactsIcon/> Contatos</a></div>
                    </div>
                  </div>





                  <div className="card-body none ativo" id='config'>
                    <label className="form-label">Nome da sua campanha</label>
                    <input type='text' 
                    name='nome' 
                    id='nome'
                    className="form-control"
                    value={nome}
                    onChange={(e)=> setNome(e.target.value)}
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
                        <DateTimePicker 
                        onChange={setValue} value={value} />
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
                  <div className='row'>
                    <div className='col-md-6'>
                      <label className="form-label">Envie a lista</label>
                      <input type='file' 
                      className="form-control"
                      onChange={handleChange}
                      />
                    </div>
                    <div className='col-md-6'>
                      <div className='alinhar22'>
                        <label className="form-label">Exemplo de Lista</label>
                        <a className="nav-btn2"
                        href={listaExemplo}
                        download
                        ><span><FileDownloadIcon/> BAIXAR EXEMPLO</span></a>
                      </div>
                    </div>
      
                    <div className='salconstcampanha'>
                      <a className="nav-btn2" 
                      onClick={Criarcampanha}
                      ><span>Salconst Campanha</span></a>
                    </div>
                  </div>
                  </div>






                  <div className="card-body none" id='message'>
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
                    <div className='salconstcampanha'>
                      <a className="nav-btn2" ><span>Salconst Alterações</span></a>
                    </div>
                  </div>






                  <div className="card-body none" id='contato'>
                    <div className='salconstcampanha2'>
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