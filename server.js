import express from 'express';
// import Router from 'express-promise-router';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import http from 'http';
import { container } from './container';

container.resolve((users) => {
    const app = setupExpress();
    function setupExpress() {
        const app = express();
        const server = http.createServer(app);
        server.listen(4000, () => {
            console.log('listening port is 4000');
        });
        configureExpress(app);
        const router = require('express-promise-router')();
        users.SetRouting(router);

        app.use(router);
    }

    function configureExpress(app) {
        app.use(express.static('public'));
        app.set('view engine', 'ejs');
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }))

    }
})
