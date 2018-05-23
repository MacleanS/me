const express = require('express');
const router = express.Router();
const RapidAPI = new require('rapidapi-connect');
const rapid = new RapidAPI('hearthstone-smaclean_5b044812e4b09d99505e1522', '448862f1-5cc2-44ce-a713-1723244d5e38');
const unirest = require('unirest');
const HS_Url = "https://omgvamp-hearthstone-v1.p.mashape.com"

// for building URL query from request params
serialize = function(obj) {
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
  // serialize(req.query) returns the ?query=string&whater=something needed to return specific cards
  unirest.get("https://omgvamp-hearthstone-v1.p.mashape.com/cards?" + serialize(req.query))
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

// This really needs sorting out, not sure how to do it at the moment
router.get('/class/mage', (req, res) => {
  unirest.get(HS_Url + "/cards/classes/Mage")
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

router.get('/class/rogue', (req, res) => {
  unirest.get(HS_Url + "/cards/classes/Rogue")
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

router.get('/class/shaman', (req, res) => {
  unirest.get(HS_Url + "/cards/classes/Shaman")
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

router.get('/class/warrior', (req, res) => {
  unirest.get(HS_Url + "/cards/classes/Warrior")
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

router.get('/class/druid', (req, res) => {
  unirest.get(HS_Url + "/cards/classes/Druid")
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

router.get('/class/warlock', (req, res) => {
  unirest.get(HS_Url + "/cards/classes/Warlock")
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

router.get('/class/priest', (req, res) => {
  unirest.get(HS_Url + "/cards/classes/Priest")
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

router.get('/class/paladin', (req, res) => {
  unirest.get(HS_Url + "/cards/classes/Paladin")
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});

router.get('/class/hunter', (req, res) => {
  unirest.get(HS_Url + "/cards/classes/Hunter")
  .header("X-Mashape-Key", "S2HBEiFWT6mshMD8uFYFjcQhySIMp1Vam5PjsnwkgvOrmMmTvf")
  .header("X-Mashape-Host", "omgvamp-hearthstone-v1.p.mashape.com")
  .end(function (result) {
    res.send(result.body);
  });
});
module.exports = router;