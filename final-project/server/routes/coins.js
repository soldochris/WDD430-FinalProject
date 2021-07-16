var express = require("express");
var router = express.Router();

const sequenceGenerator = require("./sequenceGenerator");
const Coin = require("../models/coin");

router.get("/", (req, res, next) => {
  Coin.find()
    .then((coins) => {
      res.status(200).json({
        message: "Coins fetched successfully",
        coins: coins,
      });
    })
    .catch((error) => {
      res.status(200).json({
        message: "An error occurred",
        error: error,
      });
    });
});

router.post("/", (req, res, next) => {
  const maxCoinId = sequenceGenerator.nextId("coins");
  const coin = new Coin({
    id: req.body.id,
    symbol: req.body.symbol,
    name: req.body.name,
    rank: req.body.rank,
    price_usd: req.body.price_usd,
    imageUrl: req.body.imageUrl,
  });


  coin
    .save()
    .then((createdCoin) => {
      res.status(201).json({
        message: "Coin added successfully",
        coin: createdCoin,
      });
    })
    .catch((error) => {
      returnError(res, error);
    });
});

router.put("/:_id", (req, res, next) => {
  Coin.findOne({ _id: req.params._id })
    .then((coin) => {
      coin.name = req.body.name;
      coin.symbol = req.body.symbol;
      coin.rank = req.body.rank;
      coin.imageUrl = req.body.imageUrl;
      coin.price_usd= req.body.price_usd;

      Coin.updateOne({ _id: req.params._id }, coin)
        .then((result) => {
          res.status(204).json({
            message: "Coin updated successfully",
          });
        })
        .catch((error) => {
          returnError(res, error);
        });
    })
    .catch((error) => {
      res.status(500).json({
        message: "Coin not found.",
        error: { coin: "Contact not found" },
      });
    });
});


router.delete("/:_id", (req, res, next) => {
  Coin.findOne({ _id: req.params._id })
    .then((coin) => {
      Coin.deleteOne({ _id: req.params._id })
        .then((result) => {
          res.status(204).json({ message: "Coin deleted successfully" });
        })
        .catch((error) => {
          returnError(res, error);
        });
    })
    .catch((error) => {
      returnError(res, error);
    });
});


module.exports = router;
