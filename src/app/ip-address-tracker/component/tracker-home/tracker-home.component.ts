import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MapService } from '../../service/map.service';

@Component({
  selector: 'app-tracker-home',
  templateUrl: './tracker-home.component.html',
  styleUrls: ['./tracker-home.component.scss']
})
export class TrackerHomeComponent implements OnInit, AfterViewInit {
  KEY: string = 'at_sy9223SRvnRqB06xiV3uU9Zmlb3po';
  userInputIP: string = '8.8.8.8';
  map: any;

  constructor(private mapServicce: MapService) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.searchIPAddress();
  }

  searchIPAddress() {
    fetch(
      `https://geo.ipify.org/api/v1?apiKey=${this.KEY}&ipAddress=${this.userInputIP}`
    )
      .then((result) => result.json())
      .then((data) => {
        console.log(data); // remove log
        this.resetMap();
        this.map = this.mapServicce.initMap(
          data.location.lat,
          data.location.lng,
          'map-container'
        );
      });
  }

  resetMap(){
    if (this.map !== undefined && this.map !== null) {
      this.map.remove();
    }
  }
}
