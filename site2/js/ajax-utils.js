(function (global) {

    // Set up a namespace for our utility
    var ajaxUtils = {};
    
    
    // Returns an HTTP request object
    function getRequestObject() {
        // checks what type of object is available to us
      if (global.XMLHttpRequest) {
          // return a new HTTP request object
        return (new XMLHttpRequest());
      } 
      else if (global.ActiveXObject) {
        // For very old IE browsers (optional)
        return (new ActiveXObject("Microsoft.XMLHTTP"));
      } 
      // safety message (in case a broswer doesn't support Ajax requests)
      else {
        global.alert("Ajax is not supported!");
        return(null); 
      }
    }
    
    
    // Makes an Ajax GET request to 'requestUrl' (the server)
    // function is attached to ajaxUtils
    // the responseHandler is a function that will handle the response of the server
    ajaxUtils.sendGetRequest = 
      function(requestUrl, responseHandler, isJsonResponse) {
        // request is the object that comes from the function above
        var request = getRequestObject();
        request.onreadystatechange = 
        // function that gets called every time a response comes back from the server (is specified here below)
        // we need this function because we're passing the value of the function (can't pass the function directly)
        // we can't remove it and make it equal only to the function handleResponse because we would't be able to pass the two parameters
          function() { 
            handleResponse(request, responseHandler, isJsonResponse); 
          };
          // specify the method of our request, true makes it asynchronous (the broswer continues operating)
        request.open("GET", requestUrl, true);
        request.send(null); // for POST only
      };
    
    
    // Only calls user provided 'responseHandler'
    // function if response is ready
    // and not an error
    function handleResponse(request,
                            responseHandler) {
        // request the "ready" state (no network communication going on)
      if ((request.readyState == 4) &&
       // everything is fine
         (request.status == 200)) {
             if (isJsonResponse == undefined) {
                 isJsonResponse == true;
             }
             
             if (isJsonResponse) {
                 responseHandler(JSON.pasrse(request.responseText))
             }
             else
       // take the response and pass it to the responseHandler function, which is provided by the user of this library to pull out the response of the server
                responseHandler(request.responseText);
      }
    }
    
    
    // Expose utility to the global object
    global.$ajaxUtils = ajaxUtils;
    
    
    })(window);