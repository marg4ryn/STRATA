import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmOperationModal } from './confirm-operation-modal.component';

describe('ConfirmOperationModal', () => {
  let component: ConfirmOperationModal;
  let fixture: ComponentFixture<ConfirmOperationModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmOperationModal],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmOperationModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
