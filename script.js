const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("VendorAI API Running 🚀");
});

app.get("/vendors", (req, res) => {
    res.json([
        {
            name: "ABC Suppliers",
            email: "abc@gmail.com",
            score: 92
        }
    ]);
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});

async function loadVendorsFromBackend(){

    try{

        const response =
        await fetch(
            "http://localhost:5000/vendors"
        );

        const data =
        await response.json();

        console.log(data);

    }

    catch(error){

        console.log(error);
    }
}

loadVendorsFromBackend();

async function loadVendorsFromBackend(){

    const response =
    await fetch("http://localhost:5000/vendors");

    const data =
    await response.json();

    console.log(data);
}

loadVendorsFromBackend();