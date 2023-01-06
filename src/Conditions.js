import React from "react";

export default function Conditions() {
  return (
    <div className="Conditions">
      <h1 className="p-5 text-center">Weather App</h1>
      <h6>New York</h6>
      <h6>Wednesday </h6>
      <h6>7:00AM</h6>
      <h6>Mostly Cloudy</h6>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain.png"
            alt="cloud with rain"
          ></img>
          6°
        </div>
        <div className="col-6">
          <h6>Precipitation: 20%</h6>
          <h6>Humidity: 45% </h6>
          <h6>Wind: 7 km/h</h6>
        </div>
      </div>
    </div>
  );
}
