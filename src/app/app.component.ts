import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Assessment';
  apiData: object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData().subscribe(data => {
      this.apiData = data;
      console.log(data);
    });
  }

  getData() {
    console.log('check');
  }
}
