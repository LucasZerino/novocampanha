import React, {useState, useEffect} from 'react'
import dashboard1 from '../../Pages/assets/images/dashboard/1.png'
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact'
import { useNavigate } from 'react-router-dom'
import SendToMobileIcon from '@mui/icons-material/SendToMobile';
import ContactsIcon from '@mui/icons-material/Contacts';
import DateTimePicker from 'react-datetime-picker';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import PageFooter from '../PageFooter'
import EditIcon from '@mui/icons-material/Edit';
import { useParams } from 'react-router-dom'
import listaExemplo from '../../Assets/listaexemplo.xlsx'
import CloseIcon from '@mui/icons-material/Close';
import mezaplogo from '../../Assets/Images/mezap.png'

const NewCampanhaBody = () => {
  
  const [item, setItem] = useState({linhas: []})
  const [msgInicial, setMsgInicial] = useState();
  const [msgFinal, setMsgFinal] = useState();
  const [msgErr, setMsgErr] = useState();
  const [colunas, setColunas] = useState();

  
  const buscarinte = () => {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${data}`
      }
    };
    
    fetch('https://api.moorse.io/v2/whatsapp', options)
      .then(response => response.json())
      .then(response => setItem({linhas: response?.data?.content}))
      .catch(err => console.error(err));



      if(item?.linhas!=null && item?.linhas!=undefined){
        setIntegracao(item?.linhas['0']?.id)
      }
  }
    const [nome, setNome] = useState();
    const [file, setFile] = useState()
    const { data } = useParams();
    const { userID } = useParams();
    const navigate = useNavigate();
    const [dataE, setDataE] = useState('');
    const [value, setValue] = useState(new Date());
    const [tipo, setTipo] = useState();
    const [tempo, setTempo] = useState();
    const definirdata = () => { 
        document.getElementById('datepiker').classList.add("ativado");
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


    const [integracao, setIntegracao] = useState('');
const [timePick, SetTimePick] = useState('');

const setarData2 =() => {
  if(document.getElementById('datepiker').classList.length===3){
    document.getElementById('datepiker').classList.remove("ativado");
  }
  const ano = value.getFullYear();
  var hoje = value.getDate();
  var mes = value.getMonth() + 1; 
  if(mes<10){
    mes ='0'+`${mes}`
  }
  if(hoje<10){
    hoje = '0'+`${hoje}`
  }
  const hora = value.toString().slice(15, 24);
  const mesCorreto = mes;
  const atualDay = hoje;
  const tempoSetado = `${ano}`+'-'+`${mesCorreto}`+'-'+`${atualDay}`+hora
  SetTimePick(tempoSetado)
  setTempo(tempoSetado)
}


    const Criarcampanha = () => {

      var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlcmljb2Nlc2FyQHdlYmNrLmNvbS5iciIsImlkQ2xpZW50IjoiYTdjNGFkOWItZGVjZS00YmIwLTlhYzktOTMwNzc2Y2JmNGRhIiwiY3JlYXRlZCI6MTY1OTYzNDA4OTM5OSwicm9sZXMiOlsiUk9MRV9BUEkiLCJST0xFX0RBU0hCT0FSRCIsIlJPTEVfREFTSEJPQVJEX0dST1VQUyIsIlJPTEVfR1JPVVBTIiwiUk9MRV9JTlRFR1JBVElPTl9VU0VSIiwiUk9MRV9UUklBTCIsIlJPTEVfVVNFUlMiLCJST0xFX1dFQkhPT0siXSwiaWQiOjMwMCwiZXhwIjoxNjkxMTcwMDg5fQ.JO3G1S4V7rpYey6i262UdbD1zb7nyacckZMMpmyC6Y4iA9vDmiFwpWTGiu6P0NPwLmO5--qdCsedsCQsEfVdvQ");

var formdata = new FormData();
formdata.append("name", nome);
formdata.append("botname", "\"\"");
formdata.append("sendTemplate", msgInicial);
formdata.append("finishTemplate", msgFinal);
formdata.append("errorTemplate", msgErr);
formdata.append("integrationType", "WHATSAPP");
formdata.append("integrationId", integracao);
formdata.append("startDate", tempo);
formdata.append("mailing", file);
formdata.append("type", tipo);
formdata.append("mailingLayout", colunas);
formdata.append("clientId", "a7c4ad9b-dece-4bb0-9ac9-930776cbf4da");

var requestOptions = {
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



useEffect(() => {
  buscarinte()
  setTipo('NPS')
  setMsgInicial('Olá, #{username}.\n\nGostaríamos de sua participação em nosso NPS referente aos serviços de #{service} prestados por nós, Associação Pensar Clube Web à #{client}\n\nO NPS, consiste em apenas uma pergunta:\n\nQual é a probabilidade de você recomendar esta empresa para um amigo ou colega?\n\n👎🏻 ☹️ 0 1 2 3 4 5 6 7 8 9 10 👍🏻 😀\n\nAté breve')
  setMsgFinal('#{username}, muito obrigado por colaborar, sua opinião é muito importante para nós 🤗\n\nQue a sua experiência seja cada vez melhor com a Associação Pensar Clube Web!\n\nAté breve 🤝')
  setMsgErr('Ops... algo deu errado😕\n\nA nota do NPS deve ser de 0 a 10')
  setColunas('name;cnpj')
},[])

useEffect(() => {
  setarData2();
  Trocar();
},[value])


const Trocar = () =>{
  const novo = document.getElementById('tempo231').value
  setTempo(novo)
}

const setarData = () => {
  if(document.getElementById('datepiker').classList.length===3){
    document.getElementById('datepiker').classList.remove("ativado");
  }
  const ano = value.getFullYear();
  var hoje = value.getDate();
  var mes = value.getMonth() + 1; 
  if(mes<10){
    mes ='0'+`${mes}`
  }
  if(hoje<10){
    hoje = '0'+`${hoje}`
  }
  const hora = ' 23:59:00';
  const mesCorreto = mes;
  const atualDay = hoje;
  const tempoSetado = `${ano}`+'-'+`${mesCorreto}`+'-'+`${atualDay}`+hora
  SetTimePick(tempoSetado)
  setTempo(tempoSetado)
}

const closeMsg1 = () => {
  document.getElementById('tokeni').classList.remove("ativo");
}

const closeMsg2 = () => {
  document.getElementById('tokeni2').classList.remove("ativo");
}

const closeMsg3 = () => {
  document.getElementById('tokeni3').classList.remove("ativo");
}

const iniciarEdit = () => {
  if(document.getElementById('tokeni2').classList.length===2){
    document.getElementById('tokeni2').classList.remove("ativo");
  }
  if(document.getElementById('tokeni3').classList.length===2){
    document.getElementById('tokeni3').classList.remove("ativo");
  }
  document.getElementById('tokeni').classList.add("ativo");
}

const iniciarFinal = () => {
  if(document.getElementById('tokeni').classList.length===2){
    document.getElementById('tokeni').classList.remove("ativo");
  }
  if(document.getElementById('tokeni3').classList.length===2){
    document.getElementById('tokeni3').classList.remove("ativo");
  }
  document.getElementById('tokeni2').classList.add("ativo");
}

const iniciarErr = () => {
  if(document.getElementById('tokeni').classList.length===2){
    document.getElementById('tokeni').classList.remove("ativo");
  }
  if(document.getElementById('tokeni2').classList.length===2){
    document.getElementById('tokeni2').classList.remove("ativo");
  }
  document.getElementById('tokeni3').classList.add("ativo");
}

console.log(integracao)
console.log(userID)

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

      <div className="bodywpp" id='tokeni'>
      <CloseIcon 
                        className='fechar'
                        onClick={closeMsg1}/>
        <div className="containerwpp">
            <div className="rightSide">
                <div className="header">
                    <div className="imgText">
                        <div className="userimg">
                            <img src={mezaplogo} alt="" className="cover"/>
                        </div>
                        <h4 className='mezaptit'>Mezap <br/><span>online</span></h4>
                    </div>
                    <ul className="nav_icons">
                        <li><ion-icon name="search-outline"></ion-icon></li>
                        <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
                    </ul>
                </div>    
                <div className="chatbox">
                    <div className="message my_msg">
                        <p>{msgInicial} <br/><span>12:18</span></p>
                    </div>
                    <div className="message friend_msg">
                        <p>   <span  className='textocampanha'>Abaixo você pode editar a mensagem que será enviada ao seu cliente quando a campanha for finalizada.
                            <br/>Caso você queira personalizar suas mensagens poderá digitar #{"{coluna_da_tabela_excel}"}, essa informação será substituída pelo valor inserido nela, por exemplo, ao utilizar #{"{client}"} no lugar dessa variável vai aparecer o <strong>nome do cliente</strong> em seu lugar na mensagem.
                            <br/>Também é possível que você formate os textos das suas mensagens. <strong>Negrito: </strong>*texto*, Itálico: _text_, Traçado: ~texto~
                        </span><span>12:15</span></p>
                    </div>
                </div>
                
          
                <div className="chat_input">
                    <ion-icon name="happy-outline"></ion-icon>
             
                    <textarea type="text" 
                    placeholder="Escreva uma mensagem"
                    value={msgInicial}
                    className='inputmsg'
                    onChange={(e)=> setMsgInicial(e.target.value)}
                    >

                    </textarea>
                    <a className="nav-btn2" 
                      onClick={closeMsg1}
                      ><span>Salvar</span></a>
                </div>
            </div>
        </div>
    </div>




   



    
    <div className="bodywpp" id='tokeni2'>
                    <CloseIcon 
                                      className='fechar'
                                      onClick={closeMsg2}/>
                      <div className="containerwpp">
                          <div className="rightSide">
                              <div className="header">
                                  <div className="imgText">
                                      <div className="userimg">
                                          <img src={mezaplogo} alt="" className="cover"/>
                                      </div>
                                      <h4 className='mezaptit'>Mezap <br/><span>online</span></h4>
                                  </div>
                                  <ul className="nav_icons">
                                      <li><ion-icon name="search-outline"></ion-icon></li>
                                      <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
                                  </ul>
                              </div>
                  
                    
                              <div className="chatbox">
                                  <div className="message my_msg">
                                      <p>{msgFinal} <br/><span>12:18</span></p>
                                  </div>
                                  <div className="message friend_msg">
                                      <p>   <span  className='textocampanha'>Abaixo você pode editar a mensagem que será enviada ao seu cliente quando a campanha for iniciada.
                                          <br/>Caso você queira personalizar suas mensagens poderá digitar #{"{coluna_da_tabela_excel}"}, essa informação será substituída pelo valor inserido nela, por exemplo, ao utilizar #{"{client}"} no lugar dessa variável vai aparecer o <strong>nome do cliente</strong> em seu lugar na mensagem.
                                          <br/>Também é possível que você formate os textos das suas mensagens. <strong>Negrito: </strong>*texto*, Itálico: _text_, Traçado: ~texto~
                                      </span><span>12:15</span></p>
                                  </div>
                              </div>
                              
                        
                              <div className="chat_input">
                                  <ion-icon name="happy-outline"></ion-icon>
                          
                                  <textarea type="text" 
                                  placeholder="Escreva uma mensagem"
                                  value={msgFinal}
                                  className='inputmsg'
                                  onChange={(e)=> setMsgFinal(e.target.value)}
                                  >

                                  </textarea>
                                  <a className="nav-btn2" 
                                    onClick={closeMsg2}
                                    ><span>Salvar</span></a>
                              </div>
                          </div>
                      </div>
                  </div>














                  
    <div className="bodywpp" id='tokeni3'>
                    <CloseIcon 
                                      className='fechar'
                                      onClick={closeMsg3}/>
                      <div className="containerwpp">
                          <div className="rightSide">
                              <div className="header">
                                  <div className="imgText">
                                      <div className="userimg">
                                          <img src={mezaplogo} alt="" className="cover"/>
                                      </div>
                                      <h4 className='mezaptit'>Mezap <br/><span>online</span></h4>
                                  </div>
                                  <ul className="nav_icons">
                                      <li><ion-icon name="search-outline"></ion-icon></li>
                                      <li><ion-icon name="ellipsis-vertical"></ion-icon></li>
                                  </ul>
                              </div>
                  
                    
                              <div className="chatbox">
                                  <div className="message my_msg">
                                      <p>{msgFinal} <br/><span>12:18</span></p>
                                  </div>
                                  <div className="message friend_msg">
                                      <p>   <span  className='textocampanha'>Abaixo você pode editar a mensagem que será enviada ao seu cliente quando a resposta não for uma opção solicitada.
                                          <br/>Caso você queira personalizar suas mensagens poderá digitar #{"{coluna_da_tabela_excel}"}, essa informação será substituída pelo valor inserido nela, por exemplo, ao utilizar #{"{client}"} no lugar dessa variável vai aparecer o <strong>nome do cliente</strong> em seu lugar na mensagem.
                                          <br/>Também é possível que você formate os textos das suas mensagens. <strong>Negrito: </strong>*texto*, Itálico: _text_, Traçado: ~texto~
                                      </span><span>12:15</span></p>
                                  </div>
                              </div>
                              
                        
                              <div className="chat_input">
                                  <ion-icon name="happy-outline"></ion-icon>
                          
                                  <textarea type="text" 
                                  placeholder="Escreva uma mensagem"
                                  value={msgErr}
                                  className='inputmsg'
                                  onChange={(e)=> setMsgErr(e.target.value)}
                                  >

                                  </textarea>
                                  <a className="nav-btn2" 
                                    onClick={closeMsg3}
                                    ><span>Salvar</span></a>
                              </div>
                          </div>
                      </div>
                  </div>













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
                      <div className="stepwizard-step fora"><a className="btn btn-light flex1" id='ctt' onClick={irContato}><ContactsIcon/> Contatos</a></div>
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
                              <input id='red' type='radio' onClick={setarData} name='selection'></input>
                        </div>
                        <div className='rowmanual2'>
                              <label className='form-label checkbox'>Definir data</label>
                              <input id='green' onClick={definirdata} type='radio' name='selection'></input>
                        </div>
                        <input className='form-control'
                        value={timePick}
                        type='hidden'
                        id='tempo231'
                        ></input>
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
                    <select className='form-control'
                       value={tipo}
                       onChange={e => setTipo(e.target.value)}
                     >
                      <option value='NPS'>Campaha NPS</option>
                      <option value='NOTIFICATION'>Capanha de notificação</option>
                     </select>
                    <br/>
                     <label className="form-label">Integração</label>
                     <select className='form-control'
                       value={integracao}
                       onChange={e => setIntegracao(e.target.value)}
                     >
                     {
                        item.linhas!=null && item.linhas.map((item)=>(
                        <option
                        value={item.id}
                        key={item.name}
                        >{item.name}</option>
                      ))
                    }
                     </select>
                    <br/>
                    <label className="form-label">Colunas da Tabela</label>
                    <input className='form-control'
                    value={colunas}
                    onChange={e => setColunas(e.target.value)}
                    >
                    </input>
                    <br></br>
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
      
                    <div className='salvarcampanha'>
                      <a className="nav-btn2" 
                      onClick={irMessage}
                      ><span>Próximo</span></a>
                    </div>
                  </div>
                  </div>






                  <div className="card-body none" id='message'>
                    <div className='mensagem'>
                      <h6>Mensagem para iniciar campanha</h6>
                      <a onClick={iniciarEdit} className="nav-btn2" ><span>Editar</span></a>
                    </div>
                    <br/>
                    <div className='mensagem'>
                      <h6>Mensagem de finalização da campanha</h6>
                      <a onClick={iniciarFinal}className="nav-btn2" ><span>Editar</span></a>
                    </div>
                      <br/>
                    <div className='mensagem'>
                      <h6>Mensagem caso a resposta do cliente não bata com a validação da pergunta</h6>
                      <a onClick={iniciarErr} className="nav-btn2" ><span>Editar</span></a>
                    </div>
                    <br/>
                    <br/>
                    <div className='salvarcampanha'>
                      <a className="nav-btn2" 
                      onClick={Criarcampanha}
                      ><span>Criar campanha</span></a>
                    </div>
                  </div>






                  <div className="card-body none" id='contato'>
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