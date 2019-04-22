import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {
    //this returns true or false
    const userData = sessionStorage.getItem('userData');
    if (userData && userData.length > 0) {
      return true;
    } else {
      return false;
    }
  }

  public async getUserData() {
    const userData = await sessionStorage.getItem('userData');
    return JSON.parse(userData);
  }

  public async login(postData) {
    //Login api connection

    const responseData = {
      "name": 'kareem',
      "id": '1234',
      "token": '23523XSDFERWER'
    };

   await sessionStorage.setItem('userData', JSON.stringify(responseData));
    return true;
  }

  public signup(postData) {
    //signup api connection
  }

  public async logout() {
    //logout api connection
    await sessionStorage.removeItem('userData');
    await sessionStorage.clear();
    return true;
  }

}
