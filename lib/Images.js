const { Bridge } = require("./Bridge")

class Images extends Bridge {

    list() {
        return new Promise((resolve, reject) => {
            this.call({ node: '/images/json', method: 'GET' }, (err, res) => {
                resolve(res)
            })
        })
    }

}

exports.Images = Images