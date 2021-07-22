import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceChartsComponent } from './experience-charts.component';

describe('ExperienceChartsComponent', () => {
  let component: ExperienceChartsComponent;
  let fixture: ComponentFixture<ExperienceChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
