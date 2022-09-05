import { Alert } from './../../modal/alert';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {NgbAlert} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input('alert') alert: any = {type: '', message: ''}

  @ViewChild('selfClosingAlert', {static: false}) selfClosingAlert: NgbAlert;

  constructor() { }

  ngOnInit(): void {
    this.selfClosingAlert.close();
  }

}
