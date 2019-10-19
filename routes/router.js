const express = require('express');
const path = require('path');
const router = express.Router();
const headers = require('../controllers/headersController');
const mainTab = require('../controllers/mainTabController');
const allTabs = require('../controllers/allTabsController');
const symbolController = require('../controllers/symbolController');

router.get('/',(req,res)=>res.render('home.html'));
router.get('/headers',(req,res) => headers.getHeaders(res));
router.get('/header/:headerId',(req,res)=>res.render('skeleton.html',{id:req.params.headerId}));
router.get('/favicon.ico', (req, res) => res.status(204));
router.get('/mainTab',(req,res) => mainTab.mainTab(res));
router.get('/symbol/:symbol',symbolController.getSymbolData);
router.get('/:tabs',allTabs.getAllTabs);
module.exports = router