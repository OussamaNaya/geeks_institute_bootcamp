const http = require('http')

const server = http.createServer((req, res) => {
        //check the URL of the current request
    //check if the request URL is equal to /welcome.
    if (req.url == '/welcome') { 
        // 1. inform the client that we send a JSON response in the header with the appropriate content type.
        res.setHeader("Content-Type", "application/json");
        //2. 
        res.writeHead(200);
        res.end(JSON.stringify({ message: "Welcome New User"}));
        // OR
        // res.write(JSON.stringify({ message: "Welcome New User"}));  
        //res.end();  
    } else {
       
        if (req.url === '/') {
            //1.
            res.statusCode = 200;
            //2.
            res.setHeader('Content-Type', 'text/html');
            // 3
            res.end('<h1>Home page</h1>')
        } else if (req.url === '/about') {
            //1.
            res.statusCode = 200;
            //2.
            res.setHeader('Content-Type', 'text/html');
            // 3        
            res.end('<h1>About page</h1>')
        } else {
            //1.
            res.statusCode = 404;
            //2.
            res.setHeader('Content-Type', 'text/html');
            // 3
            res.end('page not found')
        }  
    }  
})

server.listen(5000, 'localhost', () => {
    console.log('Server is listening at localhost on port 5000')
})
