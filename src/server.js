const express = require("express")
const server = express()


server.use(express.static("public"))


server.get("/", function(req, res){
    res.sendFile(__dirname + "/views/home.html")
})

server.listen(3000)



