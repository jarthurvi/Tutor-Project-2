const router = require('express').Router();
const {} = require('../../models');
const apiRoutes = require('./api');
const homeRoutes = require('./api/homeRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
