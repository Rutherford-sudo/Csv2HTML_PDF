class Processor {
    static Process(data){
        var lines = data.split("\r\n");
        var rows = [];
        lines.forEach(row => {
            var arr = row.split(",")
            rows.push(arr)
        });
        return rows;
    }
}

module.exports = Processor