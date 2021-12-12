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
    'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
    {
      maxZoom: 20,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  );

  constructor() {}

  initMap(lat: number, lng: number, viewID: string) {
    var map;
    map = L.map(viewID).setView([lat, lng], 15);
    this.TILE_LAYER.addTo(map);
    L.marker([lat, lng], {
      icon: this.MARK_ICON,
    }).addTo(map);
    return map;
  }
}
