// Importing necessary packages
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require('./routes/router'); // Importing router module
const connectToDB = require("../db"); // Importing function to connect to the database

//Connecting to the database
connectToDB();

//Creating an Express application
const app = express();

//Middleware for parsing JSON bodies
//This line configures Express to use the bodyParser.json() middleware, which parses incoming request bodies with JSON payloads. When a request with a JSON payload is received by the server, this middleware parses the JSON data and makes it available in req.body for use in route handlers
app.use(bodyParser.json());

// Middleware for parsing URL-encoded bodies
// This line configures Express to use the bodyParser.urlencoded() middleware, which parses incoming request bodies with URL-encoded payloads. URL-encoded payloads are typically sent by HTML forms using the application/x-www-form-urlencoded MIME type. This middleware parses the URL-encoded data and makes it available in req.body for use in route handlers.
app.use(bodyParser.urlencoded({extended: false}));

// CORS configuration
const corsOptions={
    origin: '*', // Allowing requests from all origins
    credentials: true,
    optionSuccessStatus: 200
};

// Applying CORS middleware
app.use(cors(corsOptions));

// Using the router for handling requests
app.use('/', router);

// Defining the port number
const port = 4000;

// Starting the server
app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});


/*
CORS stands for Cross-Origin Resource Sharing. It's a security feature implemented by web browsers that restricts web applications running in one domain from making requests to another domain. This is a security measure to prevent malicious websites from accessing resources on other websites without permission.
In simpler terms, CORS is a set of policies that determine whether a web browser should allow a web application to make requests to a different origin (domain, protocol, or port) than the one from which it originated.

Here's how CORS works:
1. **Same-Origin Policy**: By default, web browsers enforce a same-origin policy, which means that a web page can only make requests to the same origin it was loaded from. An origin consists of the combination of the protocol (such as HTTP or HTTPS), the domain (e.g., example.com), and the port (if specified).
2. **Cross-Origin Requests**: If a web application hosted on one origin needs to make a request to a different origin (cross-origin request), the browser will block the request by default due to security concerns.
3. **CORS Headers**: To enable cross-origin requests, the server hosting the requested resource needs to include specific HTTP headers in its response. These headers indicate to the browser that it's safe to allow the requesting web application to access the resource. The most common CORS headers are `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers`, and `Access-Control-Allow-Credentials`.
4. **Preflight Requests**: For certain types of cross-origin requests (such as those with custom headers or methods other than GET, HEAD, or POST), the browser first sends a preflight request (an OPTIONS request) to the server to check if the actual request is safe to send. The server responds to the preflight request with appropriate CORS headers, and if approved, the browser sends the actual request.

In the provided code, CORS is configured using the `cors` middleware in Express.js. It allows the server to specify that it's okay to accept requests from any origin (`'*'`) and enables support for credentials (`credentials: true`).
Setting credentials: true in CORS configuration means that the server is indicating that it is willing to accept credentials (such as cookies, HTTP authentication, and client-side SSL certificates) from cross-origin requests.
*/