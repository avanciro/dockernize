const { Bridge } = require("./Bridge")

class Images extends Bridge {

    list() {
        this.call({ node: 'images/json', method: 'GET' }, (e, req) => {
            console.log(req.body)
        })
    }

}

exports.Images = Images