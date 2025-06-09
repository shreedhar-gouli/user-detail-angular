import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { UserDetailComponent } from './users/user-detail-component/user-detail.component';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [UserDetailComponent, CommonModule],
  template: `
<app-user-detail></app-user-detail>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, { providers: [provideHttpClient()] });
