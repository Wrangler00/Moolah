var mysql = require('promise-mysql');
var connect;

const Main_Tab_Num = "Main_Tab_Num";
const Sec_Tab_Num = "Sec_Tab_Num";
const Main_Tab_Display_Name = "Main_Tab_Display_Name";
const Sec_Tab_Display_Name = "Sec_Tab_Display_Name";
const Third_Tab_Display = "Third_Tab_Display";
const main_tab_table = "b_stock_main_tab";
const second_tab_table = "b_stock_second_tab";
const third_tab_table = "b_stock_third_tab";
const headers_table = "b_stock_header_links";

mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'moolah'
}).then(conn=>{
	connect = conn;
	console.log("Connection successful to database");
}).catch(err=>{
	throw err;
});

exports.getData = query => {
	return connect.query(query);
}
// exports.getHeaders = () => {
// 	return connect.query(`SELECT * FROM ${headers_table}`);
// }

// exports.getFirstTab = () => {
// 	return connect.query(`SELECT ${Main_Tab_Display_Name} FROM ${main_tab_table}`);
// }

// exports.getSecondTab = option => {
// 	option = option || 1;
// 	return connect.query(`SELECT ${Sec_Tab_Display_Name} FROM ${second_tab_table} WHERE ${Main_Tab_Num} = ${option}`);
// }

// exports.getThirdTab = (option1,option2) => {
// 	option1 = option1 || 1;
// 	option2 = option2 || 1;
// 	return connect.query(`SELECT ${Third_Tab_Display} FROM ${third_tab_table} WHERE (${Main_Tab_Num} = ${option1} AND ${Sec_Tab_Num} = ${option2})`);
// }


