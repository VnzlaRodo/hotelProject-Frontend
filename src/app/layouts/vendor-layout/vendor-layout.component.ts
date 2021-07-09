import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-layout',
  templateUrl: './vendor-layout.component.html',
  styleUrls: ['./vendor-layout.component.css']
})
export class VendorLayoutComponent implements OnInit {

  confirm: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  confirmaProveedor( argumento: boolean ){
    this.confirm = argumento;
    
  }

  getCodigo( argumento: any ){
    console.log("asd");
  }

}
