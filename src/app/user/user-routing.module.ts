import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Route[] = [
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: 'edit/:identity',
    component: UserEditComponent,
  },
  {
    path: 'add',
    component: UserCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
