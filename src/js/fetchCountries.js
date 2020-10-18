import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import { badreq } from "./error.js";
export default function fetchCountries(searcherQuery) {
  let url = `https://restcountries.eu/rest/v2/name/${searcherQuery}`;
  return fetch(url).then((response) => {
    if (response.status > 200) {
      error(badreq);
    } else {
      return response.json();
    }
  });
  //
}
