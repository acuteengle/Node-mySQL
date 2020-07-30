require("dotenv").config(); // https://medium.com/@thejasonfile/using-dotenv-package-to-create-environment-variables-33da4ac4ea8f

const express = require("express");
const app = express();

const pokemon = require("./routes/pokemon");
const pokemon_type = require("./routes/pokemon_type");

app.use(express.json());

app.use("/api/pokemon", pokemon);
app.use("/api/pokemon_type", pokemon_type);

const port = process.env.PORT || "3000";

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
