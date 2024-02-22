const express = require('express')
const app = express()


app.set("view engine", "ejs")


app.get("/", function(req, res) {
    const items = [
        {
            title: "D",
            message: "Alguma coisa D",
        },
        {
            title: "E",
            message: "Alguma coisa E",
        },
        {
            title: "M",
            message: "Alguma coisa M",
        },
        {
            title: "A",
            message: "Alguma coisa A",
        },
        {
            title: "I",
            message: "Alguma coisa I",
        },
        {
            title: "S",
            message: "Alguma coisa S",
        }
    ]

    const subtitle = "Uma linguagem de modelagem para criação de página HTML"

    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle
    })
})

app.get("/sobre", function(req, res){
    res.render('pages/about')
})


app.listen(8080)
console.log("Servidor ativo")
