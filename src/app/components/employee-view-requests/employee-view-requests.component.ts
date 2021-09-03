import { Component, OnInit } from '@angular/core';
import { RequestInfoServiceService } from 'src/app/services/requestInfo/request-info-service.service';
import { BookRequest } from 'src/app/models/bookRequest';
import { SearchApiService } from 'src/app/services/searchApi/search-api.service';

@Component({
  selector: 'app-employee-view-requests',
  templateUrl: './employee-view-requests.component.html',
  styleUrls: ['./employee-view-requests.component.css']
})
export class EmployeeViewRequestsComponent implements OnInit {

  constructor(private requestService: RequestInfoServiceService, private searchApiService: SearchApiService) { }

  ngOnInit(): void {
    this.getRequest();
  }

  requests?: BookRequest[];

  getRequest() {
    this.requestService.getAllRequestList().subscribe(
      response => {
        this.requests = response;
        console.log(response);
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
      response => console.log(response)
    )
  }


}
