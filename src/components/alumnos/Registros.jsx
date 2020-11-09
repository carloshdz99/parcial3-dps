import React from 'react';
//importando a firebase
import { db } from '../../firebase/firebase';
//importando las alertas
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Registros = ({ alumnos }) => {
    //eliminando un estudiante
    const handleDelete = (e) => {
        const id = e.target.parentElement.parentElement.children[0].textContent;
        if (window.confirm("Esta seguro de eliminar el estudiante")) {
            db.collection('estudiantes').doc(id).delete();
            toast.error("Registro eliminado");
        }
    }

    return (
        <div className="py-2">
            <ToastContainer />
            <table className="table">
                <thead>
                    <tr className="bg-dark text-white">
                        <th scope="col">Nombre</th>
                        <th scope="col">Nota1</th>
                        <th scope="col">Nota2</th>
                        <th scope="col">Nota3</th>
                        <th scope="col">Nota4</th>
                        <th scope="col">Nota5</th>
                        <th scope="col">Promedio</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alumnos.map((datos) => (
                            <tr key={datos.id}>
                                <td hidden>{datos.id}</td>
                                <td>{datos.nombre}</td>
                                <td>{datos.nota1}</td>
                                <td>{datos.nota2}</td>
                                <td>{datos.nota3}</td>
                                <td>{datos.nota4}</td>
                                <td>{datos.nota5}</td>
                                <td>{datos.promedio}</td>
                                <td><button className="btn btn-warning btn-sm">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                                    </svg>
                                    </button>{' '}
                                    <button onClick={handleDelete} className="btn btn-danger btn-sm">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                                        </svg>
                                    </button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Registros;