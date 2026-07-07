import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisTargetForm } from './analysis-target-form';

describe('AnalysisTargetForm', () => {
  let component: AnalysisTargetForm;
  let fixture: ComponentFixture<AnalysisTargetForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalysisTargetForm],
    }).compileComponents();

    fixture = TestBed.createComponent(AnalysisTargetForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
