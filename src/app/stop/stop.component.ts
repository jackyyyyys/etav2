import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CtbNwfbService } from '../services/ctb-nwfb.service';
import { KmbLwbService } from '../services/kmb-lwb.service';

import { Stop } from '../models/stop';
import { Route } from '../models/route';
import { ETA } from '../models/eta';

@Component({
  selector: 'app-stop',
  templateUrl: './stop.component.html',
  styleUrls: ['./stop.component.css']
})
export class StopComponent implements OnInit {

  @Input() stop_id = '';
  @Input() company_id = '';
  @Input() route = '';
  stop!: Stop;
  routes!: Route[];

  constructor(
    private ctb_nwfb_service: CtbNwfbService,
    private kmb_lwb_service: KmbLwbService,
  ) {

    this.ctb_nwfb_service.get_stop(this.stop_id)
    .subscribe((stop: Stop) => {
      this.stop = stop;
    })

    this.ctb_nwfb_service.get_route(this.company_id ,this.route)
    .subscribe((route: Route) => {
      this.stop.routes!.push(route);
    })

    // !!!!!!!!!!!! GET ROUTES OF THE STOP

    // this.routes.forEach(route => {
    //   this.ctb_nwfb_service.get_eta_ONCE('NWFB', 'N121', '002584')
    //   // this.ctb_nwfb_service.get_eta_ONCE(route.co.co, route.route, this.stop.stop)
    //   .subscribe((etas: ETA[]) => {
    //     this.routes.find(r => r.route = route.route)!.etas = etas;
    //     console.table(this.routes);
    //   })
    // })


    // TEST
    // day
    // this.ctb_nwfb_service.get_eta_ONCE('NWFB', '001576', '101')
    // night
    this.ctb_nwfb_service.get_eta_ONCE(this.company_id, this.stop_id, this.route)

    //
    // this.ctb_nwfb_service.get_eta_ONCE(route.co.co, route.route, this.stop.stop)
    .subscribe((etas: ETA[]) => {
      this.stop.routes!.find(r => r.route = this.route)!.etas = etas;
      console.table(etas);
    })
  }

  ngOnInit(): void {
    this.ctb_nwfb_service.get_eta_ONCE(this.company_id, this.stop_id, this.route)

    //
    // this.ctb_nwfb_service.get_eta_ONCE(route.co.co, route.route, this.stop.stop)
    .subscribe((etas: ETA[]) => {
      this.stop.routes!.find(r => r.route = this.route)!.etas = etas;
      console.table(etas);
    })
  }

}
