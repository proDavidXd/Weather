export default async function getData(city) {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${process.env.KEY}&q=${city}&aqi=no`
  );
  const data = await res.json();
  return data;
}
