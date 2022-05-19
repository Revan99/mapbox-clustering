import React, { useState, useRef } from "react";
import ReactMapGL, { Marker, FlyToInterpolator } from "react-map-gl";
import useSupercluster from "use-supercluster";
import "./App.css";
import SiteMarker from "./SiteMarkers";

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 52.6376,
    longitude: -1.135171,
    width: "100vw",
    height: "100vh",
    zoom: 12
  });
  const mapRef = useRef();


  const crimes = [
    {
        "id": 3119122,
        "latitude": "36.18213370",
        "longitude": "44.00675920",
        "rsrq": -13,
        "color": "#FC3838"
    },
    {
        "id": 3119123,
        "latitude": "36.18678710",
        "longitude": "44.00336110",
        "rsrq": -7,
        "color": "#F5BA31"
    },
    {
        "id": 3119248,
        "latitude": "36.18726060",
        "longitude": "44.01039310",
        "rsrq": -1,
        "color": "#1BDE55"
    },
    {
        "id": 3119427,
        "latitude": "36.18751760",
        "longitude": "44.00842630",
        "rsrq": -10,
        "color": "#F67920"
    },
    {
        "id": 3119497,
        "latitude": "36.18199430",
        "longitude": "43.98857070",
        "rsrq": null,
        "color": "#C0C1C4"
    },
    {
        "id": 3119757,
        "latitude": "36.18853640",
        "longitude": "44.00529600",
        "rsrq": -7,
        "color": "#F5BA31"
    },
    {
        "id": 3119800,
        "latitude": "36.18847240",
        "longitude": "44.01655290",
        "rsrq": -6,
        "color": "#F5BA31"
    },
    {
        "id": 3119878,
        "latitude": "36.18665290",
        "longitude": "44.01084570",
        "rsrq": -11,
        "color": "#F67920"
    },
    {
        "id": 3119893,
        "latitude": "36.18334520",
        "longitude": "44.02884700",
        "rsrq": -7,
        "color": "#F5BA31"
    },
    {
        "id": 3120049,
        "latitude": "36.19039050",
        "longitude": "44.00385460",
        "rsrq": 14,
        "color": "#1BDE55"
    },
    {
        "id": 3120099,
        "latitude": "36.18802480",
        "longitude": "44.00918750",
        "rsrq": 19,
        "color": "#1BDE55"
    },
    {
        "id": 3120231,
        "latitude": "36.18307110",
        "longitude": "44.02604110",
        "rsrq": -6,
        "color": "#F5BA31"
    },
    {
        "id": 3120456,
        "latitude": "36.18655230",
        "longitude": "44.00839100",
        "rsrq": -8,
        "color": "#F5BA31"
    },
    {
        "id": 3120501,
        "latitude": "36.18280110",
        "longitude": "44.02641310",
        "rsrq": -5,
        "color": "#F5BA31"
    },
    {
        "id": 3120506,
        "latitude": "36.18914160",
        "longitude": "44.01967910",
        "rsrq": -6,
        "color": "#F5BA31"
    },
    {
        "id": 3120562,
        "latitude": "36.18619040",
        "longitude": "44.02599710",
        "rsrq": -8,
        "color": "#F5BA31"
    },
    {
        "id": 3120575,
        "latitude": "36.18250840",
        "longitude": "43.98948020",
        "rsrq": -6,
        "color": "#F5BA31"
    },
    {
        "id": 3120781,
        "latitude": "36.18610990",
        "longitude": "44.02323060",
        "rsrq": -7,
        "color": "#F5BA31"
    },
    {
        "id": 3120799,
        "latitude": "36.19059940",
        "longitude": "43.99745380",
        "rsrq": -7,
        "color": "#F5BA31"
    },
    {
        "id": 3120848,
        "latitude": "36.18961110",
        "longitude": "44.00446190",
        "rsrq": -7,
        "color": "#F5BA31"
    },
    {
        "id": 3120865,
        "latitude": "36.19077980",
        "longitude": "44.00622200",
        "rsrq": -13,
        "color": "#FC3838"
    },
    {
        "id": 3121091,
        "latitude": "36.18715630",
        "longitude": "44.01413490",
        "rsrq": -5,
        "color": "#F5BA31"
    },
    {
        "id": 3121229,
        "latitude": "36.19077010",
        "longitude": "44.00399660",
        "rsrq": 21,
        "color": "#1BDE55"
    },
    {
        "id": 3121242,
        "latitude": "36.18530430",
        "longitude": "44.02504550",
        "rsrq": -7,
        "color": "#F5BA31"
    },
    {
        "id": 3121280,
        "latitude": "36.18897380",
        "longitude": "44.02556300",
        "rsrq": -12,
        "color": "#F67920"
    },
    {
        "id": 3121721,
        "latitude": "36.18399310",
        "longitude": "43.99091060",
        "rsrq": -8,
        "color": "#F5BA31"
    },
    {
        "id": 3121764,
        "latitude": "36.18926130",
        "longitude": "44.00970460",
        "rsrq": -7,
        "color": "#F5BA31"
    },
    {
        "id": 3121927,
        "latitude": "36.18754870",
        "longitude": "44.02626350",
        "rsrq": -11,
        "color": "#F67920"
    },
    {
        "id": 3121930,
        "latitude": "36.18439280",
        "longitude": "44.00490420",
        "rsrq": -8,
        "color": "#F5BA31"
    },
    {
        "id": 3121942,
        "latitude": "36.18819090",
        "longitude": "44.00781980",
        "rsrq": -14,
        "color": "#FC3838"
    },
    {
        "id": 3122057,
        "latitude": "36.18238300",
        "longitude": "44.01574510",
        "rsrq": -8,
        "color": "#F5BA31"
    },
    {
        "id": 3122082,
        "latitude": "36.19057720",
        "longitude": "44.01480480",
        "rsrq": -10,
        "color": "#F67920"
    },
    {
        "id": 3122286,
        "latitude": "36.18315740",
        "longitude": "44.02075700",
        "rsrq": -1,
        "color": "#1BDE55"
    },
    {
        "id": 3122313,
        "latitude": "36.18970680",
        "longitude": "44.01144910",
        "rsrq": -8,
        "color": "#F5BA31"
    },
    {
        "id": 3122322,
        "latitude": "36.18731350",
        "longitude": "44.00819450",
        "rsrq": -11,
        "color": "#F67920"
    },
    {
        "id": 3122335,
        "latitude": "36.18213370",
        "longitude": "44.00675920",
        "rsrq": -14,
        "color": "#FC3838"
    },
    {
        "id": 3122347,
        "latitude": "36.18849650",
        "longitude": "44.00530460",
        "rsrq": -9,
        "color": "#F67920"
    },
    {
        "id": 3122383,
        "latitude": "36.18624510",
        "longitude": "43.99511940",
        "rsrq": -6,
        "color": "#F5BA31"
    },
    {
        "id": 3122423,
        "latitude": "36.18937380",
        "longitude": "44.00828230",
        "rsrq": -15,
        "color": "#C0C1C4"
    },
    {
        "id": 3122659,
        "latitude": "36.18870610",
        "longitude": "44.02846870",
        "rsrq": -10,
        "color": "#F67920"
    },
    {
        "id": 3122718,
        "latitude": "36.18726060",
        "longitude": "44.01039310",
        "rsrq": -1,
        "color": "#1BDE55"
    },
    {
        "id": 3122779,
        "latitude": "36.18759830",
        "longitude": "44.00823140",
        "rsrq": -9,
        "color": "#F67920"
    },
    {
        "id": 3122888,
        "latitude": "36.18673420",
        "longitude": "44.01485000",
        "rsrq": -5,
        "color": "#F5BA31"
    },
    {
        "id": 3123713,
        "latitude": "36.18985610",
        "longitude": "43.99223170",
        "rsrq": -10,
        "color": "#F67920"
    },
    {
        "id": 3123839,
        "latitude": "36.18334580",
        "longitude": "44.02884680",
        "rsrq": -10,
        "color": "#F67920"
    },
    {
        "id": 3123840,
        "latitude": "36.18410180",
        "longitude": "44.02157190",
        "rsrq": -12,
        "color": "#F67920"
    },
    {
        "id": 3123858,
        "latitude": "36.18419540",
        "longitude": "44.02156420",
        "rsrq": -12,
        "color": "#F67920"
    },
    {
        "id": 3124019,
        "latitude": "36.18694230",
        "longitude": "44.01486590",
        "rsrq": -7,
        "color": "#F5BA31"
    },
    {
        "id": 3124322,
        "latitude": "36.18729690",
        "longitude": "44.01079110",
        "rsrq": -12,
        "color": "#F67920"
    },
    {
        "id": 3124340,
        "latitude": "36.19039050",
        "longitude": "44.00385460",
        "rsrq": 23,
        "color": "#1BDE55"
    },
    {
        "id": 3124396,
        "latitude": "36.18743540",
        "longitude": "44.01049030",
        "rsrq": -11,
        "color": "#F67920"
    },
    {
        "id": 3124415,
        "latitude": "36.18499890",
        "longitude": "43.98900480",
        "rsrq": -11,
        "color": "#F67920"
    },
    {
        "id": 3124430,
        "latitude": "36.19077010",
        "longitude": "44.00399660",
        "rsrq": 19,
        "color": "#1BDE55"
    },
    {
        "id": 3124498,
        "latitude": "36.18531950",
        "longitude": "44.02423070",
        "rsrq": -14,
        "color": "#FC3838"
    },
    {
        "id": 3124527,
        "latitude": "36.18655230",
        "longitude": "44.00839100",
        "rsrq": -12,
        "color": "#F67920"
    },
    {
        "id": 3124533,
        "latitude": "36.18935150",
        "longitude": "44.00967130",
        "rsrq": -6,
        "color": "#F5BA31"
    },
    {
        "id": 3124557,
        "latitude": "36.18384080",
        "longitude": "44.01876490",
        "rsrq": -11,
        "color": "#F67920"
    },
    {
        "id": 3124638,
        "latitude": "36.18619040",
        "longitude": "44.02599710",
        "rsrq": -10,
        "color": "#F67920"
    },
    {
        "id": 3124648,
        "latitude": "36.18688040",
        "longitude": "43.99463670",
        "rsrq": -9,
        "color": "#F67920"
    },
    {
        "id": 3124748,
        "latitude": "36.18316880",
        "longitude": "44.02629640",
        "rsrq": -9,
        "color": "#F67920"
    },
    {
        "id": 3124869,
        "latitude": "36.18320540",
        "longitude": "44.00666440",
        "rsrq": 27,
        "color": "#1BDE55"
    },
    {
        "id": 3124880,
        "latitude": "36.18610990",
        "longitude": "44.02323060",
        "rsrq": -8,
        "color": "#F5BA31"
    },
    {
        "id": 3124933,
        "latitude": "36.19077980",
        "longitude": "44.00622200",
        "rsrq": -13,
        "color": "#FC3838"
    },
    {
        "id": 3125001,
        "latitude": "36.18959670",
        "longitude": "44.00444290",
        "rsrq": -9,
        "color": "#F67920"
    },
    {
        "id": 3125081,
        "latitude": "36.19059940",
        "longitude": "43.99745380",
        "rsrq": -14,
        "color": "#FC3838"
    },
    {
        "id": 3125120,
        "latitude": "36.18611810",
        "longitude": "44.02513200",
        "rsrq": -14,
        "color": "#FC3838"
    },
    {
        "id": 3125186,
        "latitude": "36.18331890",
        "longitude": "44.00598300",
        "rsrq": -13,
        "color": "#FC3838"
    },
    {
        "id": 3125195,
        "latitude": "36.18261620",
        "longitude": "43.98953420",
        "rsrq": -6,
        "color": "#F5BA31"
    },
    {
        "id": 3125230,
        "latitude": "36.18726060",
        "longitude": "44.01039310",
        "rsrq": -1,
        "color": "#1BDE55"
    },
    {
        "id": 3125272,
        "latitude": "36.19124170",
        "longitude": "43.99756800",
        "rsrq": -8,
        "color": "#F5BA31"
    },
    {
        "id": 3125376,
        "latitude": "36.18530430",
        "longitude": "44.02504550",
        "rsrq": -7,
        "color": "#F5BA31"
    },
    {
        "id": 3125558,
        "latitude": "36.18235340",
        "longitude": "44.02002250",
        "rsrq": -12,
        "color": "#F67920"
    },
    {
        "id": 3125621,
        "latitude": "36.18326910",
        "longitude": "44.02666780",
        "rsrq": -13,
        "color": "#FC3838"
    },
    {
        "id": 3125693,
        "latitude": "36.18516110",
        "longitude": "44.02274600",
        "rsrq": -13,
        "color": "#FC3838"
    },
    {
        "id": 3125698,
        "latitude": "36.18522330",
        "longitude": "44.01095580",
        "rsrq": -8,
        "color": "#F5BA31"
    },
    {
        "id": 3125739,
        "latitude": "36.18808700",
        "longitude": "44.01682690",
        "rsrq": -13,
        "color": "#FC3838"
    },
    {
        "id": 3125933,
        "latitude": "36.18926130",
        "longitude": "44.00970460",
        "rsrq": -7,
        "color": "#F5BA31"
    },
    {
        "id": 3126129,
        "latitude": "36.18754870",
        "longitude": "44.02626350",
        "rsrq": -11,
        "color": "#F67920"
    },
    {
        "id": 3126290,
        "latitude": "36.18266620",
        "longitude": "44.01641820",
        "rsrq": -10,
        "color": "#F67920"
    },
    {
        "id": 3126459,
        "latitude": "36.18630410",
        "longitude": "43.98867770",
        "rsrq": -14,
        "color": "#FC3838"
    },
    {
        "id": 3126536,
        "latitude": "36.18315740",
        "longitude": "44.02075700",
        "rsrq": 99,
        "color": "#1BDE55"
    },
    {
        "id": 3126627,
        "latitude": "36.18213370",
        "longitude": "44.00675920",
        "rsrq": -13,
        "color": "#FC3838"
    },
    {
        "id": 3126637,
        "latitude": "36.18580440",
        "longitude": "44.00427660",
        "rsrq": -9,
        "color": "#F67920"
    },
    {
        "id": 3126738,
        "latitude": "36.18935940",
        "longitude": "44.00833940",
        "rsrq": -5,
        "color": "#F5BA31"
    },
    {
        "id": 3126761,
        "latitude": "36.18803620",
        "longitude": "44.01050740",
        "rsrq": -12,
        "color": "#F67920"
    },
    {
        "id": 3126954,
        "latitude": "36.18726060",
        "longitude": "44.01039310",
        "rsrq": -1,
        "color": "#1BDE55"
    },
    {
        "id": 3127139,
        "latitude": "36.18874860",
        "longitude": "44.01023240",
        "rsrq": -14,
        "color": "#FC3838"
    },
    {
        "id": 3127267,
        "latitude": "36.18399310",
        "longitude": "43.99091060",
        "rsrq": -13,
        "color": "#FC3838"
    },
    {
        "id": 3127371,
        "latitude": "36.18662860",
        "longitude": "43.99427900",
        "rsrq": -6,
        "color": "#F5BA31"
    },
    {
        "id": 3127411,
        "latitude": "36.19124240",
        "longitude": "43.99756850",
        "rsrq": 0,
        "color": "#1BDE55"
    },
    {
        "id": 3127497,
        "latitude": "36.18454640",
        "longitude": "44.02244090",
        "rsrq": -8,
        "color": "#F5BA31"
    },
    {
        "id": 3127662,
        "latitude": "36.18439280",
        "longitude": "44.00490420",
        "rsrq": -11,
        "color": "#F67920"
    },
    {
        "id": 3128044,
        "latitude": "36.18662760",
        "longitude": "43.98801190",
        "rsrq": -11,
        "color": "#F67920"
    },
    {
        "id": 3128247,
        "latitude": "36.18439280",
        "longitude": "44.00490420",
        "rsrq": -11,
        "color": "#F67920"
    },
    {
        "id": 3128388,
        "latitude": "36.18665290",
        "longitude": "44.01084570",
        "rsrq": -11,
        "color": "#F67920"
    },
    {
        "id": 3128546,
        "latitude": "36.18387760",
        "longitude": "43.98850310",
        "rsrq": -11,
        "color": "#F67920"
    },
    {
        "id": 3128676,
        "latitude": "36.19104370",
        "longitude": "44.02479840",
        "rsrq": -7,
        "color": "#F5BA31"
    },
    {
        "id": 3128722,
        "latitude": "36.18937820",
        "longitude": "44.00868150",
        "rsrq": -8,
        "color": "#F5BA31"
    },
    {
        "id": 3128731,
        "latitude": "36.18237550",
        "longitude": "44.01574600",
        "rsrq": -8,
        "color": "#F5BA31"
    },
    {
        "id": 3129457,
        "latitude": "36.18625900",
        "longitude": "44.02506380",
        "rsrq": -14,
        "color": "#FC3838"
    },
    {
        "id": 3129628,
        "latitude": "36.18384080",
        "longitude": "44.01876490",
        "rsrq": -13,
        "color": "#FC3838"
    },
    {
        "id": 3129724,
        "latitude": "36.18513440",
        "longitude": "43.99452910",
        "rsrq": -10,
        "color": "#F67920"
    },
    {
        "id": 3129806,
        "latitude": "36.18619040",
        "longitude": "44.02599710",
        "rsrq": -14,
        "color": "#FC3838"
    },
    {
        "id": 3129846,
        "latitude": "36.18328560",
        "longitude": "44.00598040",
        "rsrq": -10,
        "color": "#F67920"
    },
    {
        "id": 3129941,
        "latitude": "36.18733810",
        "longitude": "44.01391810",
        "rsrq": -6,
        "color": "#F5BA31"
    },
    {
        "id": 3130010,
        "latitude": "36.18707550",
        "longitude": "43.99079330",
        "rsrq": -6,
        "color": "#F5BA31"
    },
    {
        "id": 3130157,
        "latitude": "36.18664180",
        "longitude": "44.01082650",
        "rsrq": -8,
        "color": "#F5BA31"
    },
    {
        "id": 3130404,
        "latitude": "36.18960770",
        "longitude": "44.00444910",
        "rsrq": -10,
        "color": "#F67920"
    },
    {
        "id": 3130522,
        "latitude": "36.18688070",
        "longitude": "43.99464510",
        "rsrq": -11,
        "color": "#F67920"
    },
    {
        "id": 3130525,
        "latitude": "36.19059940",
        "longitude": "43.99745380",
        "rsrq": -8,
        "color": "#F5BA31"
    },
    {
        "id": 3130555,
        "latitude": "36.18717790",
        "longitude": "44.01420210",
        "rsrq": -5,
        "color": "#F5BA31"
    },
    {
        "id": 3130559,
        "latitude": "36.18621900",
        "longitude": "44.02508860",
        "rsrq": -14,
        "color": "#FC3838"
    },
    {
        "id": 3130565,
        "latitude": "36.18248580",
        "longitude": "44.02117100",
        "rsrq": -8,
        "color": "#F5BA31"
    },
    {
        "id": 3130577,
        "latitude": "36.18707880",
        "longitude": "43.99079400",
        "rsrq": -10,
        "color": "#F67920"
    },
    {
        "id": 3130884,
        "latitude": "36.18530430",
        "longitude": "44.02504550",
        "rsrq": -10,
        "color": "#F67920"
    },
    {
        "id": 3130896,
        "latitude": "36.18513440",
        "longitude": "43.99452910",
        "rsrq": -9,
        "color": "#F67920"
    },
    {
        "id": 3130981,
        "latitude": "36.18238520",
        "longitude": "43.98860330",
        "rsrq": -22,
        "color": "#C0C1C4"
    },
    {
        "id": 3131220,
        "latitude": "36.18239490",
        "longitude": "44.01574490",
        "rsrq": -4,
        "color": "#1BDE55"
    }
]
  const points = crimes.map(crime => ({
    type: "Feature",
    properties: { cluster: false, crimeId: crime.id, borderColor:crime.color },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(crime.longitude),
        parseFloat(crime.latitude)
      ]
    }
  }));

  const bounds = mapRef.current
    ? mapRef.current
        .getMap()
        .getBounds()
        .toArray()
        .flat()
    : null;

  const { clusters, supercluster } = useSupercluster({
    points,
    bounds,
    zoom: viewport.zoom,
    options: { radius: 55, maxZoom: 17 }
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        maxZoom={20}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={newViewport => {
          setViewport({ ...newViewport });
        }}
        ref={mapRef}
      >
        {clusters.map(cluster => {
          const [longitude, latitude] = cluster.geometry.coordinates;
          const {
            cluster: isCluster,
            point_count: pointCount,
            borderColor
          } = cluster.properties;

          if (isCluster) {
            return (
              <Marker
                key={`cluster-${cluster.id}`}
                latitude={latitude}
                longitude={longitude}
              >
                <div
                  className="cluster-marker"
                  style={{
                    width: `${10 + (pointCount / points.length) * 20}px`,
                    height: `${10 + (pointCount / points.length) * 20}px`
                  }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20
                    );

                    setViewport({
                      ...viewport,
                      latitude,
                      longitude,
                      zoom: expansionZoom,
                      transitionInterpolator: new FlyToInterpolator({
                        speed: 2
                      }),
                      transitionDuration: "auto"
                    });
                  }}
                >
                  {pointCount}
                </div>
              </Marker>
            );
          }

          return (
            <SiteMarker key={cluster.properties.crimeId} longitude={longitude} latitude={latitude} borderColor={borderColor}/> 
          );
        })}
      </ReactMapGL>
    </div>
  );
}
