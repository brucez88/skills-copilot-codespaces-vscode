// Create web server  express
// Created: 06/11/2020
// Last Modified: 06/11/2020

const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

// Routes
router.post('/new', auth, multer, commentsCtrl.createComment);
router.get('/all', auth, commentsCtrl.getAllComments);
router.get('/:id', auth, commentsCtrl.getOneComment);
router.put('/:id', auth, multer, commentsCtrl.modifyComment);
router.delete('/:id', auth, commentsCtrl.deleteComment);

module.exports = router;