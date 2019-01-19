import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUserData } from './IUSerData';
import { WINDOW } from './WindowProvider'

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class BffService {

  constructor(private http: HttpClient, @Inject(WINDOW) private window: Window) { }

  getHostname(): string {
    return this.window.location.hostname;
  }

  getUsers(): Observable<any> {
    return this.http.get<any>("http://"+this.window.location.hostname+":8080/users");
  }

  res;

  sendData(userData: IUserData): Observable<IUserData> {
    return this.http.post<IUserData>("http://"+this.window.location.hostname+":8080/user", userData).pipe(
      res => this.res = res);
  }
}
