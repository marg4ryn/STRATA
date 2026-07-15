import { Component, input, output, computed } from '@angular/core';
import { PendingAnalysis } from '../../data-access/analysis-run.model';
import { ButtonDirective } from '@app/shared/button-directive/button.directive';
import { ConfirmOperationModal } from '@app/shared/confirm-operation-modal/confirm-operation-modal.component';

@Component({
  selector: 'app-analysis-unfinished-modal',
  imports: [ButtonDirective, ConfirmOperationModal],
  templateUrl: './analysis-unfinished-modal.component.html',
  styleUrl: './analysis-unfinished-modal.component.scss',
})
export class AnalysisUnfinishedModal {
  pendingAnalysis = input.required<PendingAnalysis | null>();

  resume = output<void>();
  abandon = output<void>();

  showModal: boolean = false;

  analysisStartDate = computed(() => {
    const startedAt = this.pendingAnalysis()?.startedAt ?? '';
    return new Date(startedAt).toLocaleString();
  });

  targetURL = computed(() => {
    return this.pendingAnalysis()?.target.targetURL;
  });

  limitRange = computed(() => {
    return this.pendingAnalysis()?.target.limitRange;
  });

  startDate = computed(() => {
    const date = this.pendingAnalysis()?.target.range?.startDate ?? '';
    return new Date(date).toLocaleDateString();
  });

  endDate = computed(() => {
    const date = this.pendingAnalysis()?.target.range?.endDate ?? '';
    return new Date(date).toLocaleDateString();
  });

  onCancel(): void {
    this.showModal = false;
  }

  onConfirm(): void {
    this.showModal = false;
    this.abandon.emit();
  }

  resumeAnalysis(): void {
    this.resume.emit();
  }

  abandonAnalysis(): void {
    this.showModal = true;
  }
}
