import { bySlugs } from "./destinations";

// ─── Site-wide content. Edit here, the pages pick it up. ───

export const site = {
  name: "3B Travels",
  tagline: "Bed | Breakfast | Broadband",
  // TODO: replace with real details
  phone: "+91 99533 00005",
  whatsapp: "919953300005",
  email: "info.3btravels@gmail.com",
  address: "First Floor, 10/30, Block B, West Patel Nagar, Patel Nagar, New Delhi, Delhi, 110008",
  hours: "Mon – Sat, 09:00 AM – 06:00 PM",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const footerNav = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const services = [
  { key: "hotels", label: "Hotels" },
  { key: "air-tickets", label: "Air Tickets" },
  { key: "holiday-tours", label: "Holiday & Tours" },
  { key: "visa", label: "Visa" },
  { key: "insurance", label: "Insurance" },
  { key: "car-rental", label: "Car Rental" },
  { key: "mice", label: "MICE" },
];

export const popularDestinations = bySlugs(["azerbaijan", "turkey", "seychelles", "georgia", "dubai", "singapore"]);

export const featureSlides = [
  {
    title: "Explore the glorious Ladakh",
    text: "Let us plan a tranquil and amusing experience for you, exploring the uncharted territory of the Himalayas.",
    img: "/images/ladakh-banner.jpg",
    slug: "ladakh",
  },
  {
    title: "Unwind in God's own Kerala",
    text: "Backwaters, houseboats and quiet palm-lined villages, planned at your pace.",
    img: "/images/kerala.jpg",
    slug: "kerala",
  },
  {
    title: "Wander through Meghalaya",
    text: "Living root bridges, crystal rivers and cloud-covered hills of the northeast.",
    img: "/images/meghalaya.jpg",
    slug: "meghalaya",
  },
  {
    title: "Find calm in Nepal",
    text: "Ancient stupas, mountain views and warm hospitality in the heart of the Himalayas.",
    img: "/images/nepal.jpg",
    slug: "nepal",
  },
  {
    title: "Discover the magic of Turkey",
    text: "From Istanbul's domes to Cappadocia's skies, a journey through two continents.",
    img: "/images/turkey.jpg",
    slug: "turkey",
  },
  {
    title: "Escape to the Seychelles",
    text: "Granite boulders, turquoise lagoons and beaches made for slow days.",
    img: "/images/seychelles.jpg",
    slug: "seychelles",
  },
];

export const packages = bySlugs(["ladakh", "kerala", "meghalaya", "nepal", "dubai", "singapore"]);

export const tours = bySlugs(["ladakh", "kerala", "meghalaya", "nepal", "georgia", "thailand"]);
