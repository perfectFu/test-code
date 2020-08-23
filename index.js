const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {
    const { url, method } = req
    if(url === '/') {
        const data = fs.readFileSync(path.resolve(__dirname, 'index.html'))
        res.end(data)
    } else if(url === '/api') {
        res.end(JSON.stringify({code: 1, message: 'Hi'}))
    } else {
        res.end('')
    }
}).listen(3000)