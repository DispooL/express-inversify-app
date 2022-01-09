import databaseLoader from './database'
import serverLoader from './express'
import {loadContainer} from '../inversify.config';

export default async() => {
    await databaseLoader();
    const server = await serverLoader(loadContainer());
    server.listen(3000, () => {
        console.log('started');
    })
}