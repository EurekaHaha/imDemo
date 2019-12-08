import { Component, OnInit } from '@angular/core';
import { docList } from '../../class/navbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  private list: Array<docList> = [
    {
      id: 0,
      title: '黑猫头寿司',
      link: '/blackHeadCat0'
    },
    {
      id: 1,
      title: '黑猫头狗带',
      link: 'blackHeadCat1'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}