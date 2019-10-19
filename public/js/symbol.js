$(document).ready(function(){
	$(`#symbol_table`).DataTable({
		searching: false,
		pagingType: "full_numbers",
		scrollY: 200,
        scrollX: true
	});
})