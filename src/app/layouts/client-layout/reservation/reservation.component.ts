import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Habitation } from '../../../models/habitation';
import { TypeHabitation } from '../../../models/typehabitation';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  habitations: TypeHabitation[];
  
  constructor( public _clientService: ClientService ) { 

    _clientService.getTypeHabitation()
                      .subscribe( resp => {
                        this.habitations = resp;
                        console.log(resp);
                      });

  }

  ngOnInit(): void {
  }

}
