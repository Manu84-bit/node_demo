//modules
const names = require("./4-names");
const sayHi = require("./5_utils");
const data = require("./6-alternative-flavor");

//Destructuring the object
const { manu, alejo } = names;

sayHi(manu);
sayHi(alejo);

require("./7-mind-granade");
// console.log(data);
