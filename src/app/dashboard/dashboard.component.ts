import { Component, OnInit } from '@angular/core';
import {EditModalComponent} from '../modal/edit-modal/edit-modal.component';
import {CreateModalComponent} from '../modal/create-modal/create-modal.component'
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  studentArray:any = [];
  studentNumber:any;
  studentName:any;
  studentStd:any;

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void { 
    var x = localStorage.getItem("storageArray");
    if(x!=null){
     this.studentArray=JSON.parse(x);
    }
  }
  tryDelete(i:any){
    console.log(i);
    this.studentArray.splice(i,1);
    localStorage.setItem("storageArray" , JSON.stringify(this.studentArray) )
  }

  editStudent(student:any,i:number){
    console.log(student);
    
    const modalRef = this.modalService.open(EditModalComponent);
    modalRef.componentInstance.rollNumber = student.Rollnumber;
    modalRef.componentInstance.Name = student.Name;
    modalRef.componentInstance.standard = student.standard; 
    modalRef.componentInstance.emitService.subscribe((result:any)=>{
      console.log(result);
      this.studentArray.splice(i,1,result);
      localStorage.setItem("storageArray" , JSON.stringify(this.studentArray) )
      modalRef.close();

    });
      
    }                     
    addStudent(){
      const addModal = this.modalService.open(CreateModalComponent);
      addModal.componentInstance.emitService.subscribe((result:any)=>{
        console.log(result);
        this.studentArray.push(result);
        localStorage.setItem("storageArray", JSON.stringify(this.studentArray));
        addModal.close();
      })

    }
}
