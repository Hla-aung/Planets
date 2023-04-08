const http = require("http");
const https = require("https");
const cors = require("cors")

const handleGetRequest = (req, res) => {
  const options = {
    hostname: "planets-info-by-newbapi.p.rapidapi.com",
    path: "/api/v1/planets/",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-RapidAPI-Key": "13950c8d0cmsh9c2b1c65e904b38p165912jsn7d0318c54212",
      "X-RapidAPI-Host": "planets-info-by-newbapi.p.rapidapi.com",
      useQueryString: true,
    },
  };

  const request = https.request(options, (response) => {
    let data = [];

    // Aggregate data chunks as they come in from the API
    response.on("data", (chunk) => {
      data.push(chunk);
    });

    // Handle the end of the request
    response.on("end", () => {
      const body = Buffer.concat(data);
      console.log("Retrieved Data:", body.toString());
      res.end(body.toString());
    });
  });

  request.end();
};

// Creates server instance
const server = http.createServer((req, res) => {
  const { method } = req;

  const headers = {
    'Access-Control-Allow-Origin': '*', /* @dev First, read about security */
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    /** add other headers as per requirement */
  };

  switch (method) {
    case "GET":
      res.writeHead(200, headers)
      return handleGetRequest(req, res);
    default:
      throw new Error(`Unsupported request method: ${method}`);
  }
});

// Starts server listening on specified port
server.listen(4001, () => {
  console.log(`Server is listening on: http://localhost:4001`);
});
