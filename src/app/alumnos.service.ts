import { Injectable } from '@angular/core';
import { Alumnos } from './alumnos';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  usuario = localStorage.getItem('usuario');

  
  private alumnosUrl=  "https://62a61d0e430ba53411d14cbe.mockapi.io/api/Alumnos";

  constructor(private http: HttpClient) { }

  //Metodo get para que traiga todos los alumnos y cargar la lista
  getAll():Observable<Alumnos[]>{
    return this.http.get<Alumnos[]>(this.alumnosUrl).pipe(
      tap(data=> console.log('Ejecución sin errores ')),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Ocurrió un error';
    
    return throwError(errorMessage);
  }
}
