import { Injectable } from '@angular/core';
import { Product } from '../product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from '../messages/message.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  //private frase: Frase = { value: "", icon_url: "", id: "", url: "" };
  private url = ""; // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService) { }

  public getProducto(referencia: string): Observable<Product> {
    this.url="http://localhost:8080/ServerD/api/producto?ref="+referencia;
    return this.http.get<Product>(this.url)
    .pipe(
      tap(_ => this.log('fetched hero id=${referencia}')),
      catchError(this.handleError<Product>('getHero id=${referencia}'))
    );
  }

  public getProductos(): Observable<Product[]> {
    this.url="http://localhost:8080/ServerD/api/producto";
    
    return this.http.get<Product[]>(this.url)
      .pipe(
        tap(_ => this.log('fetched productos')),
        catchError(this.handleError<Product[]>('getProductos', []))
      );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log('${operation} failed: ${error.message}');

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

private log(message: string) {
  this.messageService.add('ProductService: ${message}');
}

}
