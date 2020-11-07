import React from 'react';
//importando a firebase
import { db } from '../../firebase/firebase';
//importando las alertas
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Registros = ({alumnos}) => {
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
                                <td><button className="btn btn-warning btn-sm">Editar</button>{' '}
                                    <button onClick={handleDelete} className="btn btn-danger btn-sm">Eliminar</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Registros;