import { Routes } from "@angular/router";
import { AppComponent } from './app.component'

import { AuthGuard } from "./services/auth-gaurd.service";

export const appRoutes: Routes = [
  { path: 'user/:id', component: AppComponent, canActivate: [AuthGuard] },
  { path: "**", component: AppComponent }
];
