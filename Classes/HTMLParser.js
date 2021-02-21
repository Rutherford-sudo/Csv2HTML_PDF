var ejs = require("ejs");
const { parse } = require("path");

class HTMLParser {
    static  async Parse(table){
        return await ejs.renderFile("./Views/table.ejs",{header: table.header, rows: table.rows})
    }
}

module.exports = HTMLParser;