import React from 'react';
import "react-toastify/dist/ReactToastify.css";

const FormALumnos = ({ contador, handleSubmit, handleChange, alumnosForm, handleClear }) => {

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col">
                                <label>Nombre:</label>
                                <input className="form-control"
                                    required
                                    name="nombre"
                                    value={alumnosForm.nombre}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">
                                <label>Nota 1:</label>
                                <input type="number" min="0" max="10" className="form-control"
                                    step="0.01"
                                    required
                                    name="nota1"
                                    value={alumnosForm.nota1}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">
                                <label>Nota 2:</label>
                                <input type="number" min="0" max="10" className="form-control"
                                    step="0.01"
                                    required
                                    name="nota2"
                                    value={alumnosForm.nota2}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col">
                                <label>Nota 3:</label>
                                <input type="number" min="0" max="10" className="form-control"
                                    step="0.01"
                                    required
                                    name="nota3"
                                    value={alumnosForm.nota3}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">
                                <label>Nota 4:</label>
                                <input type="number" min="0" max="10" className="form-control"
                                    step="0.01"
                                    required
                                    name="nota4"
                                    value={alumnosForm.nota4}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">
                                <label>Nota 5:</label>
                                <input type="number" min="0" max="10" className="form-control"
                                    step="0.01"
                                    required
                                    name="nota5"
                                    value={alumnosForm.nota5}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col">
                                <button className="btn btn-primary btn-sm"
                                    disabled={contador == 3}
                                    type="submit"
                                >Guardar</button>
                                <br />
                                <br />
                                <button className="btn btn-danger btn-sm"
                                    type="button"
                                    onClick={handleClear}
                                >Cancelar</button>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default FormALumnos;