const express = require('express');
const router = express.Router();
const dbHandler = require('../dbHandler/database.js');

const firstTab = () => {
	return dbHandler.getFirstTab().then((result)=>{
		let mappedArr = result.map(item=>item.Main_Tab_Display_Name);
		return Promise.resolve(mappedArr);
	}).catch(err=>{throw err});
};

const secondTab = option => {
	option = parseInt(option)+1;
	return dbHandler.getSecondTab(option).then((result)=>{
		let mappedArr = result.map(item=>item.Sec_Tab_Display_Name);
		return Promise.resolve(mappedArr);
	}).catch(err=>{throw err});
};

const thirdTab = (option1,option2) => {
	option1 = parseInt(option1)+1;
	option2 = parseInt(option2)+1;

	return dbHandler.getThirdTab(option1,option2).then((result)=>{
		let mappedArr = result.map(item=>item.Third_Tab_Display);
		return Promise.resolve(mappedArr);
	}).catch(err=>{throw err});
};

router.get('/',(req,res)=>{
	Promise.all([
		firstTab(),
		secondTab(),
		thirdTab()
	]).then(result=>{
		console.log("Result for home page :: ",result);
		let returnJson = {
			"firstTab" : result[0],
			"secondTab": result[1],
			"thirdTab": result[2] 
		}
		res.render('home.html',returnJson);
	});
})

router.get('/:tabs',(req,res) => {
	let tabs = req.params.tabs.split('-');
	console.log("tabs :: ",tabs);
	let allTabs = [firstTab(),secondTab(tabs[0])];
	if(tabs.length>1) allTabs.push(thirdTab(tabs[0],tabs[1]));

	Promise.all(allTabs).then(result=>{
		console.log("Result for home page tabs path :: ",result);
		let returnJson = {
			"firstTab" : result[0],
			"secondTab": result[1],
			"thirdTab": result[2] 
		}
		res.render('home.html',returnJson);
	})
});

module.exports = router;