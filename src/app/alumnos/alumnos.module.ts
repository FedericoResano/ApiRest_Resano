import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { AlumnosRoutingModule } from './alumnos.routing.module';



@NgModule({
  declarations: [
    ListadoAlumnosComponent
  ],
  imports: [
    CommonModule,
    MaterialModuleModule,
    AlumnosRoutingModule
  ],
  exports:[ AlumnosRoutingModule, ListadoAlumnosComponent]
})
export class AlumnosModule { }
