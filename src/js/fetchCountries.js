export default function fetchCountries(searcherQuery) {
  let url = `https://restcountries.eu/rest/v2/name/${searcherQuery}`;
  return fetch(url).then((response) => response.json());
  //
}
