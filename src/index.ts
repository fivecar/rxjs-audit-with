import { BehaviorSubject, Observable, OperatorFunction } from "rxjs";
import { audit, filter, mergeMap, tap } from "rxjs/operators";

export default function auditWith<T, R>(
  callback: (value: T) => Promise<any>
): OperatorFunction<T, R> {
  const freeToRun = new BehaviorSubject(true);

  return (source: Observable<T>) => {
    return source.pipe(
      audit(_val => freeToRun.pipe(filter(free => free))),
      tap(() => freeToRun.next(false)),
      mergeMap(val => callback(val)),
      tap(() => freeToRun.next(true))
    );
  };
}
