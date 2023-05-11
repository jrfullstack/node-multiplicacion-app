const colors = require("colors");
const { crearArchivo } = require("./helpers/multiplicar");

const argv = require("./config/yargs");

console.clear();

// console.log(argv);

// console.log('base: yargs', argv.b, 'listar', argv.l);

// const base = 1;

crearArchivo(argv.b, argv.l, argv.h)
    .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
    .catch((err) => console.log(err));
