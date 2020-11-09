import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
//importando a firebase
import { db } from '../../firebase/firebase';
//importando las alertas
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const FormALumnos = ({ contador }) => {
    //estado de campos a ingresa
    const initialForm = {
        nombre: '',
        nota1: 0,
        nota2: 0,
        nota3: 0,
        nota4: 0,
        nota5: 0,
        promedio: 0
    }
    const [alumnosForm, setAlumnosForm] = useState(initialForm);
    //cambiando el estado
    const handleChange = (e) => {
        setAlumnosForm({
            ...alumnosForm,
            [e.target.name]: e.target.value
        })
    }
    //enviando datos a la base
    const handleSubmit = (e) => {
        e.preventDefault();
        var prom = (parseFloat(alumnosForm.nota1) + parseFloat(alumnosForm.nota2) + parseFloat(alumnosForm.nota3) + parseFloat(alumnosForm.nota4) + parseFloat(alumnosForm.nota5)) / 5;
        alumnosForm.promedio = prom;
        db.collection('estudiantes').add(alumnosForm);
        toast.success("Alumno registrado");
        toggle();
        setAlumnosForm(initialForm)
    }

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <ToastContainer />
            <Button
                disabled={contador == 3}
                color="primary" onClick={toggle}>Nuevo ALumno {' '}
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
            </Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Formulario de alumnos</ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Nombre:</label>
                            <input type="text" required className="form-control"
                                name="nombre"
                                value={alumnosForm.nombre}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Nota1:</label>
                            <input type="number" min="0" max="10" className="form-control"
                                name="nota1"
                                value={alumnosForm.nota1}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Nota2:</label>
                            <input type="number" min="0" max="10" className="form-control"
                                name="nota2"
                                value={alumnosForm.nota2}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Nota3:</label>
                            <input type="number" min="0" max="10" className="form-control"
                                name="nota3"
                                value={alumnosForm.nota3}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Nota4:</label>
                            <input type="number" min="0" max="10" className="form-control"
                                name="nota4"
                                value={alumnosForm.nota4}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Nota5:</label>
                            <input type="number" min="0" max="10" className="form-control"
                                name="nota5"
                                value={alumnosForm.nota5}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">Guardar</button>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default FormALumnos;