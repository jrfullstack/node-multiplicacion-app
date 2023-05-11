const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");



const argv = yargs(hideBin(process.argv))
    .option("b", {
        alias: "base",
        type: "number",
        demandOption: true,
        describe: "Es la base de la tabla a multiplicar",
    })
    .option("l", {
        alias: "listar",
        type: "boolean",
        // demandOption: true,
        default: false,
        describe: "Muestra la tabla en consola",
    })
    .option("h", {
        alias: "hasta",
        type: "number",
        // demandOption: true,
        default: 10,
        describe: "Hasta que numero se multiplicara",
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw "La base tiene que ser un numero";
        }
        return true;
    }).argv;

module.exports = argv;
