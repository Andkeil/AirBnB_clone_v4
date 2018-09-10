$(document).ready(function () {
  $.get("http://0.0.0.0:5001/api/v1/status/", function (data) {
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
});
