const { Bridge } = require("./Bridge")


class Containers extends Bridge {

    list(query) {
        return new Promise((resolve, reject) => {
            this.call({ node: '/containers/json', method: 'GET', query: query }, (err, res) => {
                resolve(res)
            })
        })
    }

    create(params, query) {
        return new Promise((resolve, reject) => {
            this.call({ node: '/containers/create', method: 'POST', params: params, query: query }, (err, res) => {
                resolve(res)
            })
        })
    }

}


exports.Containers = Containers