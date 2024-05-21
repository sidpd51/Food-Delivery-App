import { CDN_URL } from "../utilities/content"

const RestaurantCard = (props) => {
    const {name, avgRating, sla, cloudinaryImageId, cuisines} = props.resInfo
    return (
        <div className="md:h-96 sm:h-auto rounded-xl bg-gray-200 p-4 hover:bg-gray-300 cursor-pointer" >
            <img className="h-44 rounded-lg w-full" src={CDN_URL+cloudinaryImageId} alt={name} />
            <div className="mt-3">
                <h1 className="mt-1 sm:text-m font-semibold">{name}</h1>
                <h3 className="subpixel-antialiased mt-1 sm:text-xs pb-0">{cuisines.join(', ')}</h3>
                <p className="subpixel-antialiased mt-1 sm:text-xs pb-0">{avgRating} stars</p>
                <p className="subpixel-antialiased mt-1 sm:text-xs pb-0">{sla.deliveryTime} mins</p>
            </div>
        </div>
    )
} 

export default RestaurantCard