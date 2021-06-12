const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.write('Running application from Docker container!\n')
  res.end('Node.js version: ' + process.version + '\n')
})
app.listen(port, () => console.log(`Server running at http://localhost:${port}`))