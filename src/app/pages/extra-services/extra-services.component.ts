import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../layouts/admin-layout/admin.service';
import { Service } from '../../models/service';

@Component({
  selector: 'app-extra-services',
  templateUrl: './extra-services.component.html',
  styleUrls: ['./extra-services.component.css']
})
export class ExtraServicesComponent implements OnInit {

  items: Service[];

  constructor( private _adminService: AdminService) {

    this._adminService.getServices().subscribe(
                      (resp:Service[]) => {
                        this.items = resp;

                        this.items.forEach((element,index) => {
                            if(element.name == 'piscina') this.items[index].icono = 'nc-support-17';
                            else if (element.name == 'Masajes') this.items[index].icono = 'nc-tap-01';
                            else if (element.name == 'tour') this.items[index].icono = 'nc-bus-front-12';
                            else if (element.name == 'souvenir') this.items[index].icono = 'nc-cart-simple';

                        });

                        console.log(this.items);
                      }
    );
   }

  ngOnInit(): void {
  }

}

export const Data: any[] = [
  { name: 'piscina',   price: 3,   status: 'activo', ico: 'nc-support-17',     description: 'Piscina Playera' },
  { name: 'masajes',   price: 20,  status: 'activo', ico: 'nc-tap-01',         description: 'Masajes de cuerpo completo' },
  { name: 'paseos',    price: 10,  status: 'activo', ico: 'nc-bus-front-12',   description: 'Tour por lugares turisticos' },
  { name: 'souvenir',  price: 0,   status: 'inactivo', ico: 'nc-cart-simple',  description: 'Recuerdos de nuestra autoria' }
]