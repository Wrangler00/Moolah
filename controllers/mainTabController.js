const mainTabModel = require('../models/firstTabModel');

exports.mainTab = res => {
	mainTabModel.getFirstTab().then(response => {
		res.send(response);
	}).catch(err => {
		res.status(500).send("Something Broke!");
	});
}