import {
    BaseHttpController,
    controller,
    httpGet,
    request,
    response
} from "inversify-express-utils";
import {Request, Response} from "express";
import {inject} from 'inversify';
import {TYPES} from '../../types';
import {IGameService} from '../../interfaces/IGameService';
import {param, validationResult} from 'express-validator';

@controller('/game')
export class GameController extends BaseHttpController{
    @inject(TYPES.IGameService) private _gameService: IGameService;

    @httpGet('/', param('gameId').exists())
    private async index(@request() req: Request, @response() res:  Response){
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return this.json(errors.array(), 422);
        }

        const getDto = {
            _id: '61d9b4861e71cc31cc4e42d6'
        }
        //await this._gameService.createGame(game)
        //const game = await this._gameService.getGame(getDto)
        // await getMongoRepository(Game).insert({
        //     players: [{name: 'Sasha'}],
        //     moves: 1
        // })
        const game = await this._gameService.getGameById( '61d9b45dc9cdc939443fe366')
        return this.json(game)
    }
}