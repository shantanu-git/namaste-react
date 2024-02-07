import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const API =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9879659&lng=77.6895248&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";

    const data = await fetch(API);

    const json = await data.json();

    // console.log(
    //   json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );

    setListOfRestaurants(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    // console.log(json);
  };

  //conditional-rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="search">search</div>
      <div className="top-rate">
        <button
          className="btn"
          onClick={() => {
            console.log(listOfRestaurants);
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.0
            );
            setListOfRestaurants(filteredList);
            console.log(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant.info} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
