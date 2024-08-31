
const express = require('express')
const app = express()
const port =3001
app.get('*', (req, res) => {
    res.send('helloo there!!, you request is handled by server 1')
})

app.listen(port, () => {
    console.log("server runnin on port 3001");
})