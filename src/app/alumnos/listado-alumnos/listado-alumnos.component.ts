import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { Alumnos } from 'src/app/alumnos';
import { AlumnosService } from 'src/app/alumnos.service';

@Component({
  selector: 'app-listado-alumnos',
  templateUrl: './listado-alumnos.component.html',
  styleUrls: ['./listado-alumnos.component.scss']
})
export class ListadoAlumnosComponent implements OnInit {
  usuario = localStorage.getItem('usuario');
  alumnos: Alumnos[];
  pageTitle: string = "Listado de Alumnos";
  errorMessage = '';
  sub: Subscription;

  displayedColumns: string[] = ['alumnoNombre', 'alumnoCurso', 'alumnoMail'];
  constructor(private serviceAlumnos: AlumnosService) {

  }

  ngOnInit(): void {
    //Guardo la suscripcion y genero la variable para la grilla
    this.sub = this.serviceAlumnos.getAll().subscribe({
      next: Alumnos => {
        this.alumnos = Alumnos;
      },
      error: err => this.errorMessage = err,
    })
  }

  //Desuscribo
  ngOnDestroy():void{
    this.sub.unsubscribe();
  }
}


