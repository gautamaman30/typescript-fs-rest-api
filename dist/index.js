"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var fs_1 = __importDefault(require("fs"));
var app = express_1.default();
app.use(express_1.default.json());
app.get('/', function (req, res) {
    fs_1.default.readFile('./temp.txt', function (err, data) {
        if (err)
            console.log(err);
        res.send(data);
    });
});
app.post('/', function (req, res) {
    var data = req.body;
    fs_1.default.writeFile('./temp.txt', data.text, function () {
        console.log(data.text);
    });
    res.send("File created and added text");
});
app.delete('/', function (req, res) {
    fs_1.default.unlink('./temp.txt', function () { return console.log("file deleted"); });
    res.send("File deleted successfully");
});
app.put('/', function (req, res) {
    var data = req.body;
    fs_1.default.appendFile('./temp.txt', data.text, function () {
        console.log("File updated");
    });
    res.send("File updated");
});
app.listen(3000, function () { return console.log("Server is running at localhost"); });
