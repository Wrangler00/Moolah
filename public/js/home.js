const secondTabFunction = id => {
	$("#secondTab").empty();
	id = (id.split('_'))[0];
	let url =  window.location.href + id;
	fetch(url).then(response=>response.json()).then(response=>{
		buildSecondTab(response);	 
    }).catch(err => console.error(err));
}

const thirdTabFunc = id => {
	$("#thirdTab").empty();
	let url = window.location.href + id;
	fetch(url).then(response=>response.json()).then(response=>{
		buildThirdTab(response);	 
    }).catch(err => console.error(err));
}

const finalTableFunc = id => {
	let url = window.location.href + id;
	fetch(url).then(response=>response.json()).then(response=>{
		buildFinalTable(response);	 
    }).catch(err => console.error(err));
}

const buildFirstTab = data => {
	for(let i of data){
		let id = i.Main_Tab_Num + "_firstTab";
		$("#mainTab").append(`<li class="nav-item" id="${id}"><a class="nav-link active" data-toggle="tab" href="javascript:secondTabFunction('${id}')" role="tab" aria-controls="${i.Main_Tab_Num}" aria-selected="true"><span>${i.Main_Tab_Display_Name}</span></a></li>`);
	}
}

const buildSecondTab = data => {
	for(let i of data){
		let id = i.Main_Tab_Num + "-" + i.Sec_Tab_Num;
		$("#secondTab").append(`<li class="nav-item" id="${id}"><a class="nav-link active" data-toggle="tab" href="javascript:thirdTabFunc('${id}')" role="tab" aria-controls="${id}" aria-selected="true"><span>${i.Sec_Tab_Display_Name}</span></a></li>`);
	}
}

const buildThirdTab = data => {
	for(let i of data){
		let id = i.Main_Tab_Num + "-" + i.Sec_Tab_Num + "-" + i.Third_Tab_DATA_TABLE;
		let id2 = i.Main_Tab_Num + "-" + i.Sec_Tab_Num + "-" + i.Third_tab_Num;
		$("#thirdTab").append(`<li class="nav-item" id = "${id}"><a class="nav-link active" data-toggle="tab" href="javascript:finalTableFunc('${id}')" role="tab" aria-controls="${id2}" aria-selected="true"><span>${i.Third_Tab_Display}</span></a></li>`);
	}
}

const buildFinalTable = data => {
	$("#datatable tr").remove();

	let titles = data.titles;
	let details = data.details;

	$("#datatable-thead").append(`<tr id="datatable-tr"></tr>`);
	for(let key in titles){
		if(titles.hasOwnProperty(key)){
			$("#datatable-tr").append(`<th id="${key}">${titles[key]}</th>`);
		}
	}

	for(let i of details){
		let row = "";
		for(let key in i){
			if(i.hasOwnProperty(key) && key != "Symbol_ID" && key != "Symbol_Link"){
				row += (`<td>${i[key]}</td>`);
			}
		}
		$("#tableBody").append("<tr>"+row+"</tr>");
	}
}

$(document).ready(function(){
	let url2 = window.location.href + "mainTab";
    fetch(url2).then(response=>response.json()).then(response=>{
		buildFirstTab(response);	 
    }).catch(err => console.error(err));

    let url3 = window.location.href + "1";
	fetch(url3).then(response=>response.json()).then(response=>{
		buildSecondTab(response);	 
    }).catch(err => console.error(err));
	
	let url4 = window.location.href + "1-1";
	fetch(url4).then(response=>response.json()).then(response=>{
		buildThirdTab(response);	 
    }).catch(err => console.error(err));
	
	let url5 = window.location.href + "1-1-C_MOL_PRC_UP_A_1";
	fetch(url5).then(response=>response.json()).then(response=>{
		console.log(response);
		buildFinalTable(response);
    }).catch(err => console.error(err));
});
