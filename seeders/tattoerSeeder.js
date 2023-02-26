const mongoose = require("mongoose");
const Tattoer = require("../models/Tattoer");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error de conexión"));
db.once("open", () => {
  console.log("Conectado a la base de datos");
});

const tattoers = [
  {
    tattoer_name: "PRUEBA TATTOO",
    email: "pruebatattoo@gmail.com",
    phone: 123456789,
    city: "Barcelona",
    province: "Barcelona",
    instagram: "",
    image: "",
    style: ["Tradicional"],
    studio_name: "PRUEBA ESTUDIO TATTOO",
  },
  {
    tattoer_name: "DEMO TATTO",
    email: "demotattoo@gmail.com",
    phone: 123456789,
    city: "Badalona",
    province: "Barcelona",
    instagram: "",
    image: "",
    style: ["Black & Grey"],
    studio_name: "DEMO ESTUDIO TATTOO",
  },
];

async function seedTattoers() {
  try {
    await Tattoer.insertMany(tattoers);
    console.log("Datos agregados correctamente");
  } catch (err) {
    console.log(err);
  } finally {
    db.close();
  }
}

seedTattoers();
