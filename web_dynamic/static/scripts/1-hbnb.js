$( document ).ready(function() {
	if (typeof id_list == "undefined" || !(id_list instanceof Array)) {
	    var id_list = [];
   	    console.log(id_list);
	}

    $('input[type=checkbox]').change(function() {
	if (this.checked) {
	    id_list.push(this.getAttribute("data-id"));
	console.log(id_list);
}
})

});
