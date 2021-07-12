import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  //private url = 'http://localhost/hotel/TablaProveedor';
  private url = 'https://vnzlarodo2.000webhostapp.com/hotel/TablaProveedor/';

  constructor( private _http: HttpClient) { }


  getVendor( id: string ){
    return this._http.get(`${this.url}/?id=${id}`);
  }

}
