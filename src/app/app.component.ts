import { Component, OnInit } from '@angular/core';
import {trigger, transition, style, animate, query, stagger} from '@angular/animations';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'Breaking News';
  apiData: object;
  length = 0

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData().subscribe(data => {
      this.apiData = data;
      this.length = Object.keys(this.data).length;
      console.log(data);
    });
  }

  getData() {
    console.log('check');
  }
  readMore(path) {
    window.open(path, '_blank');
  }
}
