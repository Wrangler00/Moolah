const dbHandler = require('../dbHandler/database.js');
const Main_Tab_Display_Name = "Main_Tab_Display_Name";
const main_tab_table = "b_stock_main_tab";
const main_tab_display_flg = "Main_Tab_Display_Flag";

exports.getFirstTab = () => {
	let query = `SELECT * FROM ${main_tab_table} WHERE ${main_tab_display_flg} = 1`;
	return dbHandler.getData(query);
}