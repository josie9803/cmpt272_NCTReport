import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PersonAddFormComponent } from './person-add-form/person-add-form.component';
import { RoutingModule } from './routing.module';
import { PersonViewComponent } from './person-view/person-view.component';
import { MapComponent } from './map/map.component';
import { CountLocationPipe } from './count-location.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PeopleListComponent,
    PersonAddFormComponent,
    PersonViewComponent,
    MapComponent,
    CountLocationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
