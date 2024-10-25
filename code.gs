function postData() {
  // Set the API endpoint URL
  const url = "https://api.example.com/data"; // Replace with your API URL
  
  // Set up headers
  const headers = {
    "Content-Type": "application/json", // Adjust as necessary
    "Encoding": "UTF-8"                 // Adjust as necessary
  };
  
  // Prepare the data to be sent in the POST request
  const payload = {
    key1: "value1", // Adjust these keys and values as necessary
    key2: "value2",
    key3: "value3",
    key4: "value4"
  };
  
  // Encode the data similarly to --data-urlencode
  const encodedData = Object.keys(payload).map(key => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(payload[key]);
  }).join('&');
  
  // Set up options for the fetch request
  const options = {
    "method": "POST",
    "headers": headers,
    "payload": encodedData, // Use the encoded data
    "muteHttpExceptions": true // Prevents the script from throwing errors for non-200 responses
  };
  
  // Make the request
  const response = UrlFetchApp.fetch(url, options);
  
  // Log the response for debugging purposes
  Logger.log(response.getContentText());
}
