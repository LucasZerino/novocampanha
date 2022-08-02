import React from 'react'
import LogoImage from '../Pages/assets/images/logo/logo.png'
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { useNavigate } from 'react-router-dom'


const PageHeader = () => {

    const navigate = useNavigate();

  return (
    <div className="page-main-header">
        <div className="main-header-right row m-0">
          <div className="main-header-left">
            <div className="logo-wrapper"><a href="/"><img className="img-fluid" src={LogoImage} alt=""/></a></div>
            <div className="toggle-sidebar"><i data-feather="align-center" id="sidebar-toggle"><MenuIcon fontSize="large"/></i></div>
          </div>
          <div className="left-menu-header col">
            <ul>
              <li>
                <form className="form-inline search-form">
                  <div className="search-bg"><i><ManageSearchIcon/></i>
                    <input className="form-control-plaintext" placeholder="Buscar....."/>
                  </div>
                </form><span className="d-sm-none mobile-search search-bg"><i><ManageSearchIcon/></i></span>
              </li>
            </ul>
          </div>
          <div className="nav-right col pull-right right-menu p-0">
            <ul className="nav-menus">
              <li className="onhover-dropdown p-0">
                <button 
                className="btn btn-primary-light" 
                type="button" 
                onClick={() => navigate(`/`)}
                ><a href="#"><i><LogoutIcon/></i>Sair</a></button>
              </li>
            </ul>
          </div>
          <div className="d-lg-none mobile-toggle pull-right w-auto"><i data-feather="more-horizontal"></i></div>
        </div>
      </div>
  )
}

export default PageHeader