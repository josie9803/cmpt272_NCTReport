import { Component, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';

import {icon, Marker} from 'leaflet';
import { singleperson } from '../singleperson';
import { CountLocationPipe } from '../count-location.pipe';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
}); 
Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  @Input() locationOnMap: any
  
  private map!: L.Map

  constructor(){}

  ngAfterViewInit(): void {
    this.showMap();
    this.putLabels();
  }

  showMap(){
    this.map = L.map('mapid').setView([49.2, -123], 10);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(this.map);
  }

  putLabels() { 
    this.locationOnMap.forEach((person:singleperson) => {
      const locations = new CountLocationPipe()
      const num = locations.transform(this.locationOnMap,person.location?.locationName)

      const latitude = person.location?.latitude ?? 0;
      const longtitude = person.location?.longtitude ?? 0;
      const locationName = person.location?.locationName ?? 'Unknown Location';

      L.marker([latitude, longtitude]).addTo(this.map)
  		.bindPopup('<b>' + locationName + "</b><br />" + num + " nuisance reports")
    });
  }
}
