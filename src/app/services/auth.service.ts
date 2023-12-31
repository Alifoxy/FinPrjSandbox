import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IAuth, ITokens} from "../interfaces";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {urls} from "../constants";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _accessTokenKey = 'access'
  private readonly _refreshTokenKey = 'refresh'
  private authUserSubject = new BehaviorSubject<IAuth | null>(null)

  constructor(private httpClient: HttpClient) {
  }

  login(admin: IAuth): Observable<ITokens> {
    return this.httpClient.post<ITokens>(urls.auth.login, admin).pipe(
      tap((tokens) => {
           this._setTokens(tokens)
           this.auth().subscribe(user => this.setAuthUser(user))
      })
    )
  }

  createUserByAdmin(user: IAuth): Observable<ITokens> {
    return this.httpClient.post<ITokens>(urls.auth.login, user).pipe(
      tap((tokens) => {
        this._setTokens(tokens)
        this.auth().subscribe(user => this.setAuthUser(user))
      })
    )
  }

  loginAdmin(admin: IAuth): Observable<any> {
    return this.httpClient.post<any>(urls.auth.login, admin)
  }

  auth(): Observable<IAuth> {
    return this.httpClient.get<IAuth>(urls.auth.auth)
  }

  refresh(refresh: string): Observable<ITokens> {
    return this.httpClient.post<ITokens>(urls.auth.refresh, {refresh}).pipe(
      tap((tokens) => {
        this._setTokens(tokens)
      })
    )
  }


  getAuthUser(): Observable<IAuth | null> {
    return this.authUserSubject.asObservable()
  }

  setAuthUser(user: IAuth | null): void {
    this.authUserSubject.next(user)
  }

  private _setTokens({access,refresh}: ITokens): void {
    localStorage.setItem(this._accessTokenKey, access)
    localStorage.setItem(this._refreshTokenKey, refresh)
  }

  getAccessToken(): string {
    return localStorage.getItem(this._accessTokenKey) || '';
  }

  getRefreshToken(): string {
    return localStorage.getItem(this._refreshTokenKey) || '';
  }

  deleteTokens(): void {
    localStorage.removeItem(this._accessTokenKey)
    localStorage.removeItem(this._refreshTokenKey)
  }

  // private _addTokens({access, refresh}: ITokens): void {
  //   localStorage.setItem(this._accessTokenKey, JSON.stringify(access))
  //   localStorage.setItem(this._refreshTokenKey, JSON.stringify(refresh))
  // }
}
