import SmallCard from "@/components/SmallCard";
import Banner from "@/components/banner";
import Header from "@/components/header";
import Image from "next/image";
import Data from "../json/data.json";
import Datas from "../json/card.json";
import MediumCard from "@/components/MediumCard";
import LargeCard from "@/components/LargeCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      {/* Header */}
      <Header />
      {/* banner */}
      <Banner />

      <main className="max-w-7xl mx-auto  px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* pull data from server */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Data?.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {Datas.map((item) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <LargeCard img="https://links.papareact.com/4cj" title="The Greatest Outdoor" description="Your Dreams are Curated by GruhaPravesh" buttonText="Do GruhaPravesh Now"/> 
      </main>

      <Footer/>
    </div>
  );
}
