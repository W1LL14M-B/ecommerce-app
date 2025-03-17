import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, map} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly API_URL = ' https://fakestoreapi.com/products';
  private readonly REGISTER_URL = 'http://localhost:8080/api/usuarios';
  private readonly LOGIN_URL = 'http://localhost:8080/api/usuarios/login';

  constructor(private http: HttpClient) {}



  getProducts(): Observable<any> {
    return this.http.get<any>(this.API_URL);
  }

  registerUser(userData: any): Observable<any> {
    return this.http.post<any>(this.REGISTER_URL, userData);
  }

  loginUser(credentials: any): Observable<any> {
    return this.http.post<any>(this.LOGIN_URL, credentials, { responseType: 'json' });
  }





}
