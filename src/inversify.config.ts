import "reflect-metadata"
import "./api/controllers/GameController";
import { Container } from "inversify";
import { TYPES } from './types';
import { IGameRepository } from './interfaces/IGameRepository';
import { IGameService } from './interfaces/IGameService';
import { GameService } from './services/GameService';
import { getGameRepository } from './repositories/GameRepository';

export function loadContainer(): Container{
    let container = new Container();
    container.bind<IGameRepository>(TYPES.IGameRepository).toDynamicValue(() => { return getGameRepository() }).inSingletonScope();
    container.bind<IGameService>(TYPES.IGameService).to(GameService);

    return container;
}