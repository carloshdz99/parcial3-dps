//importando react
import React from 'react';
//importando rutas
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
//importando componentes
import Inicio from './inicio';
import FormAlumnos from './alumnos/Form';

//navbar de la aplicacion
const Dashboard = () => {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/inicio">Inicio</Link>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/alumnos">Alumos</Link>
                        </li>
                    </ul>
                </nav>

                {/** direcciones */}
                <Switch>
                    <Route path="/inicio"> <Inicio /> </Route>
                    <Route path="/alumnos"> <FormAlumnos /> </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Dashboard;