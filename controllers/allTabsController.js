const secondTab = require('../models/secondTabModel');
const thirdTab = require('../models/thirdTabModel');
const finalTable = require('../models/finalTableModel');

exports.getAllTabs = (req,res) => {
	let tabs = req.params.tabs;
	console.log(req.params);
	console.log("raw tabs :: ",tabs);
	tabs = tabs.split('-');
	console.log("after tabs :: ",tabs);

	switch(tabs.length){
		case 1: 
			secondTab.getSecondTab(tabs[0]).then(result => {
				console.log("second tab :: ",result);
				res.send(result);
			}).catch(error => {
				console.error("all tabs error :: ",error);
				res.status(500).send('Something broke!');
			});			
			break;
		case 2:
			thirdTab.getThirdTab(tabs[0],tabs[1]).then(result => {
				console.log("third tab :: ",result);
				res.send(result);
			}).catch(error => {
				console.error("all tabs error :: ",error);
				res.status(500).send('Something broke!');
			}); 
			break;
		case 3: 
			finalTable.getFinalTable(tabs[0],tabs[1],tabs[2]).then(result => {
				console.log("final table result :: ",result);
				let obj = {};
				obj.titles = result[0][0];
				delete obj.titles["Main_Tab_Num"];
				delete obj.titles["Sec_Tab_Num"];

				obj.details = result[1]; 
				res.send(obj);
			}).catch(error => {
				console.error("all tabs error :: ",error);
				res.status(500).send('Something broke!');
			});
			break;
	}
}