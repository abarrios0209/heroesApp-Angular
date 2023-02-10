import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor( private http: HttpClient ) { }

  getHeroesU():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/characters?apikey=4f4a1ff389431095e3a1ef82ac90972b`)
  }

  getHeroePorIdU(id:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}characters/${id}?apikey=4f4a1ff389431095e3a1ef82ac90972b`)
  }

  getSugerenciasU(termino:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}characters?nameStartsWith=${termino}&apikey=4f4a1ff389431095e3a1ef82ac90972b`)
  }

  getComicsData(url:string):Observable<any>{
    return this.http.get<any>(`${url}?apikey=4f4a1ff389431095e3a1ef82ac90972b`)
  }

}
