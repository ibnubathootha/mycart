import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.css']
})
export class EditModalComponent implements OnInit {
  @Input() rollNumber?: string;
  @Input() Name?: string;
  @Input() standard?: string;
  @Output() emitService = new EventEmitter();


  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.rollNumber);
    
  }
  editStudent(){
    var studentUpdatedDetails = {Rollnumber:this.rollNumber,Name:this.Name,standard:this.standard};
    console.log(studentUpdatedDetails);
    this.emitService.next(studentUpdatedDetails);

  }


}
