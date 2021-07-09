import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  private url = 'https://hotel-86b0a-default-rtdb.firebaseio.com';

  constructor( private _http: HttpClient) { }


  getVendor( id: string ){
    return this._http.get(`${this.url}/proveedor/${id}.json`);
  }

}
