import { Component, Input, OnInit } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'bwm-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() location: string;
  lat = 51.678418;
  lng = 7.809007;
  constructor(private mapService: MapService) { }

  ngOnInit() {
  }

  mapReadyHandler() {
    if(this.location){
      this.mapService.geoCodeLocation(this.location).subscribe((coordinates)=>{
        this.lat = coordinates.lat;
        this.lng = coordinates.lng;
      })
    }    
  }

}
