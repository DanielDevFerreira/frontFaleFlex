import { NgModule } from '@angular/core';
import { CreatePhoneExtensionComponent } from './create-phone-extension/create-phone-extension.component';
import { SearchPhoneExtensionComponent } from './search-phone-extension/search-phone-extension.component';
import { PhoneExtensionRoutingModule } from './phone-extension-routing.modules';

@NgModule({
  declarations: [
    CreatePhoneExtensionComponent,
    SearchPhoneExtensionComponent
  ],
  imports: [
    PhoneExtensionRoutingModule
  ]
})
export class PhoneExtensionModule { }
