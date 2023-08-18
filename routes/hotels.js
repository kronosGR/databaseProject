const express = require('express');
const HotelService = require('../services/HotelServices');
const bodyParser = require('body-parser');

const router = express.Router();
const jsonParser = bodyParser.json();
const db = require('../models');

const hotelService = new HotelService(db);

router.get('/', async function (req, res, next) {
  const hotels = await hotelService.get();
  res.render('hotels', { title: 'Hotels', hotels: hotels });
});

router.post('/', jsonParser, async function (req, res, next) {
  let Name = req.body.Name;
  let Location = req.body.Location;
  await hotelService.create(Name, Location);
  res.end();
});

router.delete('/', jsonParser, async function (req, res, next) {
  let id = req.body.id;
  await hotelService.deleteHotel(id);
  res.end();
});

module.exports = router;
