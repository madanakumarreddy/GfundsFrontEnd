import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymentinfo',
  templateUrl: './paymentinfo.component.html',
  styleUrls: ['./paymentinfo.component.css']
})
export class PaymentinfoComponent implements OnInit {

	public highlight;
	public $index;
	public data;

  constructor() { }

  ngOnInit() {
  }

}
