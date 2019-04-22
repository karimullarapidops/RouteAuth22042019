import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public userInformation : object;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserData().then(data => {
      console.log(data);
      this.userInformation = data;
    });
  }

}
