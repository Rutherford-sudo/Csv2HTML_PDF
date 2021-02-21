var Reader = require("./Classes/Reader");
var Processor = require("./Classes/Processor");
var Table = require("./Classes/Table")
var HTMLParser = require("./Classes/HTMLParser");
var Writer = require("./Classes/Writer");
var PDFWriter = require("./Classes/PdfWriter");

var reader = new Reader();
var writer = new Writer();


async function main() {
    var csv_path = process.argv[2];
    var data = await reader.Read(csv_path);
    var data_splitted = Processor.Process(data);
    var users = new Table(data_splitted);
    var html = await HTMLParser.Parse(users);
    var filename = Date.now();

    writer.Write(__dirname + "/FinalFiles/" + filename + ".html",html);
    PDFWriter.WritePDF(__dirname + "/FinalFiles/" + filename + ".pdf", html);

}

main();