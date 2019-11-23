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
    host: "localhost",
    //port: "3306",
    user: 'moolah',//'root',
    password: 'moolah@123',//'root',
    database: 'moolah'//'moolah'
}).then(conn=>{
	connect = conn;
	console.log("Connection successful to database");
}).catch(err=>{
	throw err;
});

exports.getData = query => {
	return connect.query(query);
}



