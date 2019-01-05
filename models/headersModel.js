const dbHandler = require('../dbHandler/database.js');
const headers_table = "b_stock_header_links";

exports.getHeaders = () => {
	let query = `SELECT * FROM ${headers_table}`;
	return dbHandler.getData(query);
}