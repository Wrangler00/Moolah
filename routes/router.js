const express = require('express');
const path = require('path');
const router = express.Router();
const headers = require('../controllers/headersController');
const mainTab = require('../controllers/mainTabController');
const allTabs = require('../controllers/allTabsController');

router.get('/',(req,res)=>res.render('home.html'));
router.get('/headers',(req,res) => headers.getHeaders(res));
router.get('/favicon.ico', (req, res) => res.status(204));
router.get('/mainTab',(req,res) => mainTab.mainTab(res));
router.get('/Disclaimer',(req,res)=>res.render('disclaimer.html') );
router.get('/:tabs',(req,res) => allTabs.getAllTabs(req,res));
module.exports = router