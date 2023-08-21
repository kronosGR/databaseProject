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

router.get('/:hotelId', async function (req, res, next) {
  const hotel = await hotelService.getHotelDetails(req.params.hotelId);
  res.render('hotelDetails', { hotel: hotel });
});

router.post('/:hotelId/rate', jsonParser, async function (req, res, next) {
  let value = req.body.Value;
  await hotelService.MakeARate(1, req.params.hotelId, value);
  res.end();
});
module.exports = router;
