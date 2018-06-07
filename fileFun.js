const path = require('path')
const fs = require('fs')

function updateJSON(obj, file, callback) {
  writeFile(JSON.stringify(obj, null, 2), file, callback)
}

function readJSON(file, callback){
  readFile(file, data => {
    let obj = JSON.parse(data)
    callback(obj)
  })
}

function readDir (dir, callback) {
  const dirpath = path.join(__dirname, dir)
  fs.readdir(dirpath, 'utf-8', function (err, data) {
    if (err) throw err
    callback(data)
  })
}

function readFile (file, callback) {
  const filepath = path.join(__dirname, file)
  fs.readFile(filepath, 'utf-8', function(err, data) {
    if (err) throw err
    callback(data)
  })
}

function writeFile (data, file, callback) {
  const filepath = path.join(__dirname, file)
  fs.writeFile(filepath, data, 'utf-8', function(err) {
    if (err) throw err
    callback()
  })
}

module.exports = {
  writeFile,
  readFile,
  updateJSON,
  readDir,
  readJSON
}
