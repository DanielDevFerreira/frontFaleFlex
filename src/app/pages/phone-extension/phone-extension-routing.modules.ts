import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePhoneExtensionComponent } from './create-phone-extension/create-phone-extension.component';
import { SearchPhoneExtensionComponent } from './search-phone-extension/search-phone-extension.component';


const routes: Routes = [
  {
    path: 'search-phone-extension', component: SearchPhoneExtensionComponent
  },
  {
    path: 'create-phone-extension', component: CreatePhoneExtensionComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhoneExtensionRoutingModule { }