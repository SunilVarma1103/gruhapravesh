/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "links.papareact.com",
      "cdn.pixabay.com",
      "lh6.googleusercontent.com",
      "lh5.googleusercontent.com",
      "is1-3.housingcdn.com",
      "r2imghtlak.mmtcdn.com",
    ],
  },
  env: {
    mapbox_key:
      "pk.eyJ1Ijoic3VuaWx2IiwiYSI6ImNsa284ZHZzcTA1a3QzZG4xa3lrdW93b3cifQ.Yr8N4SSWR8e2_4TMvryABw",
  },
};

module.exports = nextConfig;
