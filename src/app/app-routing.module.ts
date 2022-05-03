import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './employees/employee-register/add-user.component';
import { DeleteUserComponent } from './employees/employees-delete/delete-user.component';
import { EditUserComponent } from './employees/employees-user/edit-user.component';
import { ListUsersComponent } from './employees/employees-list/list-users.component';
import { ViewUserComponent } from './employees/employees-view/view-user.component';

const routes: Routes = [
  {
    path: 'users',
    children: [
      { path: '', component: ListUsersComponent },
      { path: 'list', component: ListUsersComponent },
      { path: 'employeesss/:id', component: DeleteUserComponent },
      { path: 'employeess/:id', component: EditUserComponent },
      { path: 'employees/:id', component: ViewUserComponent },
      { path: 'employee/register', component: AddUserComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
