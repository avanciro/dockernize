const request = require("request")
const { exec } = require('child_process')

var configs = {
    socket: true
}

init = (options) => {

    if ( options && options.socket ) {
        configs.socket = options.socket
    }

    /* 
    * We need to check if the docker is installed
    */
    let test = exec("pacman -Qi docker", function (error, stdout, stderr) {
        console.log("ERROR : " + error)
        console.log("STD-OUT : " + stdout)
        console.log("STD-ERROR : " + stderr)
    } )


    let images = {
        list() {
            console.log("we are here @ list")
        }
    }

    // EXPORT THINGS
    exports.images = images
}

// EXPORT INIT
exports.init = init