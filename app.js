const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req)
    if (req.url === '/'){
        res.write('Here is our home page......')
        res.end()
    }
    if (req.url === '/about'){
        res.write('Here is our about page')
        res.end()
    }
    // res.write('<h1> OOOps </h1> <p> CAnt find home</p> <a href="/">back home</a>');
    // res.end();
})

server.listen(5000)

