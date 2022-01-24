import { Route } from "./route";

export interface Stop {
  stop: string,
  name_en: string,
  name_tc: string,
  name_sc: string,
  lat: number,
  long: number,
  routes?: Route[],
}
