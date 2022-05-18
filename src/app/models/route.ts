import { Company } from "./company";
import { ETA } from "./eta";
import { Stop } from "./stop";

export interface Route {
  co: string,
  route: string,
  bound?: string,
  service_type?: string,
  orig_en: string,
  orig_tc: string,
  orig_sc: string,
  dest_en: string,
  dest_tc: string,
  dest_sc: string,
  stops?: Stop[],
  etas?: ETA[],
}
