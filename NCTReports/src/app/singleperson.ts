import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class singleperson{
    //reporter
    reporterName:string ="";
    phonenumber:number=0;
    //reportee
    baddieName:string="";
    location!: {
        locationName: string;
        latitude: number;
        longtitude: number;
    };
    url?:string="";
    extraInfo:string="";
    //general
    time:number =0;
    status:string = "";  
    id:string="";
}