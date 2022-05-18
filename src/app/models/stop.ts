import { Route } from "./route";
import { ETA } from "./eta";

export interface Stop {
  stop: string,
  name_en: string,
  name_tc: string,
  name_sc: string,
  lat: number,
  long: number,
  routes?: Route[],
  etas?: ETA[],
}
