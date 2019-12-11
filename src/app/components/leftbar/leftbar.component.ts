import { Component, OnInit } from '@angular/core';
import { groupList } from 'src/app/class/leftbar';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.less']
})
export class LeftbarComponent implements OnInit {

  public groupBox: Array<groupList> = [
    {
      title: 'icon1',
      active: true
    },
    {
      title: 'icon2',
      active: false
    }
    ,{
      title: 'icon3',
      active: false
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  public setGroup(): void {
    console.log(this.groupBox);
  }

  public testClick(i: number): void {
    this.groupBox = this.groupBox.map((val, index) => {
      if (i === index) {
        val.title = `active${i}`;
        val.active = true;
      } else {
        val.title = `icon${index}`;
        val.active = false;
      }
      return val;
    })
  }

}
