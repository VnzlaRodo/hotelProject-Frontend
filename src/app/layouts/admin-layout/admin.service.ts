import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = 'https://vnzlarodo2.000webhostapp.com/hotel';
  //private url = 'http://localhost/hotel';
  
  
  constructor( private _http: HttpClient ) { }

  getTypeHabitations(){

    return this._http.get(`${ this.url }/TablaTipo_Habitacion/`);
  }

  getTypeHabitation( id: string ){
    return this._http.get(`${this.url}/TablaTipo_Habitacion/?id=${id}`);
  }

  getHabitations(){
    return this._http.get(`${ this.url }/TablaHabitaciones/`);
  }

  getHabitation( id: string ){
    return this._http.get(`${this.url}/TablaHabitaciones/?id=${id}`);
  }

  getServices(){

    return this._http.get(`${ this.url }/TablaServicio/`);                  
  }

  getService( id: string ){
    return this._http.get(`${this.url}/TablaServicio/?id=${id}`);
  }

  getVendors(){

    return this._http.get(`${ this.url }/TablaProveedor/`);                  
  }
  getVendor( id: string ){
    return this._http.get(`${this.url}/TablaProveedor/?id=${id}`);
  }

  getClients(){

    return this._http.get(`${ this.url }/TablaClientes/`);
  }

  getClient( id: string ){
    return this._http.get(`${this.url}/TablaClientes/?id=${id}`);
  }

  getReservations(){

    return this._http.get(`${ this.url }/TablaReservacion/`);
  }

  getReservation( id: string ){
    return this._http.get(`${this.url}/TablaReservacion/?id=${id}`);
  }



}
