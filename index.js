const express = require("express"); 
const app = express();
const PORT = 8080;

app.use(express.json()) 

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "fuck",
    size: "ass",
  });
});

app.listen(PORT, () => console.log(`its alive on http://localhost:${PORT}`));
