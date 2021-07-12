import { Component, OnInit } from '@angular/core';
import { Habitation } from 'app/models/habitation';
import { AdminService } from '../../layouts/admin-layout/admin.service';
import { TypeHabitation } from '../../models/typehabitation';

@Component({
  selector: 'app-habitation',
  templateUrl: './habitation.component.html',
  styleUrls: ['./habitation.component.css']
})
export class HabitationComponent implements OnInit {

  items: Habitation[];
  typeHabitations: TypeHabitation[];

  constructor( private _adminService: AdminService) { 
    
    this._adminService.getTypeHabitations().subscribe(
      (resp:TypeHabitation[]) => {
        this.typeHabitations = resp;                
      }
      );

      this._adminService.getHabitations().subscribe(
                    (resp:Habitation[]) => {
                      
                      this.items = this.filterHabitations(resp);
                      console.log(this.items);
                    }
      );
   }

  ngOnInit(): void {
  }

  filterHabitations( habitations: Habitation[]){   

    this.typeHabitations.forEach(elementType => {
        
      habitations.forEach((element,index) => {

        if (element.id_room_type == elementType.id) habitations[index].id_room_type = elementType.name;

      });
    });

    return habitations;
  }

}

export const Data: any[] = [
  { id: '123',  type: 'duplex',        price: 36.738,  status: 'limpia',          num: '1' },
  { id: '456',  type: 'duplex',        price: 23.789,  status: 'ocupada',         num: '2' },
  { id: '789',  type: 'duplex',        price: 36.738,  status: 'mantenimiento',   num: '3' },
  { id: '101',  type: 'duplex',        price: 56.142,  status: 'limpia',          num: '4' },
  { id: '102',  type: 'duplex',        price: 38.735,  status: 'mantenimiento',   num: '5' },
  { id: '103',  type: 'duplex',        price: 36.738,  status: 'desocupada',      num: '6' },
  { id: '104',  type: 'matrimonial',   price: 36.738,  status: 'limpia',          num: '7' },
  { id: '105',  type: 'matrimonial',   price: 56.142,  status: 'mantenimiento',   num: '8' },
  { id: '106',  type: 'matrimonial',   price: 36.738,  status: 'limpia',          num: '9' },
  { id: '107',  type: 'matrimonial',   price: 36.738,  status: 'ocupada',         num: '10' },
  { id: '108',  type: 'matrimonial',   price: 23.789,  status: 'limpia',          num: '11' },
  { id: '109',  type: 'matrimonial',   price: 36.738,  status: 'mantenimiento',   num: '12' },
  { id: '110',  type: 'matrimonial',   price: 38.735,  status: 'desocupada',      num: '13' },
  { id: '111',  type: 'matrimonial',   price: 78.615,  status: 'ocupada',         num: '14' }

]