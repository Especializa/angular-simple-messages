import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesAreaComponent } from './messages-area.component';

describe('MessagesAreaComponent', () => {
  let component: MessagesAreaComponent;
  let fixture: ComponentFixture<MessagesAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
