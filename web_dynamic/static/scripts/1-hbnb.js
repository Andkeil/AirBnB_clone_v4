$(document).ready(function () {
  function rmID (arr) {
    let what;
    let a = arguments;
    let L = a.length;
    let ax;
    while (L > 1 && arr.length) {
      what = a[--L];
      while ((ax = arr.indexOf(what)) !== -1) {
        arr.splice(ax, 1);
      }
    }
    return arr;
  }

  let idList = [];
  $('input[type=checkbox]').change(function () {
    if (this.checked) {
      idList.push(this.getAttribute('data-id'));
      console.log(idList);
/*    	    for (let i = 0; i < id_list.length; i++) {
		if (i = 0) {
		    $("div", "h4").text(id_list[i]);
		} else {
		    $("div", "h4").append(id_list[i]);
		    }
	 }
*/
    }
    if (!this.checked) {
      rmID(idList, this.getAttribute('data-id'));
      console.log(idList);
    }
  });
  $('div', 'h4').text('goodluck');
});
