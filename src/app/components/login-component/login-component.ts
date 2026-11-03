import { Component, ViewChild, ElementRef, OnInit, inject } from '@angular/core';
import { ServiceEmpleados } from '../../services/Service.empleados';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent implements OnInit {
  
  @ViewChild("username") username!: ElementRef;
  @ViewChild("password") password!: ElementRef;

  constructor(private _service: ServiceEmpleados, private _router: Router) {
  }

  login(){

    let object = {
      userName: this.username.nativeElement.value,
      password: this.password.nativeElement.value
    }

    this._service.login(object).subscribe((res: any) => {
      sessionStorage.setItem("token", res.response);
      console.log(sessionStorage.getItem("token"));
      
      //this._serviceAuthEmpleados.almacenarEmpleado(res.response);
      this._router.navigate(["/"]);
      
    })
  }

  ngOnInit() {
    if(sessionStorage.getItem("token")){
      this._router.navigate(["/"]);
    }
  }

}
