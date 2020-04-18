import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheduleGeneratorComponent } from './shedule-generator.component';

describe('SheduleGeneratorComponent', () => {
  let component: SheduleGeneratorComponent;
  let fixture: ComponentFixture<SheduleGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheduleGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheduleGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
