const headerModel = require('../models/headersModel');

exports.getHeaders = res => {
	headerModel.getHeaders().then(result=>{
		console.log("get headers controller :: ",result);
		for(let i of result){
			i.headers_Id = (i.Header_Tab_Display_Name).replace(/ /g,"_");
		}
		return res.send(result);
	}).catch(err => {
		console.error("get headers controller error :: ",err);
		return res.status(500).send('Something broke!');
	});
}