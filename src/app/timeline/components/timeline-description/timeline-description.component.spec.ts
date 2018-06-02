import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineDescriptionComponent } from './timeline-description.component';

describe('TimelineDescriptionComponent', () => {
  let component: TimelineDescriptionComponent;
  let fixture: ComponentFixture<TimelineDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimelineDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
