import React from "react";
import { PropertyProps } from "@/interfaces";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="border rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
      {/* Image */}
      <img
        src={property.image || "/assets/images/placeholder.jpg"}
        alt={property.name}
        className="w-full h-48 object-cover"
      />

      {/* Details */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{property.name}</h3>
        <p className="text-sm text-gray-500">${property.price} / night</p>
        <p className="text-yellow-500 text-sm">⭐ {property.rating}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
