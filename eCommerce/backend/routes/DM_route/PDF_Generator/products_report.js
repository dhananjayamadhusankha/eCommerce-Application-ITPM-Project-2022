const express = require("express");
const router = express.Router();
const cors = require("cors");

router.use(cors());

const fs = require("fs");
const PDFDocument = require("./pdfkit-tables");

router.post("/generateproductreport", async function (req, res, next) {
    //load cuurent time
    var currentDate = new Date();

    var hours = currentDate.getHours();
    var minutes = currentDate.getMinutes();
    var seconds = currentDate.getSeconds();
    var date = currentDate.getDate();
    var month = currentDate.getMonth(); //Be careful! January is 0 not 1
    var year = currentDate.getFullYear();

    var datestamp =
    "DATE:- " +
        year +
        "-" +
        (month + 1) +
        "-" +
        date;

    var timestamp =
    "TIME:- " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;

    const productsReportRequest = req.body.products;
    console.log(productsReportRequest)

    var myDoc = new PDFDocument({ bufferPages: true });
    let buffers = [];
    myDoc.on("data", buffers.push.bind(buffers));
    myDoc.on("end", () => {
        let pdfData = Buffer.concat(buffers);

        res.writeHead(200, {
            "Content-Length": Buffer.byteLength(pdfData),
            "Content-Type": "application/pdf",
            "Content-disposition": `attachment;filename=Product_${datestamp}.pdf`,
        })
            .end(pdfData);
    });

    myDoc      
        .fillColor("#000")
        .fontSize(20)
        .text("Products Details", 110, 57)
        .fontSize(10)
        .text("SLIIT", 200, 50, { align: "right" })
        .text("Malabe", 200, 65, { align: "right" })
        .text("Sri Lanka", 200, 80, { align: "right" })
        .text(datestamp,200,95,{align: "right"})
        .text(timestamp,200,110,{align: "right"})
        .moveDown();

    // Create the table
    const table = {
        headers: ["Product Name","Topic", "Quantity", "Price","Availability","Product Category","Description"],
        rows: [],
    };

    for (const productsItem of productsReportRequest) {
        table.rows.push([
            productsItem.productName,
            productsItem.topic,
            productsItem.quantity,
            productsItem.description,
            productsItem.productCategory,
            productsItem.availability,
            productsItem.price,
        ]);
    }		
    
    var total=0;
    for (const productsItem of productsReportRequest) {
        total += productsItem.productPrice
    }	
    
    // Draw the table
    myDoc.fontSize(12).fillColor("#000")
    myDoc.moveDown().table(table, 15, 155, { width: 590 });

    myDoc.fontSize(12).fillColor("#000")
    myDoc.text(`Total Cost = ${total.toFixed(2)}`, 45, 100, { align: "left" } )

    myDoc.end();   

});

module.exports = router;