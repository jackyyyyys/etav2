import { Component, OnInit } from '@angular/core';
import { CtbNwfbService } from '../services/ctb-nwfb.service';

import { Stop } from '../models/stop';
import { Route } from '../models/route';
import { ETA } from '../models/eta';

@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.css']
})
export class StopComponent implements OnInit {

  stop!: Stop;
  routes!: Route[];

  constructor(
    private ctb_nwfb: CtbNwfbService,
  ) {
    // this.routes.forEach(route => {
    //   this.ctb_nwfb.get_eta_ONCE('NWFB', 'N121', '002584')
    //   // this.ctb_nwfb.get_eta_ONCE(route.co.co, route.route, this.stop.stop)
    //   .subscribe((etas: ETA[]) => {
    //     this.routes.find(r => r.route = route.route)!.etas = etas;
    //     console.table(this.routes);
    //   })
    // })
    this.ctb_nwfb.get_eta_ONCE('NWFB', '001576', '101')
    // this.ctb_nwfb.get_eta_ONCE(route.co.co, route.route, this.stop.stop)
    .subscribe((etas: ETA[]) => {
      console.table(this.routes);
    })
  }

  ngOnInit(): void {

  }

}
