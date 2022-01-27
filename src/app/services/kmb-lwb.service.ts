import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ETA } from '../models/eta';
import { kmb_lwb } from '../models/api_url';

@Injectable({
  providedIn: 'root'
})
export class KmbLwbService {

  urls = kmb_lwb;

  constructor(private http: HttpClient) {}

  get_route_list() {
    let url = kmb_lwb.base + kmb_lwb.route_list;
    console.log(url);
    return this.http.get(url)
    .pipe(map((response: any) => response.data))
  }

  get_route(route: string, direction: string, service_type: string) {
    let url = kmb_lwb.base + kmb_lwb.route.replace("{route}", route).replace("{direction}", direction).replace("{service_type}", service_type);
    console.log(url);
    return this.http.get(url)
      .pipe(map((response: any) => response.data))
  }

  get_stop_list() {
    let url = kmb_lwb.base + kmb_lwb.stop_list;
    console.log(url);
    return this.http.get(url)
        .pipe(map((response: any) => response.data))
  }

  get_stop(stop_id: string) {
    let url = kmb_lwb.base + kmb_lwb.stop.replace("{stop_id}", stop_id);
    console.log(url);
    return this.http.get(url)
        .pipe(map((response: any) => response.data))
  }

  get_route_stop_list() {
    let url = kmb_lwb.base + kmb_lwb.route_stop_list;
    console.log(url);
    return this.http.get(url)
        .pipe(map((response: any) => response.data))
  }

  get_route_stop(route: string, direction: string, service_type: string) {
    let url = kmb_lwb.base + kmb_lwb.route_stop.replace("{route}", route).replace("{direction}", direction).replace("{service_type}", service_type);
    console.log(url);
    return this.http.get(url)
        .pipe(map((response: any) => response.data))
  }

  get_eta(stop_id: string, route: string, service_type: string) {
    let url = kmb_lwb.base + kmb_lwb.eta.replace("{stop_id}", stop_id).replace("{route}", route).replace("{service_type}", service_type);
    console.log(url);
    return this.http.get(url)
        .pipe(map((response: any) => response.data))
  }

  get_stop_eta(stop_id: string) {
    let url = kmb_lwb.base + kmb_lwb.stop_eta.replace("{stop_id}", stop_id);
    console.log(url);
    return this.http.get(url)
      .pipe(map((response: any) => response.data))
  }

  /** get_route_eta
   * @param route
   * @param service_type
   * @returns array of {ETA}
   */
  get_route_eta( route: string, service_type: string) {
    let url = kmb_lwb.base + kmb_lwb.route_eta.replace("{route}", route).replace("{service_type}", service_type);
    console.log(url);
    return this.http.get(url)
      .pipe(map((response: any) => response.data))
  }

}
