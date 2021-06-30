import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateServeComponent } from './create-serve/create-serve.component';
import { SearchServeComponent } from './search-serve/search-serve.component';

const routes: Routes = [
  {
    path: 'search-serve', component: SearchServeComponent
  },
  {
    path: 'create-serve', component: CreateServeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServeRoutingModule { }