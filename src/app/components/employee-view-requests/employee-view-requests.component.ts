import { Component, OnInit } from '@angular/core';
import { RequestInfoServiceService } from 'src/app/services/requestInfo/request-info-service.service';
import { BookRequest } from 'src/app/models/bookRequest';

@Component({
  selector: 'app-employee-view-requests',
  templateUrl: './employee-view-requests.component.html',
  styleUrls: ['./employee-view-requests.component.css']
})
export class EmployeeViewRequestsComponent implements OnInit {

  constructor(private getRequests: RequestInfoServiceService) { }

  ngOnInit(): void {
    this.getRequest();
  }

  requests?: BookRequest[];

  getRequest() {
    this.getRequests.getAllRequestList().subscribe(
      response => {
        this.requests = response;
        console.log(response);
      } 
    )
  }


}
