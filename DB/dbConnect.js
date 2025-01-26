const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://mugdharj632:Suprio123@cluster0.eqrhb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected!"))
  .catch((err) => console.log("Connection Failed!!", err));