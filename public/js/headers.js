const buildHeader = headers => {
	for(let i of headers){
		$("#navbar-ul").append(`<li class="nav-item" id="${i.headers_Id}"><a class="nav-link" data-toggle="tooltip" title="${i.Header_Tab_Hint}" href="/header/${i.headers_Id}"><span>${i.Header_Tab_Display_Name}</span></a></li>`);	
	}
};

$(document).ready(function(){
	let url1 = window.location.origin + "/headers";
	fetch(url1).then(response=>response.json()).then(response=>{
		buildHeader(response);	 
    }).catch(err => console.error(err));
});