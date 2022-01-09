export interface IBaseRepository<T> {
    create(item: Partial<T>): Promise<void>,
    delete(item: Partial<T>): Promise<void>
}