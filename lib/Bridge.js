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

        // PROPS
        let payload = {}
        let query

        // QUERY PARAMS
        if ( req.query !== undefined ) {
            query = Object.keys(req.query).map(key => key + '=' + req.query[key]).join('&')
            query = '?' + query
        } else {
            query = ""
        }

        if ( req.method === 'GET' ) {
            payload.method = req.method
            payload.headers = { 'Content-Type': 'application/json', host: 'http' }
        }
        
        if ( req.method === 'POST' ) {
            payload.method = req.method
            payload.headers = { 'Content-Type': 'application/json', host: 'http' }
            payload.body = JSON.stringify(req.params)
        }

        request('http://unix:' + this.socket + ':' + req.node + query, payload, (error, response) => {
            callback(error, response)
        })
    }
}

exports.Bridge = Bridge