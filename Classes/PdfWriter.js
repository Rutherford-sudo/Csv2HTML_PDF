var pdfconvert = require("html-pdf");

class PdfWriter{
    static WritePDF(filename, html){
        pdfconvert.create(html,{}).toFile(filename, (err) => {});
    }
}

module.exports = PdfWriter;