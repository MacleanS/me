const express = require('express');
const router = express.Router();
const RapidAPI = new require('rapidapi-connect');
const rapid = new RapidAPI('hearthstone-smaclean_5b044812e4b09d99505e1522', '448862f1-5cc2-44ce-a713-1723244d5e38');
const unirest = require('unirest');
const HS_Url = "https://omgvamp-hearthstone-v1.p.mashape.com"

// for building URL query from request params
serialise = function(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}
/* GET api listing. */
router.get('/', (req, res) => {
  res.send('hello');
});

router.get('/cardInfo', (req, res) => {
  unirest.get(HS_Url + "/info")
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

router.get('/card', (req, res) => {
  // serialise(req.query) returns the ?query=string&whater=something needed to return specific cards
  unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards?" + serialise(req.query))
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

// This really needs sorting out, not sure how to do it at the moment
router.get('/class/Mage', (req, res) => {
  unirest.get(HS_Url + "/cards/classes/Mage?" + serialise(req.query))
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

router.get('/class/Rogue', (req, res) => {
  unirest.get(HS_Url + "/cards/classes/Rogue?" + serialise(req.query))
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

router.get('/class/Shaman', (req, res) => {
  unirest.get(HS_Url + "/cards/classes/Shaman?" + serialise(req.query))
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

router.get('/class/Warrior', (req, res) => {
  unirest.get(HS_Url + "/cards/classes/Warrior?" + serialise(req.query))
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

router.get('/class/Druid', (req, res) => {
  unirest.get(HS_Url + "/cards/classes/Druid?" + serialise(req.query))
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

router.get('/class/Warlock', (req, res) => {
  unirest.get(HS_Url + "/cards/classes/Warlock?" + serialise(req.query))
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

router.get('/class/Priest', (req, res) => {
  unirest.get(HS_Url + "/cards/classes/Priest?" + serialise(req.query))
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

router.get('/class/Paladin', (req, res) => {
  unirest.get(HS_Url + "/cards/classes/Paladin?" + serialise(req.query))
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

router.get('/class/Hunter', (req, res) => {
  unirest.get(HS_Url + "/cards/classes/Hunter?" + serialise(req.query))
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

router.get('/class/Death Knight', (req, res) => {
  unirest.get(HS_Url + "/cards/classes/Death Knight?" + serialise(req.query))
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});
module.exports = router;