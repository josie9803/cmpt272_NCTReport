import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonAddFormComponent } from './person-add-form/person-add-form.component';
import { PersonViewComponent } from './person-view/person-view.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes:Routes = [
  { path: 'people', component: PeopleListComponent },
  { path: 'person/add', component: PersonAddFormComponent },
  { path: 'person/:id', component: PersonViewComponent },
  { path: '', redirectTo: '/people', pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
