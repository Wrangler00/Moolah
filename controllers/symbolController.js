const symbolModel = require('../models/symbolModel');

exports.getSymbolData = (req,res) => {
	let symbol = req.params.symbol;
	symbolModel.getSymbolData(symbol).then(data=>{
		console.log("Symbol data :: ",data[1]);
		res.render('symbol.html',{
			headers:data[0][0],
			data:data[1]
		});
	}).catch(console.error);
}