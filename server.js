const express = require("express");
const PORT = proess.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
    res.send(
     `<h1>99 Bottles of beer on the wall</h1>   
     <a href ='/98'>Take one down and pass it around</a>`
     );
});

app.get("/:number_of_bottles", (req, res) => {
    const numberOfBottles = req.params.number_of_bottles;
    if (numberOfBottles > 0) {
        res.send(

        )
    }
})


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});
