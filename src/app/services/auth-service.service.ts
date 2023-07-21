import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../model/user.module';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(public jwtHelper: JwtHelperService) { }
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  public login(username: string, password: string): void {
    localStorage.setItem('token', 'JWT_TOKEN_FROM_SERVER');
    localStorage.setItem('user', JSON.stringify({ username, roles: ['admin'] }));
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  public hasRole(role: string): boolean {
    const user = this.getUser();
    return user.roles.includes(role);
  }

  private getUser(): any {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

}
