import { City } from "../Models";

export const getCityWeather: () => Promise<Array<City>> = async () => {
  let data: Array<City> = [];

  try {
    let c1 = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=toronto&appid=c29ecb96d2cb4143c1716876884ecc91&units=metric`,
      {
        method: "GET",
        redirect: "follow",
      }
    );
    let c2 = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=london&appid=c29ecb96d2cb4143c1716876884ecc91&units=metric`,
      {
        method: "GET",
        redirect: "follow",
      }
    );
    let c3 = fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=lagos&appid=c29ecb96d2cb4143c1716876884ecc91&units=metric`,
      {
        method: "GET",
        redirect: "follow",
      }
    );
    let res = await Promise.all([c1, c2, c3]);
    for (const val of res) {
      let resjson = await val.json();
      console.info({ resjson });
      const { city, list } = resjson;

      const newCity: City = { ...city, data: list };

      data.push(newCity);
    }
  } catch (error) {
    return [];
  }

  return data;
};

export var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
