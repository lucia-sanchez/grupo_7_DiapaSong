const { metrics } = require('../../controllers/apis/mainApiController');

const router  = require('express').Router();
/* /api */

router
  .get('/metrics',metrics)
   

module.exports = router;