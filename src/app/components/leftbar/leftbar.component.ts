import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.less']
})
export class LeftbarComponent implements OnInit {

  public groupBox: Array<string> = [
    'icon1',
    'icon2',
    'icon3'
  ]

  constructor() { }

  ngOnInit() {
  }

}
