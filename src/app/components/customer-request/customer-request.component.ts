import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/requestBook/request.service';

@Component({
  selector: 'app-customer-request',
  templateUrl: './customer-request.component.html',
  styleUrls: ['./customer-request.component.css']
})
export class CustomerRequestComponent implements OnInit {

  constructor(private requestService: RequestService) { }

  ngOnInit(): void {
  }

  request = {
    title: '',
    author: ''
  }

  requestBook() {
    
    this.requestService.request(this.request.title, this.request.author).subscribe()
  }
}
