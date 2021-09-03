import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/models/purchase';
import { PurchaseInfoService } from 'src/app/services/purchaseInfo/purchase-info.service';

@Component({
  selector: 'app-employee-purchases',
  templateUrl: './employee-purchases.component.html',
  styleUrls: ['./employee-purchases.component.css']
})
export class EmployeePurchasesComponent implements OnInit {

  constructor(private getPurchases: PurchaseInfoService) {}

  ngOnInit(): void {
    this.getPurchase();
  }

  purchases?: Purchase[];
  id?: any;

  changeBoolean(purchase:Purchase) {
    if(purchase.book.flag){
      purchase.book.flag = false;
    }else {
      purchase.book.flag = true;
    }
  }

  getTokenId() {
      this.id = sessionStorage.getItem("token");
      var splitted = this.id.split(':', 1);
      return splitted[0];
  }

  getPurchase() {
    this.getPurchases.getAllPurchasesList().subscribe(
      response => {
        response.forEach(item=>item.book.dataTarget = "#" + item.book.id)
        this.purchases = response;
        console.log(response)
      }
    )
  }
}
