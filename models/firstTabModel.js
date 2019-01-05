const dbHandler = require('../dbHandler/database.js');
const Main_Tab_Display_Name = "Main_Tab_Display_Name";
const main_tab_table = "b_stock_main_tab";

exports.getFirstTab = () => {
	let query = `SELECT * FROM ${main_tab_table}`;
	return dbHandler.getData(query);
}