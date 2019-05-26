// After the API loads, call a function to enable the search box.
function loadClient() {
    gapi.client.setApiKey("");
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}

function handleAPILoaded() {
    $('#search-button').attr('disabled', false);
  }
  
  // Search for a specified string.
  function search() {
    loadClient();
    var q = $('#query').val();
    var request = gapi.client.youtube.search.list({
      q: q,
      part: 'snippet'
    });
  
    request.execute(function(response) {
      var str = JSON.stringify(response.result);
      $('#search-container').html('<pre>' + str + '</pre>');
    });
  }