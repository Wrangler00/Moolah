const firstTabId = "mainTab";
const secondTabId = "secondTab";
const thirdTabId = "thirdTab";
const datatableId = "datatable";

const showLoader = () => $("div#divLoading").addClass('show');
const removeLoader = () => $("div#divLoading").removeClass('show');

// const showErrorDiv = () => {
// 	$('#errorId').show();
// }

// const symbolClick = symbol=>{
// 	console.log("symbol ::",symbol);
// 	let url = window.location.href + "/symbol/"+symbol;
// 	fetch(url).then(response=>response.json()).then(response=>{
// 		console.log("symbolClick ::",response);
// 	});
// }

const secondTabFunction = id => {
	showLoader();
	$(`#${secondTabId}`).empty();
	id = (id.split('_'))[0];
	let url =  window.location.href + id;
	fetch(url).then(response=>response.json()).then(response=>{
		buildSecondTab(response);
		let idd = $(`#${secondTabId} li:first`).attr('id');
		console.log("secondtabfunc :: ",idd);
		$(`#${idd}`).addClass("active show");
		thirdTabFunc(idd);
    }).catch(err => {
    	console.error(err)
    	removeLoader();
    });
}

const thirdTabFunc = id => {
	showLoader();
	$(`#${thirdTabId}`).empty();
	let url = window.location.href + id;
	fetch(url).then(response=>response.json()).then(response=>{
		buildThirdTab(response);
		let idd = $(`#${thirdTabId} li:first`).attr('id');
		$(`#${idd}`).addClass("active show");
		console.log("thirdtabfunc :: ",idd);
		finalTableFunc(idd);	 
    }).catch(err => {
    	console.error(err)
    	removeLoader();
    });
}

const finalTableFunc = id => {
	showLoader();
	let url = window.location.href + id;
	fetch(url).then(response=>response.json()).then(response=>{
		buildFinalTable(response);	 
		removeLoader();
    }).catch(err => {
    	console.error(err)
    	removeLoader();
    });
}

const onclickFunc = (id ,tabName) => {
	$(`#${tabName}`).find('.active').removeClass('active show');
	$(`#${id}`).addClass("active show");
}

const buildFirstTab = data => {
	for(let i of data){
		let id = i.Main_Tab_Num + "_firstTab";
		$(`#${firstTabId}`).append(`<li class="nav-item" id="${id}"><a onclick="onclickFunc('${id}','${firstTabId}');" class="nav-link" data-toggle="tooltip" title="${i.Main_Tab_Hint}" href="javascript:secondTabFunction('${id}')" role="tab" aria-controls="${i.Main_Tab_Num}" aria-selected="true"><span><b>${i.Main_Tab_Display_Name}</b></span></a></li>`);
	}
}

const buildSecondTab = data => {
	for(let i of data){
		let id = i.Main_Tab_Num + "-" + i.Sec_Tab_Num;
		$(`#${secondTabId}`).append(`<li class="nav-item" id="${id}"><a onclick="onclickFunc('${id}','${secondTabId}');" class="nav-link" data-toggle="tooltip" title="${i.Sec_Tab_Hint}" href="javascript:thirdTabFunc('${id}')" role="tab" aria-controls="${id}" aria-selected="true"><span><b>${i.Sec_Tab_Display_Name}</b></span></a></li>`);
	}
}

const buildThirdTab = data => {
	for(let i of data){
		let id = i.Main_Tab_Num + "-" + i.Sec_Tab_Num + "-" + i.Third_Tab_DATA_TABLE;
		let id2 = i.Main_Tab_Num + "-" + i.Sec_Tab_Num + "-" + i.Third_tab_Num;
		$(`#${thirdTabId}`).append(`<li class="nav-item" id = "${id}"><a class="nav-link" onclick="onclickFunc('${id}','${thirdTabId}');" data-toggle="tooltip" title="${i.Third_Tab_Hint}" href="javascript:finalTableFunc('${id}')" role="tab" aria-controls="${id2}" aria-selected="true"><span><b>${i.Third_Tab_Display}</b></span></a></li>`);
	}
}

const tableStructureDraw = ()=>{
	$(`#${datatableId}`).DataTable({
		searching: false,
		pagingType: "full_numbers",
		scrollY: 300,
        scrollX: true
	});
}

const appendTableHeader = data =>{
	let rows="";
	for(let key in data){
		if(data.hasOwnProperty(key)){
			rows +=`<th id="${key}">${data[key]}</th>`;
		}
	}
	
	if($(`#${datatableId}`).length != 0){
		$(`#${datatableId}`).remove();
	}
	$("#__tableBody").empty();
	$("#__tableBody").append(`<table id="${datatableId}" class="table table-striped table-bordered nowrap" style="width:100%"><thead id="datatable-thead"><tr id="datatable-tr">${rows}</tr></thead><tbody id="tableBody"></tbody></table>`);
	console.log(rows);
}

const appendDataRow = data =>{
	for(let i of data){
		let row = "";
		for(let key in i){
			if(i.hasOwnProperty(key) && key != "Symbol_ID" && key != "Symbol_Link"){
				if(key == "Symbol")
					row += (`<td><a href="/symbol/${i[key]}" onclick="window.open(this.href, '_blank','left=20,top=20,width=1000,height=500,toolbar=1,resizable=0'); return false;" >${i[key]}</a></td>`);
				else
					row += (`<td>${i[key]}</td>`);
			}
		}
		$("#tableBody").append("<tr>"+row+"</tr>");
	}
	tableStructureDraw();
	removeLoader();
}

const buildFinalTable = data => {
	let titles = data.titles;
	let details = data.details;
	showLoader();
	$.when(appendTableHeader(titles)).then(appendDataRow(details));
}

$(document).ready(function(){
	showLoader();
    let url2 = window.location.href + firstTabId;
    fetch(url2).then(response=>response.json()).then(response=>{
		buildFirstTab(response);	 
		$(`ul#${firstTabId} li:first`).addClass("active show");
    }).catch(err => console.error(err));
    secondTabFunction("1");
});