const dbHandler = require('../dbHandler/database.js');
const Third_Tab_Display = "Third_Tab_Display";
const third_tab_table = "b_stock_third_tab";
const Main_Tab_Num = "Main_Tab_Num";
const Sec_Tab_Num = "Sec_Tab_Num";
const third_tab_display_flag = "Third_Tab_Display_Flag";

exports.getThirdTab = (option1,option2) => {
	let query = `SELECT * FROM ${third_tab_table} WHERE (${Main_Tab_Num} = ${option1} AND ${Sec_Tab_Num} = ${option2} AND ${third_tab_display_flag}=1)`;
	return dbHandler.getData(query);
}