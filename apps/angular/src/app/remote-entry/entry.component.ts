import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'lmsweb-angular-entry',
  template: `<lmsweb-nx-welcome></lmsweb-nx-welcome>`,
})
export class RemoteEntryComponent {}
