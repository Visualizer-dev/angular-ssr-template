import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './main.client';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
