// pages/index.tsx
import { PROPERTYLISTINGSAMPLE, HERO_BG } from "@/constants"
import { PropertyProps } from "@/interfaces"

const filters = ["Top Villa", "Self Checkin", "Pet Friendly", "Luxury", "Beachfront"]

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-[60vh] bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      >
        <h1 className="text-4xl md:text-5xl font-bold">Find your favorite place here!</h1>
        <p className="mt-4 text-lg md:text-xl">
          The best prices for over 2 million properties worldwide.
        </p>
      </section>

      {/* Filter Section */}
      <section className="px-6 py-8 flex flex-wrap gap-3 justify-center">
        {filters.map((filter, idx) => (
          <span
            key={idx}
            className="px-4 py-2 bg-gray-200 rounded-full text-sm cursor-pointer hover:bg-indigo-600 hover:text-white"
          >
            {filter}
          </span>
        ))}
      </section>

      {/* Listing Section */}
      <section className="px-6 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROPERTYLISTINGSAMPLE.map((property: PropertyProps, idx: number) => (
          <div
            key={idx}
            className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{property.name}</h2>
              <p className="text-sm text-gray-600">{property.address.city}, {property.address.country}</p>
              <p className="mt-2 font-bold">${property.price}</p>
              <p className="text-yellow-500">⭐ {property.rating}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
