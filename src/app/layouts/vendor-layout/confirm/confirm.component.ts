import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  @Output() confirm = new EventEmitter<boolean>();
  @Output() codigo = new EventEmitter<any>();  

  constructor( private _vendorService: VendorService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    
    if(form.valid == true ){

      var codigo = form.value;

      console.log(codigo);

      //this._vendorService.getVendor()
      
      this.codigo.emit = form.value;      
      
      //this.confirm.emit(true);
    }
    
  }

  noSubmit(){
    this.confirm.emit(true);
  }

}
