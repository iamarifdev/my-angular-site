import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';

import { IUser } from './models/user.model';

@Injectable()
export class UserService {
  private users: IUser[] = [
    { id: 1, name: 'Shohel', enabled: true, phone: '01767543854' },
    { id: 2, name: 'Arif', enabled: true, phone: '04553456345' },
    { id: 3, name: 'Rahul', enabled: true, phone: '02654654645' },
    { id: 4, name: 'Rabiul', enabled: true, phone: '654645645656' },
    { id: 5, enabled: true, phone: '654654654645' },
  ];

  constructor() {}

  public getUserList(): Observable<IUser[]> {
    return of(this.users).pipe(delay(300));
  }

  public addUser(user: IUser): Observable<IUser> {
    this.users.push(user);
    return of(user).pipe(delay(400));
  }
}
