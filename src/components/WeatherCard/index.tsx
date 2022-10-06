import React, { Component } from "react";
import { City, weatherData } from "../../Models";
import { weekday } from "../../utils";
import "./index.css";

type Props = {
  city: City;
};
type State = {
  today: weatherData;
  prevDays: weatherData[];
};

class WeatherCard extends Component<Props, State> {
  static getDerivedStateFromProps(props: Props, state: State) {
    var seen = new Set();
    var temp: weatherData[] = [];
    var temp2: weatherData = {
      dt_txt: "",
      weather: [{ icon: "", main: "" }],
    };
    props.city.data?.forEach((v) => {
      const date = new Date(v["dt_txt"]).getDay();
      const today = new Date().getDay();
      if (!seen.has(date)) {
        if (date === today) temp2 = v;
        else temp.push(v);
        seen.add(date);
      }
    });
    console.info({ temp, temp2 });
    return {
      today: temp2,
      prevDays: temp.slice(0, 4),
    };
  }
  render() {
    var today = this.state.today;
    return (
      <div className="container">
        <div className="top">
          <div className="data-container">
            <div className="today-text day-of-week">Today</div>
            <div className="flex">
              <div className="icon">
                <img
                  src={
                    "https://openweathermap.org/img/wn/" +
                    today?.weather[0].icon +
                    "@2x.png"
                  }
                  alt="img"
                />
              </div>
              <div className="h-flex">
                <div className="temp temp-today">
                  {Math.round(today?.main?.temp ?? 0)}
                  <span>&#176;</span>
                </div>
                <div className="today-text day-of-week">
                  {today.weather[0].main}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          {this.state?.prevDays?.map((v, i) => (
            <div key={i} className="data-container">
              <div className="day-of-week">
                {weekday[new Date(v["dt_txt"]).getDay()]}
              </div>
              <div className="icon">
                <img
                  src={
                    "https://openweathermap.org/img/wn/" +
                    v?.weather[0].icon +
                    "@2x.png"
                  }
                  alt="img"
                />
              </div>
              <div className="temp">
                {Math.round(v?.main?.temp ?? 0)}
                <span>&#176;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

/* export the component to be used in other components */
export default WeatherCard;
