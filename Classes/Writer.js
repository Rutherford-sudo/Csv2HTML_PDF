const fs = require("fs");
const util = require("util");

class Writer{
    constructor(){
        this.writer = util.promisify(fs.writeFile);
    }

    async Write(filename, data){
        try {
            await this.writer(filename, data);
            return true // Ok!
        } catch (error) {
            return false // Failed!
        }
    }
}

module.exports = Writer;