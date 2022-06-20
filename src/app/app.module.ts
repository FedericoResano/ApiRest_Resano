import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NombrePipe } from './nombre.pipe';
import { SharedModule } from './shared/shared.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { MaterialModuleModule } from './material-module/material-module.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NombrePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AlumnosModule,
    MaterialModuleModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    AppRoutingModule,
    MatButtonModule,
    MatSelectModule,
    MatNativeDateModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
