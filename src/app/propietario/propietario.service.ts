import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Propietario } from './propietario';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {

  private apiURL = "http://localhost:8000/api/propietario/";

  httpOptions = {
     headers: new HttpHeaders({
       'Content-Type': 'application/json'
     })
  }

  constructor(private httpClient: HttpClient) { }


  getAll(): Observable<Propietario[]> {
   return this.httpClient.get<Propietario[]>(this.apiURL)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 create(propietario): Observable<Propietario> {
   return this.httpClient.post<Propietario>(this.apiURL, JSON.stringify(propietario), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 find(id): Observable<Propietario> {
   return this.httpClient.get<Propietario>(this.apiURL + id)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 update(id, propietario): Observable<Propietario> {
   return this.httpClient.put<Propietario>(this.apiURL + id, JSON.stringify(propietario), this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 delete(id){
   return this.httpClient.delete<Propietario>(this.apiURL + id, this.httpOptions)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 errorHandler(error) {
   let errorMessage = '';
   if(error.error instanceof ErrorEvent) {
     errorMessage = error.error.message;
   } else {
     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
   }
   return throwError(errorMessage);
 }

}
