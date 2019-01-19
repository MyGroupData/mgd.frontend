import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UpdateUserComponent} from './update-user/update-user.component'
import {ShowUsersComponent} from './show-users/show-users.component'

const routes: Routes = [
  {path:'update_user', component: UpdateUserComponent},
  {path:'users', component: ShowUsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
