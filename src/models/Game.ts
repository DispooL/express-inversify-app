import {Column, Entity, ObjectID, ObjectIdColumn} from 'typeorm';

@Entity()
export class Game{
    @ObjectIdColumn()
    _id: ObjectID | string;

    @Column()
    players: Array<object>;

    @Column()
    status: number = 0;

    @Column()
    moves: number;
}