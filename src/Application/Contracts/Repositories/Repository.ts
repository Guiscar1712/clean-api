import { Observable } from "rxjs";
import { Entity } from '../../../Domain/Entities/Entity'

abstract class Repository<TEntity extends Entity> {
    abstract create(data: TEntity): Observable<TEntity>;
    abstract update(id: number, data: TEntity): Observable<TEntity>;
    abstract findById(id: number): Observable<TEntity>;
    abstract findAll(): Observable<TEntity[]>;
    abstract delete(id: number): Observable<void>;
}

export default Repository