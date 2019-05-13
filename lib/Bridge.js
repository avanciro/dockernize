const request = require("request")


/*
* This is the commiunication bridge that helps
* child classes to make requests to docker API
* ednpoints. Each child class will extends this
* base class to make life easier.
*/
class Bridge {

    // CONSTRUCTOR
    constructor(params) {
        if ( params.socket ) {
            this.socket = params.socket
        }
    }


    /*
    * This is the method that execute all the requets
    * that made via the child classes. This bridge
    * make things simple to handle
    */
    call(req, callback) {
        request('http://unix:' + this.socket + ':/' + req.node, {
            method: req.method,
            headers: { 'Content-Type': 'application/json', host: 'http' }
        }, (error, response) => {
            callback(error, response)
        })
    }
}

exports.Bridge = Bridge