import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LogInComponent} from './log-in/log-in.component';
import {RegistrationComponent} from './registration/registration.component';
import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {DetailsComponent} from './details/details.component';
import {SiblingComponent} from './sibling/sibling.component';

const routes: Routes = [

  { path: 'logIn', component: LogInComponent  },
  { path: 'home', component: HomeComponent  },
  { path: 'admin', component: AdminComponent},
  { path: 'registration', component: RegistrationComponent  },
  { path: 'details', component: DetailsComponent  },
  { path: 'sibling', component: SiblingComponent  },
  {
    path: '',
    redirectTo: '/logIn',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
