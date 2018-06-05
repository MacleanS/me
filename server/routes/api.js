const express = require('express');
const router = express.Router();
const RapidAPI = new require('rapidapi-connect');
const rapid = new RapidAPI('hearthstone-smaclean_5b044812e4b09d99505e1522', '448862f1-5cc2-44ce-a713-1723244d5e38');
const unirest = require('unirest');
const HS_Url = "https://omgvamp-hearthstone-v1.p.mashape.com"
// const nodemailer = require('nodemailer');

// for building URL query from request params
serialise = function(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

// can't get this to work just yet

// router.post('/sendEmail', function(req, res, next) {

//   let response;

//   nodemailer.createTestAccount((err, account) => {
//     if (err) {
//         console.error('Failed to create a testing account');
//         console.error(err);
//         return process.exit(1);
//     }

//     console.log('Credentials obtained, sending message...');

//     // NB! Store the account object values somewhere if you want
//     // to re-use the same account for future mail deliveries

//     // Create a SMTP transporter object
//     let transporter = nodemailer.createTransport(
//         {
//             host: account.smtp.host,
//             port: account.smtp.port,
//             secure: account.smtp.secure,
//             auth: {
//                 user: account.user,
//                 pass: account.pass
//             },
//             logger: false,
//             debug: false // include SMTP traffic in the logs
//         },
//         {
//             // default message fields

//             // sender info
//             from: 's.maclean1988@gmail.com',
//             headers: {
//                 'X-Laziness-level': 1000 // just an example header, no need to use this
//             }
//         }
//     );

//     // Message object
//     let message = {
//         // Comma separated list of recipients
//         to: 's.maclean1988@gmail.com',

//         // Subject of the message
//         subject: 'Nodemailer is unicode friendly ✔',

//         // plaintext body
//         text: 'Hello to myself!',

//         // HTML body
//         html:
//             '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
//             '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>',
//     };

//     transporter.sendMail(message, (error, info) => {
//         if (error) {
//             console.log('Error occurred');
//             console.log(error.message);

//             response = error.message;

//             return process.exit(1);
//         }

//         console.log('Message sent successfully!');
//         console.log(nodemailer.getTestMessageUrl(info));

//         response = nodemailer.getTestMessageUrl(info);
//         // only needed when using pooled connections
//         transporter.close();
//     });
//   });

//   res.send(response);
// })
/* GET api listing. */
router.get('/', (req, res) => {
  // res.send('hello');
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