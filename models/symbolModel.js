const dbHandler = require('../dbHandler/database.js');
const detail_page_header = "b_stock_detail_pg_header";
const detail_page = "b_stock_detail_page";

exports.getSymbolData = symbol=>{
	let query = `SELECT * FROM ${detail_page_header}`;
	let query2 = `SELECT * FROM ${detail_page} WHERE Symbol='${symbol}'`;

	return Promise.all([
		dbHandler.getData(query),
		dbHandler.getData(query2)
	]);
}