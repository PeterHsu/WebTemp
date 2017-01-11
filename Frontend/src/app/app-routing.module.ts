import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalComponent }   from './portal/portal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  { path: '', redirectTo: '/portal', pathMatch: 'full' },
  { path: 'portal',  component: PortalComponent },
  { path: 'dashboard',  component: DashboardComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}