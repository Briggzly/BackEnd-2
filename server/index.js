const express = require("express");
const cors = require("cors");
const controller = require("../server/controller");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/api/houses", controller.getHouses);
app.post("/api/houses", controller.createHouse);
app.put("/api/houses/:id", controller.updateHouse);
app.delete("/api/houses/:id", controller.deleteHouse);

SERVER_PORT = 4004;

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}`);
});
