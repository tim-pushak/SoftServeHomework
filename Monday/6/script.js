"use strict";

// task 1

const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`<h1>System Information</h1>`);
  res.write(`<p>User: ${os.userInfo().username}</p>`);
  res.write(`<p>Type: ${os.type()}</p>`);
  res.write(`<p>Uptime: ${(os.uptime() / 60).toFixed(2)} minutes</p>`);
  res.write(`<p>Current Directory: ${process.cwd()}</p>`);
  res.write(`<p>Server File Name: ${path.basename(__filename)}</p>`);
  res.end();
});

server.listen(5000, () => {
  console.log('Server listening on port 5000');
});

// //// /

// task 2

function greetUser(username) {
  const now = new Date();
  const hour = now.getHours();

  let greeting;

  if (hour >= 5 && hour < 12) {
    greeting = "Good morning";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return `${greeting}, ${username}!`;
}

module.exports = {
  greetUser,
};

const http = require("http");
const url = require("url");
const { greetUser } = require("./personalmodule");

const Secondserver = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;
  const username = queryObject.name || "Guest";

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`<h1>${greetUser(username)}</h1>`);
  res.end();
});

Secondserver.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


// //// /