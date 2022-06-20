import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AlumnosModule } from '../alumnos/alumnos.module';
import { MaterialModuleModule } from '../material-module/material-module.module';



@NgModule({
  declarations: [
    SidebarComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    AlumnosModule,
    MaterialModuleModule
  ],
  exports:[SidebarComponent, ToolbarComponent]
})
export class SharedModule { }
