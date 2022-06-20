import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path:'alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then(m => m.AlumnosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
