import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-health-check',
  templateUrl: './health-check.component.html',
  styleUrls: ['./health-check.component.css']
})
export class HealthCheckComponent implements OnInit {

  public result: Result; 

  constructor(private httpClient: HttpClient, @Inject('BASE_URL') private baseUrl: string) { 
  }

  ngOnInit() {
    this.httpClient.get<Result>(this.baseUrl + 'hc').subscribe(result => {
      this.result = result;
      }, error => console.error(error));
  }

}

//result message
interface Result {
  checks: Check[];
  totalStatus: string;
  totalResponseTime: number;
}

//single service response
interface Check {
  name: string;
  status: string;
  responseTime: number;
}