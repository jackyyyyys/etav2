import { Route } from "@angular/router";
import { Company } from "./company";
import { Stop } from "./stop";

export interface RouteStop {
  co: Company,
  route: Route,
  dir: string,
  seq: number,
  stop: Stop,
}
