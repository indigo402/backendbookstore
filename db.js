const mongose = require("mongoose");

mongose.connect("mongodb://localhost:27017/db_buku");

const db = mongose.connection;

db.on("error", console.error.bind(console, "Koneksi database gagal.."));

db.once("open", () => {
    console.log("Koneksi databse berhasil!");
});