import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  errorMessage='';
  constructor(private userService:UserService,
    private router:Router) {

  }

  ngOnInit(): void {
  }
  submitRegister(obj:NgForm):void{
    this.userService.postRegister(obj).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: () => {
        this.errorMessage = 'ERROR!';
      },
    });
  }
}
