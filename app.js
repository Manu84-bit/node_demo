//npm init is a command to create a node project. It creates a package.json to
//store info about the project, like the modules it uses (to locally install new modules, use npm i package_name).
//In this case the lodash package was installed

//npm i nodemon -D installs nodemon as a Devdependency, just for development.

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
