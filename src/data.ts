export default async function getData(city: string) {
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=8e024bb739704c6281d182243232312&q=${city}&aqi=no`
  );
  const data = await res.json();
  return data;
}
