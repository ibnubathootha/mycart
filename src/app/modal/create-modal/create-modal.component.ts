import { Component, OnInit , EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-create-modal',
  templateUrl: './create-modal.component.html',
  styleUrls: ['./create-modal.component.css']
})
export class CreateModalComponent implements OnInit {

  studentRollNumber:any;
  studentName:any;
  studentSubject:any;
  @Output() emitService = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  addStudent(){
    var student = {"Rollnumber": this.studentRollNumber , "Name": this.studentName ,
    "standard":this.studentSubject}
    this.emitService.next(student);
    
  }
}
