import { DateTime } from "luxon";

const baseUrl = process.env.REACT_APP_BASE_URL;
const apiKey = process.env.REACT_APP_API_KEY;

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(baseUrl + "/" + infoType);
  url.search = new URLSearchParams({
    ...searchParams,
    appid: apiKey,
  });

  return fetch(url).then((res) => res.json());
};

const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;

  const { main: details, icon } = weather[0];

  return {
    lat,
    lon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const formatForecastWeather = (data) => {
  let { timezone, daily, hourly } = data;
  daily = daily.slice(1, 6).map((day) => {
    return {
      title: formatToLocalTime(day.dt, timezone, "ccc"),
      temp: day.temp.day,
      icon: day.weather[0].icon,
    };
  });

  hourly = hourly.slice(1, 6).map((hour) => {
    return {
      title: formatToLocalTime(hour.dt, timezone, "hh:mm a"),
      temp: hour.temp,
      icon: hour.weather[0].icon,
    };
  });

  return { timezone, daily, hourly };
};

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "2.5/weather",
    searchParams
  ).then((data) => formatCurrentWeather(data));

  const { lat, lon } = formattedCurrentWeather;
  const formattedForecastWeather = await getWeatherData("3.0/onecall", {
    lat,
    lon,
    units: searchParams.units,
    exclude: "current,minutely,alerts",
  }).then((data) => formatForecastWeather(data));

  return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
  secs,
  zone,
  format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrl = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrl };
