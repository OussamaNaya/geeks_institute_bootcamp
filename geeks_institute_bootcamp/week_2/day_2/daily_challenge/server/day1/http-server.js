// const http = require('http');
// const url = require('url');
// const querystring = require('querystring');

// let users = [];

// const server = http.createServer((req, res) => {

//     const parsedUrl = url.parse(req.url, true);
//     console.log("parsedUrl : ", parsedUrl);

//     // POST /users
//     if (req.method === 'POST' && parsedUrl.pathname === "/users") {

//         let firstMessage = "Welcome to Post method to url /users !";
//         let body = '';

//         req.on('data', (chunk) => {
//             body += chunk.toString();
//         });

//         req.on('end', () => {
//             const bodyObj = querystring.parse(body);
//             users.push(bodyObj);

//             const message = `${firstMessage}
// Nom: ${bodyObj.name}
// Email: ${bodyObj.email}
// Password: ${bodyObj.password}`;

//             res.writeHead(200, { 'Content-Type': 'application/json' });
//             res.end(JSON.stringify({ message }));
//         });
//     }

//     // GET /users
//     else if (req.method === 'GET' && parsedUrl.pathname === "/users") {

//         let page = "Welcome to Get method to url /users !";

//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({
//             users
//         }));
//     }

//     else {
//         res.end("Welcome to others method !");
//     }
// });

// server.listen(3003, () => {
//     console.log('Server is running on port 3003');
// });


// 🟡 INTERMEDIATE LEVEL — “Autonomous Mode”
// const http = require('http');
// const url = require('url');
// const querystring = require('querystring');

// let users = [];
// let idCounter = 1;

// const server = http.createServer((req, res) => {
//   const parsedUrl = url.parse(req.url, true);
//   const path = parsedUrl.pathname;

//   // Helper response
//   const sendJSON = (status, data) => {
//     res.writeHead(status, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(data));
//   };

//   // ===== POST /users (CREATE) =====
//   if (req.method === "POST" && path === "/users") {
//     let body = "";

//     req.on("data", chunk => body += chunk.toString());

//     req.on("end", () => {
//       const bodyObj = querystring.parse(body);

//       // Validation
//       if (!bodyObj.name || !bodyObj.email || !bodyObj.password) {
//         return sendJSON(400, { error: "Missing fields (name, email, password required)" });
//       }

//       const newUser = {
//         id: idCounter++,
//         name: bodyObj.name,
//         email: bodyObj.email,
//         password: bodyObj.password
//       };

//       users.push(newUser);

//       sendJSON(201, { message: "User created successfully", user: newUser });
//     });
//   }

//   // ===== GET /users (READ ALL) =====
//   else if (req.method === "GET" && path === "/users") {
//     sendJSON(200, { users });
//   }

//   // ===== GET /users/:id (READ ONE) =====
//   else if (req.method === "GET" && path.startsWith("/users/")) {
//     const id = parseInt(path.split("/")[2]);
//     const user = users.find(u => u.id === id);

//     if (!user) {
//       return sendJSON(404, { error: "User not found" });
//     }

//     sendJSON(200, { user });
//   }

//   // ===== PUT /users/:id (UPDATE) =====
//   else if (req.method === "PUT" && path.startsWith("/users/")) {
//     const id = parseInt(path.split("/")[2]);
//     let body = "";

//     req.on("data", chunk => body += chunk.toString());

//     req.on("end", () => {
//       const bodyObj = querystring.parse(body);
//       const user = users.find(u => u.id === id);

//       if (!user) {
//         return sendJSON(404, { error: "User not found" });
//       }

//       user.name = bodyObj.name || user.name;
//       user.email = bodyObj.email || user.email;
//       user.password = bodyObj.password || user.password;

//       sendJSON(200, { message: "User updated", user });
//     });
//   }

//   // ===== DELETE /users/:id =====
//   else if (req.method === "DELETE" && path.startsWith("/users/")) {
//     const id = parseInt(path.split("/")[2]);
//     const index = users.findIndex(u => u.id === id);

//     if (index === -1) {
//       return sendJSON(404, { error: "User not found" });
//     }

//     users.splice(index, 1);
//     sendJSON(200, { message: "User deleted successfully" });
//   }

//   // ===== BAD REQUEST =====
//   else {
//     sendJSON(404, { error: "Route not found" });
//   }
// });

// server.listen(3003, () => {
//   console.log("Server running on port 3003");
// });
