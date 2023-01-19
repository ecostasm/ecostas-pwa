import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {Image} from '../models/image.interface';


@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  getAllImages():Observable<Image[]>{
    return this.http.get<Image[]>('https://thronesapi.com/api/v2/Characters');
  }

  getImageById(id:String):Observable<Image>{
    return this.http.get<Image>('https://thronesapi.com/api/v2/Characters/'+id);
  }
}
