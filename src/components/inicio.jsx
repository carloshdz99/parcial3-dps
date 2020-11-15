import React from 'react';

const Inicio = () => {
    return (
        <div className="container py-3">
            <div className="text-center">
                <h3>Parcial practico 3 DPS</h3>
                <hr/>
            </div>
            <div className="row">
                <div className="col">
                    <div className="card border-danger mb-3" style={{maxWidth: 18+"rem"}}>
                        <div className="card-header bg-transparent border-danger">Integrante:</div>
                        <div className="card-body text-dark">
                            <h5 className="card-title">Kevin Nelson Torres Landaverde</h5>
                            <p className="card-text">TL160062</p>
                        </div>
                        <div className="card-footer bg-transparent border-danger">Grupo 02L</div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-danger mb-3" style={{maxWidth: 18+"rem"}}>
                        <div className="card-header bg-transparent border-danger">Integrante:</div>
                        <div className="card-body text-dark">
                            <h5 className="card-title">Carlos Josué Hernández Funes</h5>
                            <p className="card-text">HF170965</p>
                        </div>
                        <div className="card-footer bg-transparent border-danger">Grupo 02L</div>
                    </div>
                </div>
                <div className="col">
                    <div className="card border-danger mb-3" style={{maxWidth: 18+"rem"}}>
                        <div className="card-header bg-transparent border-danger">Integrante:</div>
                        <div className="card-body text-dark">
                            <h5 className="card-title">Christian Josué Landaverde Flores</h5>
                            <p className="card-text">LF171258</p>
                        </div>
                        <div className="card-footer bg-transparent border-danger">Grupo 02L</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inicio;