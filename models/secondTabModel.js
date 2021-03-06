const dbHandler = require('../dbHandler/database.js');
const Sec_Tab_Display_Name = "Sec_Tab_Display_Name";
const second_tab_table = "b_stock_second_tab";
const Main_Tab_Num = "Main_Tab_Num";
const sec_tab_display_flag = "Sec_Tab_Display_Flag";

exports.getSecondTab = option => {
	let query = `SELECT * FROM ${second_tab_table} WHERE (${Main_Tab_Num}=${option} AND ${sec_tab_display_flag}=1)`;
	return dbHandler.getData(query);
}