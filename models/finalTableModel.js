const dbHandler = require('../dbHandler/database.js');
const finalTableTitles = "b_stock_third_title_defs";
const mainTabNum = "Main_Tab_Num";
const secondTabNum = "Sec_Tab_Num";

exports.getFinalTable = (option1 ,option2 ,option3) => {
	option3 = option3.toLowerCase();
	let query1 = `SELECT * FROM ${finalTableTitles} WHERE (${mainTabNum} = ${option1} AND ${secondTabNum} = ${option2})`;
	let query2 = `SELECT * FROM ${option3}`;

	return Promise.all([
		dbHandler.getData(query1),
		dbHandler.getData(query2)
	]);
}