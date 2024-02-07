// Import the 'https' module to make HTTPS requests
const https = require("https");

// Define the options for the HTTPS request
const options = {
  // Specify the hostname of the Go server (Ngrok tunnel URL)
  hostname: "6960-2a04-ee41-4-a5d4-15bb-7a0e-2b51-9ca0.ngrok-free.app",
  // Specify the port for HTTPS traffic (default port for HTTPS is 443)
  port: 443,
  // Specify the path to which the request will be sent (root path in this case)
  path: "/",
  // Specify the HTTP method for the request (GET request in this case)
  method: "GET",
};

// Make an HTTPS request to the Go server using the specified options
const req = https.request(options, (res) => {
  // Log the status code of the response received from the server
  console.log(`statusCode: ${res.statusCode}`);

  // Initialize an empty string to store the received data
  let data = "";

  // Event listener for when a chunk of data is received
  res.on("data", (chunk) => {
    // Append the received chunk to the 'data' string
    data += chunk;
  });

  // Event listener for when the whole response has been received
  res.on("end", () => {
    // Log a message indicating that the response from the Go server is being printed
    console.log("Response from Go server:");
    // Log the received data (response body) from the Go server
    console.log(data);
  });
});

// Event listener for handling errors that may occur during the HTTPS request
req.on("error", (error) => {
  // Log the error message to the console
  console.error(error);
});

// End the HTTPS request (send the request to the server)
req.end();
