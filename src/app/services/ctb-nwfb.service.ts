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

    get_route(company_id: number, route: string) {

    }

    get_stop(stop_id: string) {

    }

    get_route_stop(company_id: string, route: string, direction: string) {

    }

    get_eta_ONCE(company_id: string, stop_id: string, route: string): Observable<any>{
        let url = ctb_nwfb.base + ctb_nwfb.eta.replace("{company_id}", company_id).replace("{stop_id}", stop_id).replace("{route}", route);
        console.log(url);
        return this.http
        .get(ctb_nwfb.base + ctb_nwfb.eta
        .replace("{company_id}", company_id)
        .replace("{stop_id}", stop_id)
        .replace("{route}", route))
        .pipe(map(response => {
          console.log(response)
          return response
      }))
    }

    get_eta_STREAM() {

    }
}
