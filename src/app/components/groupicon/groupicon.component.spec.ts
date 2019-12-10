import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupiconComponent } from './groupicon.component';

describe('GroupiconComponent', () => {
  let component: GroupiconComponent;
  let fixture: ComponentFixture<GroupiconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupiconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
