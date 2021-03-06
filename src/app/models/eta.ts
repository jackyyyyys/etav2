import { Time } from "@angular/common";
import { Route } from "./route";
import { Company } from "./company";
import { Stop } from "./stop";

export interface ETA {
  co: Company,
  route: Route,
  dir: string,
  seq: number,
  service_type?: number,
  stop: Stop,
  dest_en: string,
  dest_tc: string,
  dest_sc: string,
  eta_seq: number,
  eta: Time | string,
  rmk_en: string,
  rmk_tc: string,
  rmk_sc: string,
  data_timestamp: Time | string,
}
