export interface Product {
  slug: string;
  name: string;
  category: string;
  price: number; // KES
  available: boolean;
  image: string;
  description: string;
}

export const categories = [
  "GPS & Tracking",
  "Phones & Accessories",
  "Computers & Laptops",
  "CCTV & Security",
  "Networking Equipment",
  "Car Electronics",
  "Power & Charging",
  "Smart Devices",
] as const;

export const products: Product[] = [
  {
    slug: "compact-gps-vehicle-tracker",
    name: "Compact GPS Vehicle Tracker",
    category: "GPS & Tracking",
    price: 8500,
    available: true,
    image: "/images/products/gps-tracker.svg",
    description:
      "Entry-level GPS tracker for personal vehicles with real-time location and geofencing.",
  },
  {
    slug: "fleet-gps-tracker-pro",
    name: "Fleet GPS Tracker Pro",
    category: "GPS & Tracking",
    price: 12500,
    available: true,
    image: "/images/products/gps-tracker-pro.svg",
    description:
      "Rugged tracker built for commercial vehicles and fleets, with driver behavior monitoring.",
  },
  {
    slug: "motorbike-gps-tracker",
    name: "Motorbike GPS Tracker",
    category: "GPS & Tracking",
    price: 6500,
    available: true,
    image: "/images/products/gps-tracker-moto.svg",
    description: "Compact, weatherproof tracker designed for motorbikes and boda bodas.",
  },
  {
    slug: "android-smartphone-mid-range",
    name: "Android Smartphone (Mid-range)",
    category: "Phones & Accessories",
    price: 18999,
    available: true,
    image: "/images/products/phone.svg",
    description: "Reliable mid-range Android smartphone with dual SIM support.",
  },
  {
    slug: "fast-charger-20w",
    name: "20W Fast Charger",
    category: "Power & Charging",
    price: 1500,
    available: true,
    image: "/images/products/charger.svg",
    description: "USB-C fast charger compatible with most modern smartphones.",
  },
  {
    slug: "business-laptop-14inch",
    name: "Business Laptop 14-inch",
    category: "Computers & Laptops",
    price: 54999,
    available: true,
    image: "/images/products/laptop.svg",
    description: "Lightweight laptop for everyday business and office use.",
  },
  {
    slug: "wireless-cctv-camera-kit",
    name: "Wireless CCTV Camera Kit (4-Channel)",
    category: "CCTV & Security",
    price: 32500,
    available: true,
    image: "/images/products/cctv.svg",
    description: "4-camera wireless CCTV kit with mobile app viewing and night vision.",
  },
  {
    slug: "wifi-router-dual-band",
    name: "Dual-Band Wi-Fi Router",
    category: "Networking Equipment",
    price: 6999,
    available: true,
    image: "/images/products/router.svg",
    description: "Dual-band router for reliable home and office Wi-Fi coverage.",
  },
  {
    slug: "car-dash-camera",
    name: "Car Dash Camera (Full HD)",
    category: "Car Electronics",
    price: 5500,
    available: true,
    image: "/images/products/dashcam.svg",
    description: "Full HD dash camera with loop recording and night vision.",
  },
  {
    slug: "smart-power-bank-20000mah",
    name: "Smart Power Bank 20,000mAh",
    category: "Power & Charging",
    price: 3200,
    available: true,
    image: "/images/products/powerbank.svg",
    description: "High-capacity power bank with fast charging for phones and tablets.",
  },
  {
    slug: "smart-home-plug",
    name: "Smart Wi-Fi Plug",
    category: "Smart Devices",
    price: 2200,
    available: false,
    image: "/images/products/smartplug.svg",
    description: "App-controlled smart plug for home automation. Currently out of stock.",
  },
];
