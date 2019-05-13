const { Engine } = require("./Engine")
const { Images } = require("./Images")

class Dockernize {
    constructor(params) {
        this.engine = new Engine(params)
        this.images = new Images(params)
    }
}

exports.Dockernize = Dockernize