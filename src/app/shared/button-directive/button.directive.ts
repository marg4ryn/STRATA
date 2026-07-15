import { Directive, HostBinding, input } from '@angular/core';

@Directive({
  selector: 'button[btn]',
  host: { class: 'btn' },
})
export class ButtonDirective {
  variant = input<'primary' | 'secondary' | 'danger'>('primary', { alias: 'btn' });

  @HostBinding('class')
  get variantClass() {
    return `btn btn--${this.variant()}`;
  }
}
