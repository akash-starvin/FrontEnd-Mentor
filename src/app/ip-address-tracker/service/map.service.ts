import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  MARK_ICON = L.icon({
    iconUrl: '../../../../assets/ip-address-tracker/icons/icon-location.svg',
    iconSize: [40, 40],
  });

  TILE_LAYER = L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
    {
      maxZoom: 18,
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
    }
  );

  constructor() {}

  initMap(lat: number, lng: number, viewID: string) {
    var map;
    map = L.map(viewID).setView([lat, lng], 13);
    this.TILE_LAYER.addTo(map);
    L.marker([lat, lng], {
      icon: this.MARK_ICON,
    }).addTo(map);
    return map;
  }
}
