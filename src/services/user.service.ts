import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ApiService } from './api.service';




const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Basic YWRtaW46MTIzNA==',// Basic
    'Accept': '/'

  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService) {

   }

siginUser(data:any) {
    return this.api.post('suplecomerce/logar_user', data, httpOptions);
}
allFrases() {
  return this.api.get('novafrase', false, httpOptions);
}
newFrase(data:any) {
  return this.api.post('novafrase', data, httpOptions);
}
}
