import React from "react";
import DestinationImage1 from "/src/assets/Images/damiano-baschiera-hFXZ5cNfkOk-unsplash.jpg";
import DestinationImage2 from "/src/assets/Images/ryan-spencer-XGKaRnWjv1c-unsplash.jpg";
import "../Styles/Destination.css";
import DestinationImage4 from "/src/assets/Images/shifaaz-shamoon-okVXy9tG3KY-unsplash.jpg";
import DestinationData from "./DestinationData";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations</h1>
      <p>
        <i>
          Traveling - it leaves you speechless, then turns you into a storyteller. - Ibn Battuta{" "}
        </i>{" "}
      </p>

      <DestinationData
      className="first-des"
        heading={"Santorini"}
        text="In Santorini the blue of the sea blends with the blue of the sky and the blue roofs of the houses. This island, ranked among the best destinations for a honeymoon in Europe, is also one of the most beautiful Greek islands.
The easiest way is to book a direct flight to Santorini You can also take a connectiona connecting flight) from Athens to Santorini (1h).
You have plenty of time and do not want to rush to your destination? You can experience a ferry trip and  discover the Santorini archipelago in Ferry. It starts from the port of Athens (Piraeus) which is easy to access, the metro stops a few metres from the boat dock and there are crossings several times a day (mainly in the morning between 8am and 10am). The crossing lasts about 6 hours."
        image1={DestinationImage1}
        image2={DestinationImage2}
        image3={DestinationImage4}
      />
      <DestinationData
       className="first-des-reverse"
        heading={"Corfu"}
        text="The beach of Paleokrastritsa and its monastery, the nightlife of Sidari and the beach of the Canal d'amour, the seaside resort of Agios Georgios or the old town of Corfu and its rich Byzantine heritage await you this summer.
        The best time of the year to visit Corfu is certainly spring (from May) and summer (until late August). April and September are quite rainy but not as much as November and December that should be avoided. Be that as it may, all this rain that falls in winter makes Corfu one of the greenest and most beautiful Greek islands.
        
         
        
        The island is the perfect destination for an unforgettable holiday under the sun. It was marked by the Venetian, Arabic and British cultures as it was under their control for centuries. Come discover this rich historical past, stay at its paradisiacal beaches, enjoy its wine, its virgin olive oil and offer yourself a private Corfu full-day wine tasting tour or a 5-hour private Corfu & Achillion palace tour.."
        image1={DestinationImage1}
        image2={DestinationImage2}
        image3={DestinationImage4}

      />
      <DestinationData
       className="first-des"
        heading={"Mykonos"}
        text="Mykonos is one of the most famous Greek islands; you will love its mills, terraces of the district of 'Little Venice' licked by the waves,its whitewashed houses and its blue roofs.

        Revelers from all over the world love Mykonos but the island has a wide variety of faces: it is popular with gay travellers but also nature lovers, hikers, water sports enthusiasts or families, Mykonos has it all. 
        
         
        
        The easiest way to get there is to book your direct flights to Mykonos or pass through Athens and take a domestic flight (40 minutes) to Mykonos. You can also reach the island by ferry from the Port of Piraeus to Athens. It is easily accessible by metro and several crossings connect Athens to Mykonos every day of the week (3 hours crossings). Book your accommodation at the best price and your best tours in Mykonos.
        The island is the perfect destination for an unforgettable holiday under the sun. It was marked by the Venetian, Arabic and British cultures as it was under their control for centuries. Come discover this rich historical past, stay at its paradisiacal beaches, enjoy its wine, its virgin olive oil and offer yourself a private Corfu full-day wine tasting tour or a 5-hour private Corfu & Achillion palace tour.."
        image1={DestinationImage1}
        image2={DestinationImage2}
        image3={DestinationImage4}

      />
    </div>
  );
};

export default Destination;
