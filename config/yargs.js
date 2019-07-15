const argv = require('yargs')

.command('crear', 'Crea una tarea por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualizar al estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer',
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'Marca como completado o pendiente la tarea'
        }
    })
    .command('borrar', 'Se borrará la tarea enviada por parámetros', {
        descripcion: {
            demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por borrar'
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}