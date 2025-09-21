export interface CardProps {
  // Define CardProps properties
  title: string;
  description: string;
  // Add more properties as needed
}

export interface ButtonProps {
  // Define ButtonProps properties
  text: string;
  onClick: () => void;
  // Add more properties as needed
}

// interfaces/index.ts

export interface Address {
  state: string
  city: string
  country: string
}

export interface Offers {
  bed: string
  shower: string
  occupants: string
}

export interface PropertyProps {
  name: string
  address: Address
  rating: number
  category: string[]
  price: number
  offers: Offers
  image: string
  discount: string
}
