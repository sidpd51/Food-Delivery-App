import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { SWIGGY_URI } from "../utilities/content";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(null);
  const [filteredList, setFilteredList] = useState(null);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_URI);
      const data = await response.json();
      console.log(data);
      setRestaurantList(data?.data?.success?.cards?.[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
      setFilteredList(data?.data?.success?.cards?.[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
      setRestaurantList([]); // Set to empty array or appropriate fallback state on error
      setFilteredList([]);
    }
  };


  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchField(query);
    const filteredRestaurants = restaurantList.filter((restaurant) => 
      restaurant.info.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredList(filteredRestaurants);
  };

  if (restaurantList === null) return <Shimmer />;

  console.log('body-rendered');
  return (
    <>
      <main className="mx-16 my-4">
        {/* Search input */}
        <div className="sm:w-full md:w-1/3 lg:w-1/4 mb-5">
          <div className="relative">
            <label htmlFor="Search" className="sr-only">Search</label>
            <input
              type="text"
              id="Search"
              placeholder="Search for..."
              className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
              value={searchField}
              onChange={handleSearch}
            />
            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
          </div>
        </div>

        {/* Cards rendering */}
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
          {filteredList.map(restaurant => (
            <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}>
              <RestaurantCard resInfo={restaurant.info}></RestaurantCard>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default Body;
