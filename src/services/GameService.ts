import {inject, injectable} from 'inversify';
import {IGameService} from '../interfaces/IGameService';
import {ICreateGameDto, IGetGameDto} from '../dto/IGameDto';
import {IGameRepository} from '../interfaces/IGameRepository';
import {TYPES} from '../types';
import {Game} from '../models/Game';

@injectable()
export class GameService implements IGameService {
    @inject(TYPES.IGameRepository) private _gameRepository: IGameRepository

    public async createGame(createDto: ICreateGameDto): Promise<void> {
        await this._gameRepository.create(createDto)
    }

    public async getGameById(_id: string): Promise<Game | undefined> {
        return this._gameRepository.findOne(_id)
    }
}