import { Component, OnInit } from '@angular/core';
import { CtbNwfbService } from '../services/ctb-nwfb.service';
import { Route } from '../models/route';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  companies = ['CTB', 'NWFB'];
  routes: Route[] = [];

  constructor(
    private ctb_nwfb_service: CtbNwfbService,
  ) {

    this.companies.forEach(company => {
      this.ctb_nwfb_service.get_all_routes(company)
      .subscribe((routes: Route[]) => {
        this.routes.push(...routes);
        this.routes.sort((a, b) => (a.route > b.route) ? 1 : -1);
      })
    })
  }

  ngOnInit(): void {

  }

}
