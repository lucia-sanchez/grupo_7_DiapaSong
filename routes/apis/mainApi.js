const { metrics, getColors } = require('../../controllers/apis/mainApiController');


const router  = require('express').Router();
/* /api */

router
  .get('/metrics',metrics)
  .get('/colors',getColors)
   

module.exports = router;