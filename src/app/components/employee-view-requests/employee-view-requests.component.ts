import { Component, OnInit } from '@angular/core';
import { RequestInfoServiceService } from 'src/app/services/requestInfo/request-info-service.service';
import { BookRequest } from 'src/app/models/bookRequest';
import { SearchApiService } from 'src/app/services/searchApi/search-api.service';
import { Book } from 'src/app/models/book';
import { Work } from 'src/app/models/work';
import { AddToShopService } from 'src/app/services/addToShop/add-to-shop.service';


@Component({
  selector: 'app-employee-view-requests',
  templateUrl: './employee-view-requests.component.html',
  styleUrls: ['./employee-view-requests.component.css']
})
export class EmployeeViewRequestsComponent implements OnInit {

  constructor(private requestService: RequestInfoServiceService, private searchApiService: SearchApiService, private addToShopService: AddToShopService) { }

  ngOnInit(): void {
    this.getRequest();
  }

  requests?: BookRequest[];
  books?: Work[];

  getRequest() {
    this.requestService.getAllRequestList().subscribe(
      
      response => {
        response.forEach(item => {
          item.dataTarget = '#' + item.id;
        });
        this.requests = response;
      } 
    )
  }

  rejectRequest(request: BookRequest) {
    this.requestService.rejectRequest(request).subscribe(
      response => console.log(response)
    )
  }

  getBooks(author: string, title: string) {
    this.searchApiService.searchByAuthorAndTitle(author, title).subscribe(
      response => {
        this.books = response.docs;
        console.log(response);
      }
    )
  }

  addToShop(item: Work, acceptedRequest: number) {
    
    const priceInput = Number(prompt('How much should this book cost?'));
    const inventoryInput = Number(prompt('How many of this book do you have?'));

    const completeItem = { ...item, price: priceInput, inventory: inventoryInput };
    this.requestService.approveRequest(completeItem, acceptedRequest).subscribe(
      response => {
        alert(`Successfully added ${item.title} by ${item.author_name} to the shop!`);
      }
    )
  }

}
