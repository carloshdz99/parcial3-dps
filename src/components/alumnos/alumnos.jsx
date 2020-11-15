import React from 'react';

const Alumnos = () => {
    return (
        <div className="container py-2">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col">
                            <label>Nombre:</label>
                            <input className="form-control" placeholder="Nombre..." />
                        </div>
                        <div className="col">
                            <label>Nota 1:</label>
                            <input type="number" min="0" max="10" className="form-control"
                                placeholder="nota1"
                                required
                                name="nota1"
                            />
                        </div>
                        <div className="col">
                            <label>Nota 2:</label>
                            <input type="number" min="0" max="10" className="form-control"
                                placeholder="nota2"
                                required
                                name="nota2"
                            />
                        </div>
                    </div>
                    <div className="row py-2">
                        <div className="col">
                            <label>Nota 3:</label>
                            <input type="number" min="0" max="10" className="form-control"
                                placeholder="nota3"
                                required
                                name="nota3"
                            />
                        </div>
                        <div className="col">
                            <label>Nota 4:</label>
                            <input type="number" min="0" max="10" className="form-control"
                                placeholder="nota4"
                                required
                                name="nota4"
                            />
                        </div>
                        <div className="col">
                            <label>Nota 5:</label>
                            <input type="number" min="0" max="10" className="form-control"
                                placeholder="nota5"
                                required
                                name="nota5"
                            />
                        </div>
                        <div className="col">
                            <button className="btn btn-primary btn-sm">Guardar</button>
                            <br/>
                            <br/>
                            <button className="btn btn-warning btn-sm">Cancelar</button>                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Alumnos;