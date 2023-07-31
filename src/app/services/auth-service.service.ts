import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../model/user.module';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, ObservableInput, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  API: string = 'http://localhost:8080/api/auth';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  } constructor(private http: HttpClient, public router: Router) { }


  singUp(user: User): Observable<any> {
    let url = `${this.API}/singup`;
    return this.http.post(url, user).pipe(catchError(this.handleError))

  }

  login(user: User) {
    return this.http
      .post<any>(`${this.API}/login`, user)
      .subscribe((result: any) => {
        localStorage.setItem('access_token', result.token);
        this.getUserProfile(result._id).subscribe((result) => {
          this.currentUser = result;
          this.router.navigate(['user-profile/' + result.msg._id]);
        });
      });
  }

  getToken() {
    return localStorage.getItem('access_token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }
  // User profile
  getUserProfile(id: any): Observable<any> {
    let api = `${this.API}/user-profile/${id}`;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((result) => {
        return result || {};
      }),
      catchError(this.handleError)
    );
  }



































  // userValue: any;

  // constructor(public jwtHelper: JwtHelperService) { }
  // public isAuthenticated(): boolean {
  //   const token = localStorage.getItem('token');
  //   return !this.jwtHelper.isTokenExpired(token);
  // }

  // public login(username: string, password: string): void {
  //   localStorage.setItem('token', 'JWT_TOKEN_FROM_SERVER');
  //   localStorage.setItem('user', JSON.stringify({ username, roles: ['admin'] }));
  // }

  // public logout(): void {
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('user');
  // }

  // public hasRole(role: string): boolean {
  //   const user = this.getUser();
  //   return user.roles.includes(role);
  // }

  // private getUser(): any {
  //   const user = localStorage.getItem('user');
  //   if (user) {
  //     return JSON.parse(user);
  //   }
  //   return null;
  // }

}
