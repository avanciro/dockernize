const { Engine } = require("./Engine")
const { Images } = require("./Images")
const { Containers } = require("./Containers")

class Dockernize {
    constructor(params) {
        this.engine = new Engine(params)
        this.images = new Images(params)
        this.containers = new Containers(params)
    }
}

exports.Dockernize = Dockernize