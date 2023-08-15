import {Component, OnInit} from '@angular/core';
import {IAuth} from "../../interfaces";
import {AuthService} from "../../services";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: IAuth | string;


  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.auth().subscribe(value => {
      if (value) {
        this.user = value
      } else {
        this.authService.auth().subscribe(value => this.user = value)
      }
    })
  }
}
