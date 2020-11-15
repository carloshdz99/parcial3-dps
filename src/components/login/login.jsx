import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
//importando a firebase
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import * as firebase from 'firebase/app';

//pantalla de login
const Login = (props) => {
    //constante de base de firebase
    const db = useFirebaseApp();
    //estado para datos de usuario
    const initialForm = {
        email: '',
        password: ''
    }
    const [formUser, setFormUser] = useState(initialForm);
    //cambiando el estado
    const handleChange = (e) => {
        setFormUser({
            ...formUser,
            [e.target.name]: e.target.value
        })
    }
    //iniciando sesion
    const handleLogin = (e) => {
        e.preventDefault();

        db.auth().signInWithEmailAndPassword(formUser.email, formUser.password)
        .then(() => {
            props.history.push('/inicio')
        })
        .catch((error)=>console.log(error));
        setFormUser(initialForm);
    }
    //iniciar sesion con google
    const handleLoginGoogle = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        db.auth().signInWithPopup(googleProvider).then(() => {
            props.history.push('/inicio')
        }).catch(error => console.log(error));
    }
    return (
        <div className="container h-100">
            <div className="py-5">
                <div className="row justify-content-center h-100">
                    <div className="col-sm-8 align-self-center text-center">
                        <div>
                            <div className="card">
                                <div className="card-header">
                                    Login
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleLogin}>
                                        <div className="form-group">
                                            <label>Correo:</label>
                                            <input type="text" className="form-control"
                                                name="email"
                                                value={formUser.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Contraseña:</label>
                                            <input type="password" className="form-control"
                                                name="password"
                                                value={formUser.password}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <button
                                                type="submit"
                                                className="btn btn-primary">Iniciar sesion</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <p>No tienes cuenta? <Link to="/registro" className="text-primary">Registrate</Link></p>
                                    <br />
                                    <button className="btn btn-dark"
                                        onClick={handleLoginGoogle}
                                    >Registrate con Google</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login);