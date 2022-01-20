export const ctb_nwfb = {
  base: "https://rt.data.gov.hk",
  company: "/transport/citybus-nwfb/company/{company_id}",
  route: "/transport/citybus-nwfb/route/{company_id}/{route}",
  stop: "/transport/citybus-nwfb/stop/{stop_id}",
  route_stop: "/transport/citybus-nwfb/route-stop/{company_id}/{route}/{direction}",
  eta: "/transport/citybus-nwfb/eta/{company_id}/{stop_id}/{route}",
}

export const ctb_nwfb_nlb = {
  base: "https://rt.data.gov.hk",
  stop_route: "/v1.1/transport/batch/stop-route/{company_id}/{stop_id}?lang={lang}",
  stop_eta: "/v1/transport/batch/stop-eta/{company_id}/{stop_id}?lang={lang}",
}

export const nlb = {
  base: "https://rt.data.gov.hk/v1/transport/nlb",
  all_routes: {
    url: "/route.php?action=list",
    body: {},
  },
  stops_of_route: {
    url: "/stop.php?action=list",
    body: {
      routeId: "{routeId}",
    },
  },
  eta: {
    url: "/stop.php?action= estimatedArrivals",
    body: {
      routeId: "{routeId}",
      stopId: "{stopId}",
      language: "{language}",
    },
  }
}

export const kmb_lwb = {
  base: "https://data.etabus.gov.hk",
  route_list: "/v1/transport/kmb/route/",
  route: "/v1/transport/kmb/route/{route}/{direction}/{service_type}",
  stop_list: "/v1/transport/kmb/stop",
  stop: "/v1/transport/kmb/stop/{stop_id}",
  route_stop_list: "/v1/transport/kmb/route-stop",
  route_stop: "/v1/transport/kmb/routestop/{route}/{direction}/{service_type}",
  eta: "/v1/transport/kmb/eta/{stop_id}/{route}/{service_type}",
  stop_eta: "/v1/transport/kmb/stop-eta/{stop_id}",
  route_eta: "/v1/transport/kmb/route-eta/{route}/{service_type}",
}

// LOL so long
export const gmb = {
  base: "https://data.etagmb.gov.hk",
  routes: "/route/{region}?",
  route_by_region_code: "/route/{region}/{route_code}",
  route_by_id: "/route/{route_id}",
}
