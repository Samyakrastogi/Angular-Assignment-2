import { Component, OnInit } from '@angular/core';
import {TransactiondetailsService} from '../transactiondetails.service';

@Component({
  selector: 'app-paymentscreen',
  templateUrl: './paymentscreen.component.html',
  styleUrls: ['./paymentscreen.component.css']
})
export class PaymentscreenComponent implements OnInit {
  public tdetails = [{
    Sno : "",
    date : "",
    time : "",
    amount : "",
    tranid : "",
    condition : ""
  }]

  constructor(private element :TransactiondetailsService) { }

  ngOnInit() {
    this.element.getdetails().subscribe(res =>{
      this.tdetails = res
  })

}
}
