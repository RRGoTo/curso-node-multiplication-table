const fs = require("fs");
var colors = require('colors');

const createFile = async (base, listar, hasta) => {
  try {
    let salida = "";

    for (let i = 1; i <= hasta; i++) {
      if (i < hasta) {
        salida += `${base} * ${i} = ${base * i}\n`;
      } else {
        salida += `${base} * ${i} = ${base * i}`;
      }
    }

    fs.writeFileSync(`./output/tabla-${base}.txt`, salida);

    if (listar) {
      console.log("===========================".green);
      console.log(`       Tabla del: `.green, colors.blue(base) );
      console.log("===========================".green);
      console.log(salida);
    }

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createFile,
};
