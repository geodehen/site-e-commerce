var express = require('express');
var router = express.Router();

/* GET home page. */
var dataBike = [
  {model: 'BIK045', url:'./images/bike-1.jpg', price: 679 }, 
  {model: 'ZOOK07', url:'./images/bike-2.jpg', price: 999 },
  {model: 'TITANS', url:'./images/bike-3.jpg', price: 799 }, 
  {model: 'CEWO', url:'./images/bike-4.jpg', price: 1300 },
  {model: 'AMIG39', url:'./images/bike-5.jpg', price: 479 }, 
  {model: 'LIK099', url:'./images/bike-6.jpg', price: 869 }

];


router.get('/', function(req, res, next) {
  res.render('index', {dataBike: dataBike});
});

var dataCardBike = [
  {model: 'BIK045', url:'./images/bike-1.jpg', price: 679 , quantity: 1 }, 
  {model: 'ZOOK07', url:'./images/bike-2.jpg', price: 999, quantity: 1 },
  {model: 'TITANS', url:'./images/bike-3.jpg', price: 799, quantity: 1  }, 
  {model: 'CEWO', url:'./images/bike-4.jpg', price: 1300, quantity: 1 },
  {model: 'AMIG39', url:'./images/bike-5.jpg', price: 479, quantity: 1 }, 
  {model: 'LIK099', url:'./images/bike-6.jpg', price: 869, quantity: 1 }

];

router.get('/shop', function(req, res, next) {
  res.render('shop', { dataCardBike: dataCardBike});
});



module.exports = router;
