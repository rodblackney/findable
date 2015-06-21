$(function () {
    $('#search').on('click', function (evt) {
        var query = $('#query').val();
        search(query);
        
        // Prevent form submission to server
        // Normally, when you click a submit button on a form, a call is made to the server.
        // Returning false prevents this
        // Ref: http://stackoverflow.com/questions/1357118/event-preventdefault-vs-return-false
        return false;
    });
});

function gotData(data) {}

function search(query) {
    var clientId = '62566400d0b546feb90dd52ac7984a33';

    $.ajax({
        url: 'https://api.instagram.com/v1/tags/architecture/media/recent?client_id=' + clientId,
        jsonp: "callback",
        dataType: "jsonp",
        success: function( response ) {
          showResults(response.data);
        }
    });
}

function showResults(results){
  $.each(results, function(index,value){
    console.log();
    var imageUrl = value.images.thumbnail.url;
    var innerHtml = '<img src="' + imageUrl + '"/>';
    $('#results').append('<li>' + innerHtml + '</li>');
  });
}
