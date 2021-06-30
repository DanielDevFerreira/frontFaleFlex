import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardsComponent } from './dashboards/dashboards.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardsComponent
  },
  {
    path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: 'serve', loadChildren: () => import('./serve/serve.module').then(m => m.ServeModule)
  },
  {
    path: 'phone-extension', loadChildren: () => import('./phone-extension/phone-extension.module').then(m => m.PhoneExtensionModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }