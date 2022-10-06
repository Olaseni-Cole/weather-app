export type City = {
  name: string;
  id: number;
  data?: Array<weatherData>;
  coord?: Object;
  population?: number;
  timezone?: number;
  country?: string;
  sunrise?: number;
  sunset?: number;
};

export type weatherData = {
  dt_txt: string;
  dt?: number;
  main?: { temp: number };
  weather: [{ icon: string; main: string }];
  clouds?: Object;
  wind?: Object;
  visibility?: 10000;
  pop?: number;
  sys?: Object;
};

const lagos: City = {
  name: "lagos",
  id: 1,
};

const totonto: City = {
  name: "totonto",
  id: 6167865,
};

const london: City = {
  name: "london",
  id: 6167867,
};

export let defaultCities: Array<City> = [totonto, lagos, london];
