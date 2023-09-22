import {Component, OnInit} from '@angular/core';
import {IAuth, ITokens} from "../../interfaces";
import {AuthService} from "../../services";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent {

  // user: IAuth;
  //
  //
  // constructor(private authService: AuthService) {
  // }
  //
  // ngOnInit(): void {
  //   this.authService.getAuthUser().subscribe(value=>{
  //   if (value) {
  //     this.user = value
  //   } else {
  //     this.authService.auth().subscribe(value => this.user = value)
  //   }
  //   })
  // }
}
