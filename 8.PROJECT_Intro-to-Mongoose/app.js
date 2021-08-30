const mongoose = require("mongoose");

//ESTABLISH CONNECTION and CREATE A DB - fruitsDB
//What if I want to create another DB
mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//CREATE SCHEMA FOR A COLLECTION - Fruit
const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

//CREATE SCHEMA FOR A COLLECTION - dryFruit
const dryFruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String,
});

//CREATE COLLECTION(Fruit)
// Pass only singular name of the collection as mongoose automatically converts it into Plural
const Fruit = mongoose.model("Fruit", fruitSchema);

//CREATE COLLECTION(dryFruit)
const DryFruit = mongoose.model("dryFruit", dryFruitSchema);

//CREATE DOCUMENT into Fruit Collection
const fruit = new Fruit({
  name: "Apple",
  rating: 4.0,
  review: "Good Fruit!",
});

//CREATE DOCUMENT into dry Collection
const dryFruit = new DryFruit({
  name: "Almond",
  rating: 5.0,
  review: "Wonderful Fruit!",
});

// fruit.save();
// dryFruit.save();

//INSERTING MULTIPLE DOCUMENTS
const kiwi = new Fruit({
  name: "Kiwi",
  rating: 4.5,
  review: "Good for Health!",
});

const orange = new Fruit({
  name: "Orange",
  rating: 4.5,
  review: "Good for Health!",
});

const banana = new Fruit({
  name: "Banana",
  rating: 4.5,
  review: "Good for Health!",
});

// Fruit.insertMany([kiwi, orange, banana], (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the documents to the DB");
//   }
// });

////////////////////////// READING FROM THE DB
// Remember we've installed mongoose@5.13.8
Fruit.find((err, fruits) => {
  if (err) {
    console.log(err);
  } else {
    mongoose.connection.close();
    fruits.forEach((fruit) => {
      console.log(fruit.name);
    });
  }
});

////////////////////////// DATA VALIDATION
const vehicleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [
      true,
      "\n***Vehicle name is Required!!! Please provide one!!!***\n",
    ],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Vehicle = mongoose.model("vehicle", vehicleSchema);

const BMW = new Vehicle({
  rating: 23,
  review: "It's an extraordinary Car!",
});

BMW.save();
