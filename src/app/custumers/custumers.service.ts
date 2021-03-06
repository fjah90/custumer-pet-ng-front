import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Custumer } from './custumers.interface';

import { PetService } from '../pets/pets.service';
import { Pet } from '../pets/pets.interface';


@Injectable({
  providedIn: 'root'
})
export class CustumerService {

  private apiURL = environment.apiUri;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    private httpClient: HttpClient,
    public petService: PetService,
    ) { }

  getAll(): Observable<Custumer[]> {
    return this.httpClient.get<Custumer[]>(this.apiURL + '/custumers/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  getAllPets(custumerId: string): Observable<Pet[]> {
    console.log(custumerId);
    let res = this.httpClient.get<Pet[]>(this.apiURL + '/pets/custumer/' + custumerId, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
      console.log(res)
      return res;
  }

  find(id: string): Observable<Custumer> {
    return this.httpClient.get<Custumer>(this.apiURL + '/custumers/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  create(custumer: Custumer): Observable<Custumer> {
    return this.httpClient.post<Custumer>(this.apiURL + '/custumers/', JSON.stringify(custumer), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  update(id: string, custumer: Custumer): Observable<Custumer> {
    return this.httpClient.patch<Custumer>(this.apiURL + '/custumers/' + id, JSON.stringify(custumer), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  delete(id: string) {
    return this.httpClient.delete<Custumer>(this.apiURL + '/custumers/' + id, this.httpOptions)
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