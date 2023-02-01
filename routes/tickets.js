
const express = require('express');
const { ticket } = require('../controllers/ticketController');
const router = express.Router();

const {tickets, ticketDetail} = require('../controllers/ticketController');

/* /tickets */
router.get('/', ticket);
/*router.get('/ticketdetail/:id?', ticketDetail);*/

module.exports = router;
