const server = require('./server.js');

const PORT = process.env.PORT || 7878;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})