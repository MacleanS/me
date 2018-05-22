const express = require('express');
const router = express.Router();
const RapidAPI = new require('rapidapi-connect');
const rapid = new RapidAPI('hearthstone-smaclean_5b044812e4b09d99505e1522', '448862f1-5cc2-44ce-a713-1723244d5e38');
const unirest = require('unirest');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

/* GET api listing. */
router.get('/class/mage', (req, res) => {
  unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/Mage")
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

router.get('/class/rogue', (req, res) => {
  unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/Rogue")
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

router.get('/class/shaman', (req, res) => {
  unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/Shaman")
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

router.get('/class/warrior', (req, res) => {
  unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/Warrior")
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

router.get('/class/druid', (req, res) => {
  unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards/classes/Druid")
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

module.exports = router;