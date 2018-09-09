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
    	    for (let i = 0; i < idList.length; i++) {
		if (i === 0) {
		    $("div.amenities h4").text(idList[i]);
		} else {
		    $("div.amenities h4").append(idList[i]);
		    }
	 }

    }
    if (!this.checked) {
      rmID(idList, this.getAttribute('data-id'));
      console.log(idList);
    }
  });
});
