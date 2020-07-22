import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { MaterialModule } from '../shared/material.module';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './user.service';

// const routes: Route[] = [
//   {
//     path: '',
//     component: UserListComponent,
//   },
//   {
//     path: 'edit/:id',
//     component: UserEditComponent,
//   },
//   {
//     path: 'add',
//     component: UserCreateComponent,
//   },
// ];

@NgModule({
  declarations: [
    UserCreateComponent,
    UserEditComponent,
    UserListComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    // RouterModule.forChild(routes),
    UserRoutingModule,
    MaterialModule
  ],
  providers: [UserService],
  exports: [
    // RouterModule
  ],
})
export class UserModule {}
