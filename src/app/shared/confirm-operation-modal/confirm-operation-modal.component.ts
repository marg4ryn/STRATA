import { Component, input, output } from '@angular/core';
import { ButtonDirective } from '../button-directive/button.directive';
import { A11yModule } from '@angular/cdk/a11y';

@Component({
  selector: 'app-confirm-operation-modal',
  imports: [ButtonDirective, A11yModule],
  templateUrl: './confirm-operation-modal.component.html',
  styleUrl: './confirm-operation-modal.component.scss',
})
export class ConfirmOperationModal {
  label = input<string>('This operation cannot be undone. Are you sure?');

  cancel = output<void>();
  confirm = output<void>();

  onCancel(): void {
    this.cancel.emit();
  }

  onConfirm(): void {
    this.confirm.emit();
  }
}
