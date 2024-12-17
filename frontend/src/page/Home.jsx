import React from "react";
import HeroSection from "../components/Home/HeroSection";
import TopPlaces from "../components/Home/TopPlaces";
import ValuesWeProvide from "../components/Home/ValuesWeProvide";
import PlanItinerary from "../components/Home/PlanItinerary";
import Testimonials from "../components/Home/Testimonials";
import LetGetToKnow from "../components/Home/LetGetToKnow";
import TicketSearchPage from "./TicketSearchPage";

const Home = () => {
  return (
    <section className="px-[30px] md:px-[30px] mt-4">
          <div className="flex w-full gap-3">
            <div className="w-2/5 mt-4">
              <div className="sticky top-0">
                <TicketSearchPage />
              </div>
            </div>
        
            <div className="w-3/5 flex flex-col gap-4 p-4">
              <HeroSection />
              <ValuesWeProvide />
              <TopPlaces />
              <Testimonials />
              <PlanItinerary />
              <LetGetToKnow />
            </div>
          </div>
    </section>
  );
};

export default Home;
