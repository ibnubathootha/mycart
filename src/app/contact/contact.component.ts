import { Component, OnInit } from '@angular/core';
import {CommonAppService} from '../common-app.service'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  itemArray:any = [];
  addItemArray:any = [];

  constructor(private sharedService: CommonAppService) { }

  ngOnInit(): void {
    this.sharedService.getDataFromAPI().subscribe(data=>{
      console.log(data);
      this.itemArray = data;
      var x = localStorage.getItem("localItemArray");
      if (x!=null){
        this.addItemArray = JSON.parse(x);
      }
    })
  }
  addCartArray(a:any,b:any,c:any){
    this.addItemArray.push({title:a,price:b,imageUrl:c});
    localStorage.setItem( "localItemArray",JSON.stringify(this.addItemArray));
    
  }

}
