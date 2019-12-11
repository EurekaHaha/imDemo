import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-groupicon',
  templateUrl: './groupicon.component.html',
  styleUrls: ['./groupicon.component.less']
})
export class GroupiconComponent implements OnInit {

  @Input() title: string
  @Input() active: boolean;

  // 子传父
  @Output()
  public isActive = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public activeThis(): void {
    console.log('点击事件');
    this.title = 'i am active';
    this.isActive.emit('yahaha');
  }

}
