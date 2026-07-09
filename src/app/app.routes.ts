import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard';
import { StudentlistComponent } from './studentlist/studentlist';
import { AddstudentComponent } from './addstudent/addstudent';
import { ProfileComponent } from './profile/profile';

export const routes: Routes = [

  {
    path:'dashboard',
    component: DashboardComponent,

    children:[

      {
        path:'students',
        component: StudentlistComponent
      },

      {
        path:'add-student',
        component: AddstudentComponent
      }

    ]
  },

  {
    path:'profile',
    component:ProfileComponent
  },

  {
    path:'profile/:id',
    component:ProfileComponent
  },

  {
    path:'',
    redirectTo:'dashboard',
    pathMatch:'full'
  }

];