import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MapService } from '../../service/map.service';

@Component({
  selector: 'app-tracker-home',
  templateUrl: './tracker-home.component.html',
  styleUrls: ['./tracker-home.component.scss'],
})
export class TrackerHomeComponent implements OnInit, AfterViewInit {
  KEY: string = 'at_sy9223SRvnRqB06xiV3uU9Zmlb3po';
  userInputIP: string = '8.8.8.8';
  map: any;
  location: string = '-';
  timeZone: string = '-';
  isp: string = '-';
  ipAddress: string = '-';

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
        this.setMap(data);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }

  setMap(data: any) {
    if (data.code === 422) {
      alert('Enter a valid IP Address');
    } else {
      this.getCardData(data);
      this.resetMap();
      this.map = this.mapServicce.initMap(
        data.location.lat,
        data.location.lng,
        'map-container'
      );
    }
  }

  resetMap() {
    if (this.map !== undefined && this.map !== null) {
      this.map.remove();
    }
  }

  getCardData(data: any) {
    this.location = this.getLoacation(data.location);
    this.isp = data.isp;
    this.timeZone = 'UTC ' + data.location.timezone;
    this.ipAddress = data.ip;
    console.log(this.location, this.isp, this.timeZone);
  }

  getLoacation(location: any): string {
    return location.region + ', ' + location.region + ' ' + location.postalCode;
  }
}
