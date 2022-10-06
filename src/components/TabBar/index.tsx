import React, { Component } from "react";
import { City } from "../../Models";
import "./index.css";

type Props = {
  cities: City[];
  selectedcity: City;
  selectCity: Function;
};
type State = {};

class TabBar extends Component<Props, State> {
  render() {
    return (
      <div className="tab-container">
        {this.props.cities?.map((city) => (
          <div
            className={`link ${
              city.id === this.props.selectedcity.id ? "selelcted" : ""
            }`}
            key={city.id}
            onClick={(e) => this.props.selectCity(city.id)}
          >
            {city.name}
          </div>
        ))}
      </div>
    );
  }
}

/* export the component to be used in other components */
export default TabBar;
