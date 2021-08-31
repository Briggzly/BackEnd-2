const houses = require("../server/db.json");
let id = 4;

module.exports = {
  getHouses: (req, res) => {
    res.status(200).send(houses);
  },
  deleteHouse: (req, res) => {
      const { id } = req.params
      const index = houses.findIndex((house) => {
          return house.id === +id
      })
      if (index === -1) {
        res.status(400).send("Unable to find the house");
      } else {
        houses.splice(index, 1);
        res.status(200).send(houses);
      }
  },
  createHouse: (req, res) => {
    console.log(req.body);
    let { address, price, imageURL } = req.body;
    console.log(address, price, imageURL);

    const newHouse = { id, address, price, imageURL };

    houses.push(newHouse);
    id++;

    res.status(200).send(houses);
  },
  updateHouse: (req, res) => {
    let { type } = req.body;
    let { id } = req.params;

    const index = houses.findIndex((house) => {
      return house.id === +id;
    });

    if (type === "plus") {
      houses[index].price = +houses[index].price + 10000;
      res.status(200).send(houses);
    } else if (type === "minus" && houses[index].price > 70000) {
      houses[index].price = houses[index].price - 10000;
      res.status(200).send(houses);
    }
  },
};
