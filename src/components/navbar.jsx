//importando react
import React from 'react';
//importando rutas
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
//importando componentes
import Inicio from './inicio';
import Alumnos from './alumnos/PageAlumnos';
import Login from './login/login';
import Registry from './login/registry';
import Al from './alumnos/alumnos';
//importando a firebase
import { useFirebaseApp, useUser } from "reactfire";
import 'firebase/auth';

//navbar de la aplicacion
const Dashboard = () => {
    const user = useUser();
    const db = useFirebaseApp();

    const handleSignOut = () => {
        db.auth().signOut();
    }

    return (
        <Router>
            <Route path="/login"> <Login /></Route>
            <Route path="/registro"> <Registry /></Route>
            {
                user ? (
                    <Route
                        path="/"
                        render={() => (
                            <div>
                                <nav className="navbar navbar-dark bg-dark">
                                    <Link className="navbar-brand" to="/inicio">Inicio</Link>
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <Link className="nav-link" to="/alumnos">Alumos</Link>
                                        </li>
                                    </ul>
                                    <p className="text-white"> {user.email} </p>{' '}
                                    <p onClick={handleSignOut} className="btn btn-outline-light">Cerrar sesion</p>
                                </nav>

                                {/** direcciones */}
                                <Switch>
                                    <Route path="/inicio"> <Inicio /> </Route>
                                    <Route path="/alumnos"> <Alumnos /> </Route>
                                    <Route path="/prueba"> <Al /></Route>
                                    <Redirect from="/" to="/inicio" />
                                </Switch>
                            </div>
                        )}
                    />
                )
                    :
                    (<Redirect to="/login" />)
            }
        </Router>
    )
}

export default Dashboard;