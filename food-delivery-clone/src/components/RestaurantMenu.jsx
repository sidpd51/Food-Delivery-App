import { useEffect, useState } from "react"
import { MENU_API } from "../utilities/content"
import { useParams } from "react-router-dom"
import DishCard from "./DishCard";
import Shimmer from "./Shimmer"

const RestaurantMenu = () => {
    const { resId } = useParams()
    const[resMenu, setResMenu] = useState(null)
    const[resFilteredMenu, setResFilteredMenu] = useState(null)


    useEffect(()=> {
        fetchMenu()
    },[])

    const fetchMenu = async () => {
        const response = await fetch(MENU_API+resId)
        const data = await response.json()
        // console.log(data?.data)
        setResMenu(data?.data)
        // setResFilteredMenu(data?.data)
    }

    const itemCards = resMenu?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards


    if(!itemCards) return <Shimmer/>

    console.log(itemCards)

    return (<>
        <div className="w-3/4 mx-auto">
        { 
            itemCards.map((item)=>{
                return <DishCard key={item.card.info.id} itemInfo = {item.card.info}></DishCard>
            })
        }
        </div>
    </>)
}

export default RestaurantMenu

// itemInfo = {item.card.info}