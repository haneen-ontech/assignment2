/*// server.mjs
import { createServer } from 'node:http';
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Bye World!\n');
});
// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
// run with `node server.mjs`

// taskkill /IM node.exe /F
*/

/*
var connect = require('connect');
var http = require('http');
var app = connect();
function helloworld(req, res, next){

  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World')

}
function byeworld(req, res, next){

  res.setHeader('Content-Type', 'text/plain')
  res.end('Bye World')

}

app.use('/hello', helloworld);
app.use('/bye', byeworld);
app.listen(3000)
*/

var express = require('express')
const app = express()

/*
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/home', (req, res) => {
  res.send('Home page')
})

app.get('/about', (req, res) => {
  res.send('About me')
})
*/
app.listen(3000)

