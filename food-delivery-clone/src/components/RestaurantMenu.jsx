import { useEffect, useState } from "react"
import { RES_MENU } from "../utilities/content"
import { useParams } from "react-router-dom"

const RestaurantMenu = () => {
    const [resId] = useParams()
    const[resMenu, setResMenu] = useState(null)


    useEffect(()=> {
        fetchMenu()
    },[])

    const fetchMenu = async () => {
        const response = await fetch(RES_MENU)
        const data = await response.json()
        console.log(data)
    }

    return (
        <h1>restaurant menu page</h1>
    )
}

export default RestaurantMenu

// https://www.swiggy.com/restaurants/pizza-hut-city-gold-complex-navrangpura-ahmedabad-47589??
// https://www.swiggy.com/restaurants/chinese-wok-mouje-chagispur-cg-road-ahmedabad-636894/?restaurant_id=636894

// https://www.swiggy.com/restaurants/chinese-wok-mouje-chagispur-cg-road-ahmedabad-636894