import express from 'express'
import GetIpAddress from './src/GetIpAddress';
import main from './src/main';

const app = express()
const port = 3000;

app.listen(port, () => {
    console.log('http://' + GetIpAddress()[0] + ':' + port);
    new main(app).init()
})

