import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldMessagesComponent } from './old-messages.component';

describe('OldMessagesComponent', () => {
  let component: OldMessagesComponent;
  let fixture: ComponentFixture<OldMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
