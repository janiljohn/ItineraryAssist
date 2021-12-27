// import ".. /styles.css";
import React, { useState } from "react";
import Input from "./Input";
import axios from "axios";
import Activity from "./Activity";
import Header from "./Header";

function App() {
  var lat2 = 0;
  var lng2 = 0;

  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [city, setCity] = useState("");
  const [activity, setActivity] = useState([]);
  const [rating, setRating] = useState([]);

  function makeURL(info) {
    setCity(info);
    setActivity([]);

    var str = info.replace(/\s/g, "");

    var url =
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
      str +
      "&key=AIzaSyDiEw5PBp6nqZbJH5etKWA3dtlI4yVv82Y#";

    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setLat(result.results[0].geometry.location.lat);
        setLng(result.results[0].geometry.location.lng);
        lat2 = result.results[0].geometry.location.lat;
        lng2 = result.results[0].geometry.location.lng;
        getPlaces(lat2, lng2);
      });
  }

  function getPlaces(lat2, lng2) {
    // var url =
    //   "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
    //   lat2 +
    //   "," +
    //   lng2 +
    //   "&radius=1500&type=park&key=AIzaSyDiEw5PBp6nqZbJH5etKWA3dtlI4yVv82Y#/Access-Control-Allow-Origin";

    var url =
      "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
      lat2 +
      "," +
      lng2 +
      "&radius=1500&key=AIzaSyDiEw5PBp6nqZbJH5etKWA3dtlI4yVv82Y#/Access-Control-Allow-Origin";

    var url2 =
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
      "Sydney" +
      "&key=AIzaSyDiEw5PBp6nqZbJH5etKWA3dtlI4yVv82Y#";


    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        var items = result.results;
        console.log(items[0].name);
        console.log(items);
        addInformation(items);
      });
  }

  function addInformation(places) {

    for (var x = 0; x < places.length; x++) {
      setActivity((prevActivity) => {
        return [...prevActivity, places[x].name];
      });
      setRating((prevRating) => {
        return [...prevRating, places[x].rating];
      });
    }

    console.log(activity);
  }

  return (
    <div className="App">
      <Header />
      <h3>Enter City: </h3>
      <h3>{city}</h3>
      <Input makeURL={makeURL} />
      {activity.map((activityItem, index) => {
        return (
          <Activity
            key={index}
            id={index}
            name={activityItem}
            rating={rating[index]}
          />
        );
      })}
    </div>
  );
}

export default App;