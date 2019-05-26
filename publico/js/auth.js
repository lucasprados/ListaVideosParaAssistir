function loadClient() {
    gapi.client.setApiKey('ID');
    return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}
