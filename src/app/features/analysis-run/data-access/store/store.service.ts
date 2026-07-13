import { inject, Service, signal } from '@angular/core';
import { AnalysisStatusKey, PendingAnalysis } from '../analysis-run.model';
import { LoggerService } from '@app/core/logging/logger.service';

@Service()
export class StoreService {
  private readonly logger = inject(LoggerService);

  pendingAnalysis = signal<PendingAnalysis | null>(null);
  showModal = signal<boolean>(false);
  isBusy = signal<boolean>(false);
  progress = signal<AnalysisStatusKey | null>(null);
  result = signal<string | null>(null);
  error = signal<string | null>(null);

  resetState(): void {
    this.pendingAnalysis.set(null);
    this.showModal.set(false);
    this.isBusy.set(false);
    this.progress.set(null);
    this.result.set(null);
    this.error.set(null);
    this.logger.info('Store Service reset state');
  }
}
