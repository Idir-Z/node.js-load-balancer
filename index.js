const http = require('http')
const { createProxyServer } = require('http-proxy')

const servers = [
    { host: "localhost", port: "3001" },
    { host: "localhost", port: "3002" },
    {host : "localhost", port: "3003"},
]

let currectServer = 0
const proxy = createProxyServer({})

const loadBalancer = http.createServer((req, res) => {
    const targetServer = servers[currectServer]
    currectServer = (currectServer + 1) % servers.length
    proxy.web(req, res, { target: `http://${targetServer.host}:${targetServer.port}` });
    console.log(`Forwarded request to: ${targetServer.host}:${targetServer.port}`);

})

loadBalancer.listen(8080, () => {
    console.log('Load balancer is running on port 8080');
})