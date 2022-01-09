import {createGameDto, IGetGameDto} from '../dto/IGameDto';
import {Game} from '../models/Game';

export interface IGameService{
    createGame(createDto: createGameDto): Promise<void>,
    getGameById(_id: string): Promise<Game | undefined>
}