import { Injectable } from '@angular/core';
import { Computer } from '../models/computer';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ComputerServiceService {
  brand: string[] = ['Dell', 'Asus', 'Acer', 'HP', 'Lenovo']
  api: string = 'http://localhost:3000/computers';
  computer: Computer;

  constructor(private httpClient: HttpClient) { }
  all(): Observable<Computer[]> {
    return this.httpClient.get<Computer[]>(this.api).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }
  edit(computer: Computer): Observable<Computer> {
    return this.httpClient.put<Computer>(this.api + '/' + computer.id, Computer).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }


  getId(id: number): Observable<Computer> {
    return this.httpClient.get<Computer>(this.api + '/' + id).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


}


