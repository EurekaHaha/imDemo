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
      title: '首页',
      link: '/',
      // isActive: true
    },
    {
      id: 1,
      title: '组',
      link: '/group',
      // isActive: false
    },
    {
      id: 2,
      title: '黑猫头寿司',
      link: '/blackHeadCat0',
      // isActive: false
    },
    {
      id: 3,
      title: '黑猫头狗带',
      link: '/blackHeadCat1',
      // isActive: false
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}