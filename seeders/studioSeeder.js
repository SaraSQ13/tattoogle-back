const mongoose = require("mongoose");
const Studio = require("../models/Studio");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error de conexión"));
db.once("open", () => {
  console.log("Conectado a la base de datos");
});

const studios = [
    {
        "studio_name": "DEMO TATTOO STUDIO",
        "adress": "Calle demo 1",
        "city": "Barcelona",
        "province": "Barcelona",
        "website": "",
        "instagram": "",
        "phone": 933333333,
        "email": "demotatto@demotattoo.com",
        "image": "",
        "style": "new school",
        "tattoer_name": [
          "DEMO",
          "PRUEBA"
        ]
      },
    {
        "studio_name": "123 TATTOO STUDIO",
        "adress": "Calle 123",
        "city": "Barcelona",
        "province": "Barcelona",
        "website": "",
        "instagram": "",
        "phone": 931111111,
        "email": "123@123.com",
        "image": "",
        "style": "new school",
        "tattoer_name": [
          "HOLA",
          "TATUADORA1"
        ]
      },
];

async function seedStudios() {
  try {
    await Studio.insertMany(studios);
    console.log("Datos agregados correctamente");
  } catch (err) {
    console.log(err);
  } finally {
    db.close();
  }
}

seedStudios();