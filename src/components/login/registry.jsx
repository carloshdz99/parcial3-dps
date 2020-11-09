import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
//importando a firebase
import { useFirebaseApp } from 'reactfire';
import 'firebase/auth';
import * as firebase from 'firebase/app';

//pantalla de registro
const Registry = (props) => {
    //constante de firebase
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
    //metodo para registrarse
    const handleRegistry = (e) => {
        e.preventDefault();
        db.auth().createUserWithEmailAndPassword(formUser.email, formUser.password)
            .then(() => {
                props.history.push('/inicio')
            })
            .catch((error) => {
                console.log(error);
            })
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
                                    Registrate
                                </div>
                                <div className="card-body">
                                    <form onSubmit={handleRegistry}>
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
                                            <button type="submit" className="btn btn-primary">Registrarse</button>
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <p>Ya tienes cuenta?
                                    <Link to="/login" className="text-primary">Inicia sesion</Link>
                                    </p>
                                    <br />
                                    <button className="btn btn-light"
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

export default withRouter(Registry);