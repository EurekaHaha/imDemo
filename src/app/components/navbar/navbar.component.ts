import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  private list: Array<String> = ['黑',' 猫', '头', '寿', '司'];

  constructor() { }

  ngOnInit() {
  }

}
