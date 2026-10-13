import { bySlugs } from "./destinations";

// ─── Site-wide content. Edit here, the pages pick it up. ───

export const site = {
  name: "3B Travels",
  tagline: "Bed | Breakfast | Broadband",
  // TODO: replace with real details
  phone: "+91 83683 35710",
  whatsapp: "918368335710",
  email: "kunal@3btravels.com",
  address: "First Floor, 10/30, Block B, West Patel Nagar, Patel Nagar, New Delhi, Delhi, 110008",
  hours: "Mon – Sat, 09:00 AM – 06:00 PM",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  // { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export const footerNav = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
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

export const socials = [
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/3b.travels" },
  { key: "facebook", label: "Facebook", href: "https://www.facebook.com/3btravelscom" },
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/3Btravels" },
];

// TODO: placeholder testimonials. Replace with real client reviews before going live.
export const testimonials = [
  {
    name: "Rahul Sharma",
    trip: "Ladakh Adventure",
    text: "Our Ladakh trip was an amazing experience! The mountain views were breathtaking, hotels were comfortable, and the entire itinerary was well planned. Everything felt smooth and hassle-free."
  },
  {
    name: "Priya Mehta",
    trip: "Dubai Holiday",
    text: "We had a wonderful Dubai holiday with great sightseeing, comfortable stays, and well-organized transfers. The trip was memorable, and we got to enjoy all the places on our list."
  },
  {
    name: "Amit Verma",
    trip: "Kerala Getaway",
    text: "Kerala was the perfect escape from our busy routine. The peaceful backwaters, beautiful greenery, and relaxing stay made this trip truly special. We loved every moment of it."
  },
   {
    name: "Neha Kapoor",
    trip: "Manali Vacation",
    text: "We had a fantastic time in Manali! The hotel was lovely, the sightseeing was well planned, and the whole trip was organized perfectly. It was a refreshing break with beautiful memories."
  },
  {
    name: "Vikram Singh",
    trip: "Thailand Getaway",
    text: "Our Thailand trip was an incredible experience. From beautiful beaches to exciting sightseeing, everything was arranged smoothly. The itinerary gave us enough time to explore and relax without feeling rushed."
  },
  {
    name: "Ananya Gupta",
    trip: "Kashmir Holiday",
    text: "Kashmir was absolutely beautiful, and the trip was a memorable experience for our family. The scenic locations, comfortable accommodation, and well-planned schedule made our holiday stress-free and enjoyable."
  },
];

// Gallery images. Add more files in /public/images and list them here.
export const gallery = [
  { src: "/images/kunal-mehra.jpg", alt: "Kunal Mehra on a Triumph Tiger 900 in the hills", w: 1600, h: 1200 },
  { src: "/images/ladakh-banner.jpg", alt: "Ladakh mountains", w: 1920, h: 1256 },
  { src: "/images/visa-beach.jpg", alt: "Tropical beach", w: 1440, h: 1920 },
  { src: "/images/kerala.jpg", alt: "Kerala backwaters", w: 1200, h: 800 },
  { src: "/images/turkey.jpg", alt: "Turkey", w: 1200, h: 800 },
  { src: "/images/visa-temple.jpg", alt: "Temple", w: 900, h: 1200 },
  { src: "/images/seychelles.jpg", alt: "Seychelles", w: 1200, h: 800 },
  { src: "/images/meghalaya.jpg", alt: "Meghalaya", w: 1200, h: 800 },
  { src: "/images/highlights-asia.jpg", alt: "Boats in a turquoise bay", w: 1920, h: 1280 },
  { src: "/images/nepal.jpg", alt: "Nepal", w: 1200, h: 800 },
  { src: "/images/dubai.jpg", alt: "Dubai", w: 1200, h: 767 },
  { src: "/images/georgia.jpg", alt: "Georgia", w: 1200, h: 800 },
  { src: "/images/singapore.jpg", alt: "Singapore", w: 1200, h: 800 },
  { src: "/images/azerbaijan.jpg", alt: "Azerbaijan", w: 1200, h: 800 },
];
