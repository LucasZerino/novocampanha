import React from 'react';
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import LoginPage from '../Pages/LoginPage';
import HomePage from '../Pages/HomePage';
import CampanhasPage from '../Pages/CampanhasPage';
import ConfigPage from '../Pages/ConfigPage';
import NewCampanhaPage from '../Pages/NewCampanhaPage';
import User from '../Pages/Cadastros/User'
import Perfil from '../Pages/Cadastros/Perfil'
import Empresa from '../Pages/Cadastros/Empresa'

const AppRoutes = () => {

    return(
        <Router>
                <Routes>
                    <Route exact path='/mezap/home/:data' element={<HomePage/>}/>
                    <Route exact path='/mezap/campanhas/:data' element={<CampanhasPage/>}/>
                    <Route exact path='/mezap/campanhas/criar/:data/:userID' element={<NewCampanhaPage/>}/>
                    <Route exact path='/mezap/sett/:data' element={<ConfigPage/>}/>
                    <Route exact path='/mezap/sett/user/:data' element={<User/>}/>
                    <Route exact path='/mezap/sett/perfil/:data' element={<Perfil/>}/>
                    <Route exact path='/mezap/sett/empresa/:data' element={<Empresa/>}/>
                    <Route path='/' element={<LoginPage/>}/>
                    <Route path='*' element={<LoginPage/>}/>
                </Routes>
        </Router>
    )
}

export default AppRoutes;