import { Injectable } from '@angular/core';
import { Computer } from '../models/computer';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ComputerServiceService {
  brand: string[] = ['Dell', 'Asus', 'Acer', 'HP', 'Lenovo'];
  bllbl: string[] = ['Portable', 'Fixe', 'Mini', 'Netbook'];
  categories: string[] = ['Gaming', 'Bureautique'];
  api: string = 'http://localhost:3000/computers';
  computer: Computer;

  constructor(private httpClient: HttpClient) { }
  errors(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  all(): Observable<Computer[]> {
    return this.httpClient.get<Computer[]>(this.api).pipe(
      retry(1),
      catchError(this.errors)
    );
  }
  edit(computer: Computer): Observable<Computer> {
    return this.httpClient.put<Computer>(this.api + '/' + computer.id, computer).pipe(
      retry(1),
      catchError(this.errors)
    );
  }

  getId(id: number): Observable<Computer> {
    return this.httpClient.get<Computer>(this.api + '/' + id).pipe(
      retry(1),
      catchError(this.errors)
    );
  }
  delete(computer: Computer): Observable<Computer> {
    return this.httpClient.delete<Computer>(this.api + '/' + computer.id).pipe(
      retry(1),
      catchError(this.errors)
    );
  }
  add(computer: Computer): Observable<Computer> {
    computer.inStock = new Date();
    return this.httpClient.post<Computer>(this.api, computer).pipe(
      retry(1),
      catchError(this.errors)
    );
  }


}


