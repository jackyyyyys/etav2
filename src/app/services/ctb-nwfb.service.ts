import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map} from 'rxjs';
import { ETA } from '../models/eta';
import { ctb_nwfb } from '../models/api_url';

@Injectable({
  providedIn: 'root'
})
export class CtbNwfbService {

  urls = ctb_nwfb;

  constructor(private http: HttpClient) {

  }

    get_company() {

    }

    get_route(company_id: string, route: string) {
      let url = ctb_nwfb.base + ctb_nwfb.route.replace("{company_id}", company_id).replace("{route}", route);
      console.log(url);
      return this.http.get(url)
      .pipe(map((response: any) => {
        return response.data;
      }))
    }

    get_stop(stop_id: string) {
      let url = ctb_nwfb.base + ctb_nwfb.stop.replace("{stop_id}", stop_id);
      console.log(url);
      return this.http.get(url)
      .pipe(map((response: any) => {
        return response.data;
      }))
    }

    get_route_stop(company_id: string, route: string, direction: string) {

    }

    get_eta_ONCE(company_id: string, stop_id: string, route: string): Observable<any>{
        let url = ctb_nwfb.base + ctb_nwfb.eta.replace("{company_id}", company_id).replace("{stop_id}", stop_id).replace("{route}", route);
        console.log(url);
        return this.http.get(url)
        .pipe(map((response: any) => {
          return response.data;
      }))
    }

    get_eta_STREAM() {

    }
}
