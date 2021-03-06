import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrincipalService } from '../../services/principal.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: PrincipalService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(form): void {
    console.log(form.value)
    this.authService.login(form.value).subscribe(res => {
      this.router.navigateByUrl('/auth');
    });
  }

}