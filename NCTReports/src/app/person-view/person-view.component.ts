import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleService } from '../people.service';
import { Md5 } from 'ts-md5';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.css']
})
export class PersonViewComponent {
  personView: any;
  id:string;
  constructor(private activedRoute: ActivatedRoute, ps: PeopleService, private router: Router) {
    this.id = activedRoute.snapshot.params['id']
    this.personView = ps.getPersonById(this.id);
  }
  onBack(){
    this.router.navigate(["/people"])
  }
  onChange(){
    const enteredPassword = window.prompt('Enter your password:');
    const expectedHash = 'fcab0453879a2b2281bc5073e3f5fe54';

    if(enteredPassword != null){
      const hashedEnteredPassword = Md5.hashStr(enteredPassword);

      if (hashedEnteredPassword  === expectedHash){
        if (this.personView.status == "OPEN"){
          this.personView.status = "RESOLVED"
        }
        else if (this.personView.status == "RESOLVED"){
          this.personView.status = "OPEN"
        }
      }

      else{
        alert('Incorrect password. Status not modified.');
      }
    }
  }

}
