import { NgModule } from '@angular/core';
import { CreateUserComponent } from './create-user/create-user.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { UserRoutingModule } from './user-routing.modules';


@NgModule({
  declarations: [
    SearchUserComponent,
    CreateUserComponent,
  ],
  imports: [
    UserRoutingModule
  ]
})
export class UserModule { }
