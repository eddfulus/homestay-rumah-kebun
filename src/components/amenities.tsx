import {
  Wifi,
  Tv,
  Car,
  Utensils,
  Snowflake,
  //ShowerHeadIcon as SwimmingPool,
} from "lucide-react";

const amenities = [
  { name: "Free Wi-Fi", icon: Wifi },
  { name: "Smart TV", icon: Tv },
  { name: "Free Parking", icon: Car },
  { name: "Fully Equipped Kitchen", icon: Utensils },
  { name: "Air Conditioning", icon: Snowflake },
  //{ name: 'Swimming Pool', icon: SwimmingPool },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-16 px-4 md:px-8 bg-white">
      <h2 className="text-3xl text-black font-bold text-center mb-8">
        Amenities
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {amenities.map((amenity, index) => (
          <div key={index} className="flex items-center text-black">
            <amenity.icon className="w-6 h-6 mr-2 text-primary text-black" />
            <span>{amenity.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
