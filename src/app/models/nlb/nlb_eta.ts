import { Time } from "@angular/common";

export interface NLB_ETA {
  estimatedArrivalTime: Time | string,
  routeVariantName: string,
  departed: boolean,
  noGPS: boolean,
  wheelChair: boolean,
  generatedTime: Time | string,
}
