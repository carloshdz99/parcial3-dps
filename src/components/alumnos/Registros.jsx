import React from 'react';

const Registros = ({ alumnos, mayorPromedio, menorPromedio, handleEdit, handleDelete, contador }) => {

    return (
        <div className="py-2">
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
                        <th scope="col">Conclusion</th>
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
                                <td>{datos.resultado}</td>
                                <td>
                                    <button
                                    disabled={contador == 3}
                                    onClick={handleEdit} className="btn btn-warning btn-sm">
                                        Editar
                                    </button>
                                    <button onClick={handleDelete} className="btn btn-danger btn-sm">
                                        Eliminar
                                    </button>
                                    </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <p>El promedio mayor es: {mayorPromedio}</p>
            <p>El menor Promedio es: {menorPromedio}</p>
        </div>
    )
}

export default Registros;