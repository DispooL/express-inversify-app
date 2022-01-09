import { MongoRepository } from 'typeorm';
import {Game} from '../models/Game';

export interface IGameRepository extends MongoRepository<Game>{
}