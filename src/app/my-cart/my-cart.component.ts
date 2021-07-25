import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cart',
  templateUrl: './my-cart.component.html',
  styleUrls: ['./my-cart.component.css']
})
export class MyCartComponent implements OnInit {
  itemcartArray:any = [];
  constructor() { }

  ngOnInit(): void {
    var x = localStorage.getItem("localItemArray")
    if(x!=null){
      this.itemcartArray = JSON.parse(x);
      console.log(this.itemcartArray);
      
    }

   
  }

}
