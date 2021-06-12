const express = require('express')
const {searchController} = require('../controllers')

const router = express.Router()

router.get('/getAllTour', searchController.getAllTour)
router.get('/search', searchController.filterTour)

module.exports = router