import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {



  constructor(private router:Router,
    private userService:UserService,
    private render:Renderer2) { }

  ngOnInit(): void {
  }

  clicked(clicked: any,other: any[]):void{
    if(!this.userService.isLogged){
      return;
    }
    this.render.setStyle(clicked,'background-color','rgb(232, 155, 60)')
    other.forEach(x=>this.render.setStyle(x,'background-color',' rgb(110, 16, 9)'));

    console.log(clicked);
      // clicked.render.
      console.log(other);


  }


}
