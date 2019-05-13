const { Bridge } = require("./Bridge")


class Engine extends Bridge {

    version(callback) {
        this.call({ node: 'version', method: 'GET' }, (e, res) => {
            callback(e, res.body)
        })
    }

}


exports.Engine = Engine