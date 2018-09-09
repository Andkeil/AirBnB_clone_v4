$(document).ready(function () {
  $.get("http://172.31.54.208:40228/api/v1/status/", function (data) {
    console.log(data.status);
    if (data.status === 'OK') {
    $('DIV#api_status').addClass('available')
  } else {
    $('DIV#api_status').removeClass('available')
  };
});
  let amenityDict = {};
  $('input[type=checkbox]').change(function () {
    if (this.checked) {
      amenityDict[this.getAttribute('data-id')] = this.getAttribute('data-name');
    }
    else if (!this.checked) {
      delete amenityDict[this.getAttribute('data-id')];
    }
      let i = 0;
      let string = "";
      Object.keys(amenityDict).forEach(function (key) {
	if (i === 0) {
	  string += amenityDict[key];
	} else {
	  string += ", ";
	  string += amenityDict[key];
	}
	i++;
        $("div.amenities h4").text(string);
      });
      if (!Object.keys(amenityDict).length) {
        $("div.amenities h4").empty();
      };
  });

  let ajaxRequest = $.ajax({
      type: 'POST', 
      url: 'http://172.31.54.208:40228/api/v1/places_search/',
      data: JSON.stringify({}),
      contentType: 'application/json',
});
    let searchDict = {};
    ajaxRequest.done(function(msg){
	searchDict = msg;
	Object.keys(searchDict).forEach(function (key) {
	    console.log(key);
	    console.log(searchDict[key]);
	});
});
    ajaxRequest.fail(function(jqXHR, status){console.log(jqXHR)});



});