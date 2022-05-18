import { Component, OnInit } from '@angular/core';
import { CtbNwfbService } from '../services/ctb-nwfb.service';
import { Route } from '../models/route';
import { Stop } from '../models/stop';
import { ETA } from '../models/eta';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {
  route_number = 101;
  company_id = "NWFB";
  direction = "inbound";
  route = {} as Route;

  constructor(
    private ctb_nwfb_service: CtbNwfbService,
  ) {
    this.route.route = this.route_number.toString();
    this.route.co = this.company_id;
    this.route.bound = this.direction;
    this.ctb_nwfb_service.get_route_stop(this.route.co, this.route.route, this.route.bound)
    .subscribe((stops: Stop[]) => {
      this.route.stops! = stops;
      // foreach stop
      // -get name
      // -get eta
      this.route.stops.forEach(stop => {
        this.ctb_nwfb_service.get_stop(stop.stop)
        .subscribe((qstop: Stop) => {
          stop.name_tc = qstop.name_tc;
        });
        this.ctb_nwfb_service.get_eta_ONCE(this.route.co, stop.stop, this.route.route)
        .subscribe((etas: ETA[]) => {
          stop.etas = etas;
        })
      })
    })
    console.log(this.route);

  }

  ngOnInit(): void {
  }

}
