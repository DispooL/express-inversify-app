import {Application} from 'express';
import {InversifyExpressServer} from 'inversify-express-utils';
import {Container} from 'inversify';
import cors from 'cors';
import bodyParser from 'body-parser';

export default (container: Container): Application => {
    let server = new InversifyExpressServer(container);
    server.setConfig((app) => {
        app.use(cors())
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended: false}));
    });

    return server.build();
}