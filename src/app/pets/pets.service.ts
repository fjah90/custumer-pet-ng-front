import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Pet } from './pets.interface';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private apiURL = "https://jsonplaceholder.typicode.com";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Pet[]> {
    return this.httpClient.get<Pet[]>(this.apiURL + '/pets/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(pet: Pet): Observable<Pet> {
    return this.httpClient.post<Pet>(this.apiURL + '/pets/', JSON.stringify(pet), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  find(id: string): Observable<Pet> {
    return this.httpClient.get<Pet>(this.apiURL + '/pets/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id: string, pet: Pet): Observable<Pet> {
    return this.httpClient.put<Pet>(this.apiURL + '/pets/' + id, JSON.stringify(pet), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id: string) {
    return this.httpClient.delete<Pet>(this.apiURL + '/pets/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}