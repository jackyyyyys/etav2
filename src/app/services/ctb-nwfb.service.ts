import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map} from 'rxjs';
import { ETA } from '../models/eta';
import { ctb_nwfb } from '../models/api_url';

@Injectable({
  providedIn: 'root'
})
export class CtbNwfbService {

  constructor(private http: HttpClient) {}

  /**
   *
   * @param company_id
   * @returns company detail
   */
  get_company(company_id: string) {
    let url = ctb_nwfb.base
              + ctb_nwfb.company
                .replace("{company_id}", company_id);
    console.log(url);
    return this.http.get(url)
    .pipe(map((response: any) => {
      return response.data;
    }))
  }

  get_all_routes(company_id: string) {
    let url = ctb_nwfb.base
              + ctb_nwfb.all_routes
                .replace("{company_id}", company_id)
    console.log(url);
    return this.http.get(url)
    .pipe(map((response: any) => {
      return response.data;
    }))
  }

  /**
   *
   * @param company_id
   * @param route
   * @returns route detail
   */
  get_route(company_id: string, route: string) {
    let url = ctb_nwfb.base
              + ctb_nwfb.route
                .replace("{company_id}", company_id)
                .replace("{route}", route);
    console.log(url);
    return this.http.get(url)
    .pipe(map((response: any) => {
      return response.data;
    }))
  }

  /**
   *
   * @param stop_id
   * @returns stop detail
   */
  get_stop(stop_id: string) {
    let url = ctb_nwfb.base
              + ctb_nwfb.stop
                .replace("{stop_id}", stop_id);
    console.log(url);
    return this.http.get(url)
    .pipe(map((response: any) => {
      return response.data;
    }))
  }

  /**
   *
   * @param company_id
   * @param route
   * @param direction
   * @returns all stops id in a route
   */
  get_route_stop(company_id: string, route: string, direction: string) {
    let url = ctb_nwfb.base
              + ctb_nwfb.route_stop
                .replace("{company_id}", company_id)
                .replace("{route}", route)
                .replace("{direction}", direction);
    console.log(url);
    return this.http.get(url)
    .pipe(map((response: any) => {
      return response.data;
    }))
  }

  /**
   *
   * @param company_id
   * @param stop_id
   * @param route
   * @returns one-time eta
   */
  get_eta_ONCE(company_id: string, stop_id: string, route: string): Observable<any>{
      let url = ctb_nwfb.base
                + ctb_nwfb.eta
                  .replace("{company_id}", company_id)
                  .replace("{stop_id}", stop_id)
                  .replace("{route}", route);
      console.log(url);
      return this.http.get(url)
      .pipe(map((response: any) => {
        return response.data;
    }))
  }

  get_eta_STREAM() {}

}
