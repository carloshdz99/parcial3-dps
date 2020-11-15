import React, { useState, useEffect } from 'react';
//importando componentes
import FormAlumnos from './Form';
import Registros from './Registros';
//importando las alertas
import { ToastContainer, toast } from 'react-toastify';
//importando a firebase
import { db } from '../../firebase/firebase';

const PageAlumnos = () => {
    //mayor promedio
    const [promedios, setPromedios] = useState([]);
    const [mayorPromedio, setMayorPromedio] = useState(0);
    const [menorPromedio, setMenorPromedio] = useState(0);
    //contador
    const [contador, setContador] = useState(0);
    //estado de registros
    const [alumnos, setAlumnos] = useState([]);
    const handleRegistros = () => {
        db.collection("estudiantes").onSnapshot((response) => {
            const datos = [];
            const notas = [];
            var mayor = 0;
            var menor = 0;
            response.forEach(doc => {
                datos.push({ ...doc.data(), id: doc.id })
                notas.push(parseFloat(doc.data().promedio))
            })
            //console.log(notas)
            setPromedios(notas);
            mayor = Math.max(...notas);
            menor = Math.min(...notas);
            setMayorPromedio(mayor)
            setMenorPromedio(menor);
            setAlumnos(datos);
            setContador(datos.length)
        })
    }
    //usando useEffect
    useEffect(() => {
        handleRegistros();
    }, [])

    const initialForm = {
        nombre: '',
        nota1: 0,
        nota2: 0,
        nota3: 0,
        nota4: 0,
        nota5: 0,
        promedio: 0,
        resultado: ''
    }
    const [alumnosForm, setAlumnosForm] = useState(initialForm);
    //cambiando el estado
    const handleChange = (e) => {
        setAlumnosForm({
            ...alumnosForm,
            [e.target.name]: e.target.value
        })
    }
    //editando promedios
    //const [editPromedios, setEditPromedios] = useState([]);
    //enviando datos a la base
    const handleSubmit = (e) => {
        e.preventDefault();
        var prom = (parseFloat(alumnosForm.nota1) + parseFloat(alumnosForm.nota2) + parseFloat(alumnosForm.nota3) + parseFloat(alumnosForm.nota4) + parseFloat(alumnosForm.nota5)) / 5;
        alumnosForm.promedio = prom;
        //validando si el alumno aprobo, reprobo o es regular
        if (prom >= 7) {
            alumnosForm.resultado = "Aprobado"
        } else if (prom >= 4 && prom < 7) {
            alumnosForm.resultado = "Regular"
        } else if (prom < 4) {
            alumnosForm.resultado = "Reprobado"
        }
        if (idAlumno !== '') {
            db.collection('estudiantes').doc(idAlumno).set(alumnosForm);
            toast.info("Alumno registrado");
        } else {
            db.collection('estudiantes').add(alumnosForm);
            toast.success("Alumno registrado");
        }
        //seteando los valores del form a los iniciales
        setAlumnosForm(initialForm)
        handleRegistros();
        //validando que la nota es la mayor que todas
        var i = 0;
        alumnos.forEach(function (data) {
            if (prom >= data.promedio) {
                i++;
            }
        })
       // console.log(i);
       // console.log(contador)
        //variable que tomara los promedios y les sumara 1
        let promedioEdit = 0;
        //comprobando que sea mayor que 8
        if (prom > 8 && i == contador) {
            //console.log("el promedio es mayor que 8")
            db.collection('estudiantes').where("promedio", "<", prom)
                .get()
                .then(function (result) {
                    result.forEach(function (doc) {
                        promedioEdit = doc.data().promedio + 1;
                        db.collection("estudiantes").doc(doc.id).set({
                            nombre: doc.data().nombre,
                            nota1: doc.data().nota1,
                            nota2: doc.data().nota2,
                            nota3: doc.data().nota3,
                            nota4: doc.data().nota4,
                            nota5: doc.data().nota5,
                            promedio: promedioEdit,
                            resultado: doc.data().resultado,

                        })
                    })
                })
        } else if (prom < 8 && i == contador) {
            db.collection('estudiantes').where("promedio", "<", prom)
                .get()
                .then(function (result) {
                    result.forEach(function (doc) {
                        promedioEdit = doc.data().promedio - 1;
                        db.collection("estudiantes").doc(doc.id).set({
                            nombre: doc.data().nombre,
                            nota1: doc.data().nota1,
                            nota2: doc.data().nota2,
                            nota3: doc.data().nota3,
                            nota4: doc.data().nota4,
                            nota5: doc.data().nota5,
                            promedio: promedioEdit,
                            resultado: doc.data().resultado,

                        })
                    })
                })
        }
    }
    //limpiando campos
    const handleClear = () => { setAlumnosForm(initialForm); }
    //editando 
    const [idAlumno, setIdAlumno] = useState('');
    const handleEdit = (e) => {
        e.preventDefault();
        const id = e.target.parentElement.parentElement.children[0].textContent;
        setIdAlumno(id);
        db.collection('estudiantes').doc(id).
            onSnapshot((respuesta) => {
                setAlumnosForm({ ...respuesta.data() })
            })
    }
    //eliminando un estudiante
    const handleDelete = (e) => {
        const id = e.target.parentElement.parentElement.children[0].textContent;
        if (window.confirm("Esta seguro de eliminar el estudiante")) {
            db.collection('estudiantes').doc(id).delete();
            toast.error("Registro eliminado");
        }
    }

    return (
        <div className="container py-5">
            <ToastContainer />
            <FormAlumnos
                contador={contador}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                alumnosForm={alumnosForm}
                handleClear={handleClear}
            />
            <Registros
                promedios={promedios}
                alumnos={alumnos}
                mayorPromedio={mayorPromedio}
                menorPromedio={menorPromedio}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                contador={contador}
            />
        </div>
    )
}
//exportando pagina de alumnos
export default PageAlumnos;