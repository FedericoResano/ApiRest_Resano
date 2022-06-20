import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { ListadoAlumnosComponent } from './listado-alumnos/listado-alumnos.component';

const routes: Routes = [

    {
        path: '',
        canActivate: [AuthGuard],
        component: ListadoAlumnosComponent
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AlumnosRoutingModule { }