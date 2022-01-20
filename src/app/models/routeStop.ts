import { Company } from "./company";
import { Route } from "./route";
import { Stop } from "./stop";

export interface RouteStop {
  co: Company,
  route: Route,
  bound: string,
  service_type?: string,
  seq: number,
  stop: Stop,
}
