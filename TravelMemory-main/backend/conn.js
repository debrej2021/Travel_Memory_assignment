const mongoose = require('mongoose')
const URL = process.env.MONGO_URI || "mongodb+srv://debkiitian:Octkingsus24@cluster0.fghwb.mongodb.net/myDatabase"

mongoose.connect(URL)
mongoose.Promise = global.Promise

const db = mongoose.connection
db.on('error', console.error.bind(console, 'DB ERROR: '))

module.exports = {db, mongoose}