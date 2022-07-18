import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL = 'https://sheet.best/api/sheets/e11faad7-d21b-4c65-b871-9920cef4ede3';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      //'Token': '12356'//
    })
  }

  constructor(private httpClient: HttpClient) { }

  //C.R.U.D - CREATE, READ, UPDATE, DELETE

  //Retorna a lista de usuarios READ

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiURL)
  }

  //Salva usuario no banco CREATE 
  postUsers(User: User): Observable<User> {
    return this.httpClient.post<User>(this.apiURL, User, this.httpOptions)
  }

  //Exclui o usuario do banco DELETE

  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(`${this.apiURL}/id/${id}`);
  }

  //Edita usuario UPDATE
  updateUser(id: string, user: User):Observable<User> {
    return this.httpClient.put<User>(`${this.apiURL}/id/${id}`, user, this.httpOptions);
  }

  //lista usuario unico
  getUser(id: string):Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiURL}/id/${id}`)
  }
}
