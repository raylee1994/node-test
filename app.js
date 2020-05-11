var express = require("express");
var app = express();
var fs = require("fs");
var path = require("path");
var controller = path.resolve(__dirname, "controller")
var viewsArr = []

function readdirSync(mypath) {
    var paths = fs.readdirSync(mypath)
    paths.forEach(element => {
        var file = path.join(mypath, element)
        var info = fs.statSync(file)
        if(info.isDirectory()) {
            if(file.indexOf("view") > -1) {
                return
            }else {
                readdirSync(mypath+"/"+element)
            }
        }else {
            var routes = require(file)
            viewsArr.push(path.join(file, "..", 'view'))
            app.use(routes)
        }
    });
}
readdirSync(controller)
console.log(viewsArr)
app.set("view engine", "ejs")
app.set('views', viewsArr)

app.listen(8080, () => {
    console.log("listening at http://localhost:8080")
})


