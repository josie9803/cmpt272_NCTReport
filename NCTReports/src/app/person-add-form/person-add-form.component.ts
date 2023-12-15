import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { singleperson } from '../singleperson';
import { PeopleService } from '../people.service';
import { Router } from '@angular/router';
import { locationtype } from '../locationtype';

@Component({
  selector: 'app-person-add-form',
  templateUrl: './person-add-form.component.html',
  styleUrls: ['./person-add-form.component.css']
})
export class PersonAddFormComponent {
  form: FormGroup
  locationArray: locationtype[]
  selectedLocation:string="type-location"

  constructor(private router: Router, private ps: PeopleService){
    let locationGroup = new FormGroup({
      locationName: new FormControl('', [Validators.required]),
      longtitude: new FormControl(null, [Validators.required]),
      latitude: new FormControl(null, [Validators.required])
    });

    let formControls = {
      reporterName: new FormControl('',
      [
        Validators.required
      ]),
      phoneNumber: new FormControl(),
      baddieName: new FormControl(),
      location: locationGroup,
      //latitude: new FormControl(),
      //longtitude: new FormControl(),
      image: new FormControl(),
      extraInfo: new FormControl()
    }
    this.form = new FormGroup(formControls)

    this.locationArray = ps.getStoredLocations()
    console.log(this.locationArray)
    
  }
  
  onSubmit(newPerson:singleperson){
    this.ps.add(newPerson)
    this.router.navigate(["/people"])
  }

  onChange(evt:Event){
    const option = evt.target as HTMLSelectElement;
    this.selectedLocation = option.value
    if (this.selectedLocation != "type-location"){
      const selectedOption = this.locationArray.find(
        loc => loc.locationName === this.selectedLocation);

      this.form.get('location.locationName')?.setValue(selectedOption?.locationName)
      this.form.get('location.latitude')?.setValue(selectedOption?.latitude)
      this.form.get('location.longtitude')?.setValue(selectedOption?.longtitude)
    }
    else{
      this.form.get('location.locationName')?.reset()
      this.form.get('location.latitude')?.reset()
      this.form.get('location.longtitude')?.reset()
    }
  }
}

