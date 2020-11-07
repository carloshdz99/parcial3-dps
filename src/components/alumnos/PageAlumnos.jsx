import React, { useState, useEffect } from 'react';
//importando componentes
import FormAlumnos from './Form';
import Registros from './Registros';
//importando a firebase
import { db } from '../../firebase/firebase';

const PageAlumnos = () => {
    //contador
    const [contador, setContador] = useState(0);
    //estado de registros
    const [alumnos, setAlumnos] = useState([]);
    const handleRegistros = () => {
        db.collection("estudiantes").onSnapshot((response) => {
            const datos = [];
            response.forEach(doc => {
                datos.push({ ...doc.data(), id: doc.id })
            })
            setAlumnos(datos);
            setContador(datos.length)
        })
    }
    //usando useEffect
    useEffect(() => {
        handleRegistros();
    }, [])

    return (
        <div className="container py-5">
            <FormAlumnos
                contador={contador}
            />
            <Registros
                alumnos={alumnos}
            />
        </div>
    )
}
//exportando pagina de alumnos
export default PageAlumnos;