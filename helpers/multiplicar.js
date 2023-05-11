const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 4, listar = false, hasta = 10) => {
    

    try {

        let salida, consola = "";

        for (let index = 1; index <= hasta; index++) {
            let resultado = index * base;
            // salida para la creacion del archivo sin colores
            salida += `${base} x ${index} = ${resultado}\n`;
            // consola para que se muestre en consola aplicando los color
            consola += `${base} ${"x".blue} ${index} ${"=".blue} ${resultado}\n`;
        }

        if(listar){
            console.log("========================".green);
            console.log(`   Tabla del: ${base}   `.blue);
            console.log("========================".green);
            

            console.log(salida);
        }
        

        // metodo 1
        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if(err) throw err;
        //     console.log(`tabla-${base} fue creada`);
        // })

        // metodo 2
        // para atrapar el error necesitariamos un try catch
        // fs.writeFileSync(`tabla-${base}.txt`, salida);
        // console.log(`La tabla del ${base} fue creada`);

        
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch (error) {
        throw(error)
    }
    
};

module.exports = {
    crearArchivo,
};
