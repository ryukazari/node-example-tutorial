const fs = require('fs');

let listadoPorhacer = [];


const guardarDB = () => {
    let data = JSON.stringify(listadoPorhacer);
    fs.writeFile('./db/data.json', data, function(err) {
        if (err) throw new Error('La tarea no se pudo guardar');
    });
}

const cargarDB = () => {
    try {
        listadoPorhacer = require('../db/data.json');
    } catch (error) {
        listadoPorhacer = [];
    }
}

const getListado = () => {
    cargarDB();
    return listadoPorhacer;
}

const crear = (descripcion) => {
    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorhacer.push(porHacer);
    guardarDB();
    return porHacer
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorhacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    //let index = listadoPorhacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorhacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorhacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });
    try {
        listadoPorhacer.splice(index, 1);
        guardarDB();
        return true;
    } catch (error) {
        return false;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}