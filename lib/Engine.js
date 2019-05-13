const { Bridge } = require("./Bridge")


class Engine extends Bridge {

    version() {
        return new Promise((resolve, reject) => {
            this.call({ node: '/version', method: 'GET' }, (err, res) => {
                resolve(res)
            })
        })
    }

}


exports.Engine = Engine