'use strict';
const express = require('express'),
    router = express.Router();
const AuthController = require( '../../controllers/AuthCotroller' );

router.get('/', (req, res) => {
    res.send('Welcome to the auth')
});

router.get('/allAuthor', AuthController.getAuthor);
<<<<<<< Updated upstream
router.get('/:id/getTimeRead', AuthController.getTimeRead);
=======
router.get('/:id/allReadBooks', AuthController.getreadBooks);

>>>>>>> Stashed changes
module.exports = router;