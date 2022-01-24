import { Company } from "./company";
import { ETA } from "./eta";

export interface Route {
  co: Company,
  route: string,
  bound?: string,
  service_type?: string,
  orig_en: string,
  orig_tc: string,
  orig_sc: string,
  dest_en: string,
  dest_tc: string,
  dest_sc: string,
  etas?: ETA[],
}
