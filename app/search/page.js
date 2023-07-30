"use client";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import { format } from "date-fns";
import { useSearchParams } from "next/navigation";
import searchResult from "../../json/result.json";
import InfoCard from "@/components/InfoCard";
import Maps from "@/components/Map";

function Search() {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const noOfGuest = searchParams.get("noOfGuest");

  const formatedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formatedStartDate} - ${formatedEndDate}`;
  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuest} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            50+ Stays - {range} - for {noOfGuest} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="styles">Cancellation Flexibility</p>
            <p className="styles">Type of Place</p>
            <p className="styles">Price</p>
            <p className="styles">Rooms and Beds</p>
            <p className="styles">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResult.map((item) => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[500px]">
          <Maps />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

// export async function getServerSideProps() {
//   const searchResult = await fetch("https://links.papareact.com/isz").then(
//     (res) => res.json()
//   );

//   return {
//     props: {
//       searchResult,
//     },
//   };
// }
