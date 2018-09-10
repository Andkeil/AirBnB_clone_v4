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

  let ajaxRequest = $.ajax({
      type: 'POST',
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      data: JSON.stringify({}),
      contentType: 'application/json',
      success: function(data) {
	for (let i = 0; i < data.length; i++) {
	  let article = $('<article>');

	  let title = $('<div/>', {class: 'title'}).appendTo(article);
	  $('<h2/>', {text: data[i]['name']}).appendTo(title);
	  $('<div/>', {class: 'price_by_night', text: '$' + data[i].price_by_night}).appendTo(title);

	  let infoBox = $('<div/>', {class: 'information'}).appendTo(article);
	  let numGuests = $('<div/>', {class: 'max_guest'}).appendTo(infoBox);
	  let numRooms = $('<div/>', {class: 'number_rooms'}).appendTo(infoBox);
	  let numBaths = $('<div/>', {class: 'number_bathrooms'}).appendTo(infoBox);

	  $('<br/>').appendTo(article);
	  $('<div/>', {class: 'description', text: data[i]['description']}).appendTo(article);

	  $('<i/>', {class: 'fa fa-users fa-3x'}).appendTo(numGuests);
	  $('<br/>').appendTo(numGuests);
	  $('<div/>', {text: data[i]['max_guest'] + ' Guests'}).appendTo(numGuests);

	  $('<i/>', {class: 'fa fa-bed fa-3x'}).appendTo(numRooms);
          $('<br/>').appendTo(numRooms);
          $('<div/>', {text: data[i]['number_rooms'] + ' Bedrooms'}).appendTo(numRooms);

	  $('<i/>', {class: 'fa fa-bath fa-3x'}).appendTo(numBaths);
          $('<br/>').appendTo(numBaths);
          $('<div/>', {text: data[i]['number_bathrooms'] + ' Bathroom'}).appendTo(numBaths);

	  $('.places').append(article);
	}
      }
  });
});
