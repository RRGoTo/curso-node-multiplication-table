const argv = require("yargs").option("b", {
    alias: "base",
    demandOption: true,
    describe: "Numero para hacer la tabla de multiplicar",
    type: "number",
  }).option("l", {
      alias: "listar",
      demandOption: false,
      describe: "Indica si se mostrará la lista",
      type: "boolean",
      default: false
    }).option("h", {
        alias: "hasta",
        describe: "Numero hasta el cual se hara la multiplicacion",
        type: "number",
        default: 10
      })
  .check((argv, options)=>{
      if (isNaN(argv.b)) {
          throw 'La base debe ser un numero'
      }
      return true;
  })
  .argv;

  module.exports = argv;