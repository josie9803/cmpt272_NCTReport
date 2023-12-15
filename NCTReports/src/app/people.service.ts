import { Injectable } from '@angular/core';
import { singleperson } from './singleperson';
import { v4 as uuidv4 } from 'uuid';
import { locationtype } from './locationtype';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {
  people:singleperson[]
  locationList:locationtype[];

  constructor() {
    this.people = [
      {
        location:{
          locationName:"Metrotown",
          latitude:49.2276,
          longtitude:-123.0076
        },
        url:"https://picsum.photos/200/300",
        reporterName:"josie",
        baddieName:"Mischief Maximus",
        phonenumber:0,
        extraInfo:"",
        time:new Date().getTime(),
        status: "RESOLVED",
        id:uuidv4()
      },
      {
        location:{
          locationName:"SFU",
          latitude:49.1867,
          longtitude:-122.8490},
        
        reporterName:"nathan",
        baddieName:"Dr Jiggles",
        phonenumber:0,
        extraInfo:"",
        time:new Date().getTime(),
        status: "OPEN",
        id:uuidv4()   
      }
    ]
    this.locationList = [];
    this.updateStoredLocations()
   }

   //read
   get() {
    return this.people
   }

   getPersonById(id:string):singleperson | undefined{
    return this.people.find(person => person.id === id)
   }

   //update, create
   add(newPerson:singleperson){
    newPerson.time = (new Date()).getTime()
    newPerson.status = "OPEN"
    newPerson.id = uuidv4()
    
    this.people.push(newPerson)
    this.updateStoredLocations()

    console.log(this.people)
   }

   //delete
   delete(del_person_id:string){
    this.people = this.people.filter((p) => p.id != del_person_id)
    return this.people
   }

   getStoredLocations(){
    return this.locationList;
   }

   updateStoredLocations(){
    this.people.forEach(person =>{
      const location = person.location;
      if (location)
      {
        const existingLocation = this.locationList.find(
          loc => loc.locationName === location.locationName);

        if (!existingLocation) {
          this.locationList.push({
            locationName: location.locationName,
            latitude: location.latitude,
            longtitude: location.longtitude,
          });
        }

      }
    });

   }
}
