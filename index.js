const express = require("express")
const cors = require("cors")
const { readPdfText } = require("pdf-text-reader")

const app = express()

app.use(cors({
    origin : "*"
}))


app.get("/mode",(req,res)=>{

    const {data}= req.query

    async function main() {
        const pdfText = await readPdfText({url: data});
        console.info(pdfText);
    }
    
    main();

    res.send("data")

    console.log(data)

})



app.listen(7000,()=>{
    console.log("port listned..!")
})