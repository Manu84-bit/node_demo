//GLOBALS : there is no window object in node, cause there is no browser.

//__dirname : path to current directory
//__filename: file name
//require: function to use modules
//module: info about current module
//process: info about env where the program is executed


setInterval(()=>{
    console.log("Function runs again in an interval define as second argument")}, 2000)