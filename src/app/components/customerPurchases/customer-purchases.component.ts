import { Component, OnInit } from '@angular/core';
import { PurchaseInfoService } from '../../services/purchaseInfo/purchase-info.service';
import { Purchase } from '../../models/purchase';


@Component({
  selector: 'app-customer-purchases',
  templateUrl: './customer-purchases.component.html',
  styleUrls: ['./customer-purchases.component.css']
})
export class CustomerPurchasesComponent implements OnInit {

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
      console.log(splitted[0])
      return splitted[0];
  }

  getPurchase() {
    this.getPurchases.getPurchaseList(this.getTokenId()).subscribe(
      response => {
        response.forEach(item=>item.book.flag=false)
        this.purchases = response;
        // this.onGetShop.emit();
        console.log(this.purchases);
      }
    )
  }

}
