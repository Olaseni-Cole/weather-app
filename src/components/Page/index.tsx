import React, { Component } from "react";
import { City, defaultCities } from "../../Models";
import { getCityWeather } from "../../utils";
import TabBar from "../TabBar/index";
import WeatherCard from "../WeatherCard";
import "./index.css";

type Props = {};
type State = {
  cities: Array<City>;
  slectedCity: City;
};

class Page extends Component<Props, State> {
  constructor(props: Object) {
    super(props);
    this.state = {
      cities: defaultCities,
      slectedCity: defaultCities[0],
    };
  }

  getData = async () => {
    // this.setState({color: "blue"});

    const cities = await getCityWeather();
    if (cities.length === 3) this.setState({ cities, slectedCity: cities[0] });
  };

  componentDidMount() {
    this.getData();
  }

  selectCity = (id: number) => {
    const newCity = this.state.cities.find((v) => v.id === id);
    if (newCity) this.setState({ slectedCity: newCity });
  };

  render() {
    return (
      <div className="main-container">
        <div className="sub-container">
          <TabBar
            cities={this.state.cities}
            selectedcity={this.state.slectedCity}
            selectCity={this.selectCity.bind(this)}
          />
          <WeatherCard city={this.state.slectedCity} />
        </div>
      </div>
    );
  }
}

/* export the component to be used in other components */
export default Page;
