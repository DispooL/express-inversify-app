import {IBaseRepository} from '../interfaces/IBaseRepository';
import {Game} from '../models/Game';
import {IGameRepository} from '../interfaces/IGameRepository';
import {inject, injectable, unmanaged} from 'inversify';
import {IGetGameDto} from '../dto/IGameDto';
import {TYPES} from '../types';
import {EntityRepository, getConnection, MongoRepository} from 'typeorm';

@EntityRepository(Game)
export class GameRepository extends MongoRepository<Game> implements IGameRepository{

}

export function getGameRepository(){
    return getConnection().getCustomRepository(GameRepository);
}