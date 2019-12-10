import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-groupicon',
  templateUrl: './groupicon.component.html',
  styleUrls: ['./groupicon.component.less']
})
export class GroupiconComponent implements OnInit {

  @Input() title: string

  constructor() { }

  ngOnInit() {
  }

}
