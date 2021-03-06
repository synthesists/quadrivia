const express = require('express');

const root = require('./root.route');
const search = require('./search.route');
const questions = require('./questions.route');
const tracks = require('./tracks.route');
const playlists = require('./playlists.route');

const router = express.Router();

router.use('/', tracks);
router.use('/questions', questions);
router.use('/search', search);
router.use('/playlists', playlists);
router.use('/', root);

module.exports = router;
