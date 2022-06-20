import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  //Doy de alta el form para el login
  loginFormGroup: FormGroup= this.formBuilder.group({
    Usuario:['', [Validators.required]]
  })
  ngOnInit(): void {
    localStorage.clear();
    console.log(this.loginFormGroup.get("Usuario")?.value);
  }

  
  //Cargo el dato del usuario en el localStorage y redirijo a la pagina de Inicio
  submit(){
    localStorage.setItem('usuario',this.loginFormGroup.get("Usuario")?.value);
    let dato=localStorage.getItem('usuario');
    debugger;
    this.router.navigate(["/alumnos"]);
    console.log(dato);

  }

}
