const dbHandler = require('../dbHandler/database.js');
const headers_table = "b_stock_header_links";
const headers_tab_display_flag = "Header_Tab_Display_Flag";

exports.getHeaders = () => {
	let query = `SELECT * FROM ${headers_table} WHERE ${headers_tab_display_flag} = 1`;
	return dbHandler.getData(query);
}