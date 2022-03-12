const router = require('express').Router();
const noteRoutes = require('../apiRoutes/noteRoutes')

router.use(notesRoutes);

module.exports = router;