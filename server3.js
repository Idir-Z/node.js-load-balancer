
const express = require('express')
const app = express()
const port =3003
app.get('*', (req, res) => {
    res.send('helloo there!!, you request is handled by server 3')
})

app.listen(port, () => {
    console.log("server runnin on port 3003");
})