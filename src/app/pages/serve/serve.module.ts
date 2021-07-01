import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CreateServeComponent } from './create-serve/create-serve.component';
import { SearchServeComponent } from './search-serve/search-serve.component';
import { ServeRoutingModule } from './serve-routing.modules';

@NgModule({
  declarations: [
    CreateServeComponent,
    SearchServeComponent
  ],
  imports: [
    ServeRoutingModule,
    SharedModule
  ]
})
export class ServeModule { }
