import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-single',
  templateUrl: './register-single.component.html',
  styleUrls: ['./register-single.component.css']
})
export class RegisterSingleComponent implements OnInit {

  modalRef: BsModalRef;
  message: string;

  constructor(
    private modalService: BsModalService,
    private router: Router
    ) { }
  

  ngOnInit(): void {
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }
  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
    this.router.navigate(['home']);
  }

}
