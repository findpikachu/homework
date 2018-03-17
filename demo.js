#!/usr/bin/env node
var fs = require('fs')
var dirname = process.argv[2]
fs.mkdirSync(dirname)
process.chdir(dirname)
fs.mkdirSync("css")
fs.mkdirSync("js")
fs.writeFileSync("index.html","<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>\n")
fs.writeFileSync("css/style.css","h1{color: red;}\n")
fs.writeFileSync("js/main.js",'var string = "Hello World"\nalert(string)\n')
process.exit(0)