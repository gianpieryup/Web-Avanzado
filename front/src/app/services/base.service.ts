import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment} from './../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class BaseService {
  url_server =environment.url_server;
  endpoint = "";
  constructor( private http: HttpClient) {} 

  sendEndPoint(endpoint){
    this.endpoint = endpoint;
  }
    
  
  async get(){
    try {
      return this.http.get(this.url_server + this.endpoint).toPromise();
    } catch (error) {
      throw error;
    }
  }
         
}
