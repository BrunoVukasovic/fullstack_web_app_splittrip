"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Trips",
      [
        {
          Heading: "Krka Waterfalls",
          Description:
            "Adventure starts at our meeting point. We are on the way to Krka National park from Split in the air-conditioned mini-van or bus. <br /> <br /> In about an hour and 30 minutes we arrive to Krka National Park and embark on a tour. First up is the charming town of Skradin where we take the <strong>30-minutes boat ride</strong> to Skradinski buk and back, one of the most famous Croatian natural beauties and the largest travertine waterfall in Europe. <br /> <br /> Skradinski buk is the last of seven waterfalls on the Krka River but sure not the least as it creates most travertine cascades, islands and lakes. In over 17 steps of Skradinski buk, spread over 800 meters in length, lies one of the most unusual and beautiful landscape images of the National Park. <br /> <br /> Our program includes a <strong> fascinating tour of an authentically restored ensemble of stone small houses </strong> , workshops, exhibits and watermills and a beautiful walk through forest pathways and wooden bridges designed to let you experience the rich diversity of flora and fauna there. <br /> <br /> Enjoy the magnificent Skradinski buk, lunch and <strong>free time for swimming and paddling</strong> under a little waterfall; the perfect way to cool off in the sweltering summer day! The final adventure is a visit to a historic, seaside city of Sibenik, available only in March, April, May and October. The return to Split along the coast road is gorgeous – picturesque villages and beautiful offshore islands. <br /> <br /> <strong>NOTE:</strong> Guests should have proper clothing for taking the tour: sportswear, bathing suite, comfortable shoes, additional clothes for change. Out of season warm sweater. <br /> <br /> <br /> <br />",
          Price: 100,
          Slug: "/krka",
          CategoryID: 1,
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        },
        {
          Heading: "Sailing",
          Description:
            "Set sail with us and cruise to the islands of Šolta, Brač or Čiovo on an unforgettable sailing tour. Anchor in secluded bay, discover rich underwater life while snorkeling. Visibility in the Adriatic can be clear up to 30 meters so snorkeling is a must. <br /> <br /> Swim in crystal clear Adriatic sea while our chef prepares light Dalmatian lunch with fresh ingredients. During lunch indigenous Croatian eco-wines will be served on the boat. <br /> <br /> Tour departs at 10 am and return to Split is around 5 pm. There is no strict route here as sailing depends on the weather conditions but we know that islands Brac, Solta and Ciovo will reveal their pristine beauty and implant unforgettable memories. <br /> <br /> Maximum number of person on the boat is 8. Boat can also be rented for private sail. <br /> <br /> This one day trip is the perfect choice to explore the whole area around Split. <br /> <br />",
          Price: 100,
          Slug: "/sailing",
          CategoryID: 2,
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        },
        {
          Heading: "Blue Cave",
          Description:
            "For all sea lovers, but also for those who want to see something unique, Blue cave tour from Split is perfect excursion! Jump on speedboat for an early morning exciting<strong> 90 minutes ride to Biševo Island </strong>and the Blue cave visit from Split. We will arrive around 09:30h, just in time for memorable scenery when the sunlight reflects through the sea and illuminates the entire cave in <strong>aquamarine blue light</strong>. Listen the story from official local guide of how the cave was discovered and what makes the magic. <br /> <br /> After the cave tour, we are back on a speedboat to our next attraction which is <strong>Monk Seal cave</strong>, where the Mediterranean monk seal used to reside. Passing beside picturesque southern side of the island Vis, where full of caves, beaches and diverse forms of nature and rocks caused by changes on the sea, our next destination is Stiniva bay, voted best European beach in 2016., where we'll stop for a swim in the unique narrow bay that ends with a white pebbles beach. <br /> <br /> Afterwards we stop on Budikovac island for a longer swim on hidden white pebble beach with turquoise sea color. On our way to the island of Hvar you will enjoy the panoramic view of the amazing archipelago of Pakleni islands – the oldest and the most famous Hvar’s resort, spacious lagoon with shallow sandy beaches, surrounded by pine forest, fragrant heather and rosemary bushes and various exotic plants. <br /> <br /> Free time for a lunch in Palmizana at Pakleni islands. Our final stop is town of Hvar, on the island Hvar, <strong> one of most beautiful harbours of the world</strong>, with beautiful nature and surroundings, as well a rich cultural heritage, with walls dating back to the 7th century, and many 15th-17th century Venetian era noble houses. Explore the town by yourself and enjoy the real Mediterranean atmosphere and local hospitality. <br /> <br /> Our Blue cave and Hvar tour from Split ends with a quiet ride on the smooth sea at sunset, so you can enjoy all the beauty and all the colors of the sunset at the open sea. There you will have more time for swimming and sunbathing on a beautiful pebble beach. <br /> <br /> <strong>NOTE:</strong> Guest should have proper clothing, wind jacket, bathing suite, hat, additional clothes for change, towel, sunglasses and suncream. <br /> <br /> ",
          Price: 100,
          Slug: "/blue-cave",
          CategoryID: 2,
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        },
        {
          Heading: "Rafting on Cetina",
          Description:
            "If you’re looking for a fun and exciting outdoor adventure during your vacation in Split, we have exactly what you need! Rafting on Cetina river from Split has long been an exciting and popular adventure sport that brings friends and families together to share a unique, memorable experience. Rafting on the Cetina river from Split is the most popular trip for a reason: there simply isn't a better way to beat the heat than to climb into a raft and take off down a cool river. <br /> <br /> Rafting in protected area of the river canyon attracts many tourists every summer. The quiet parts of the river and the second and third grade rapids enable a three hour combination of adventure and relaxation in the amazing Cetina river canyon. <br /> <br /> Rafting on Cetina river from Split starts with transfer by a van to the starting point where skippers, equipment and boats already wait for you. Skippers will give you basic instructions about the trip and help you choose the suitable equipment. From there, the rafting adventure can start and you can enjoy three hours of rafting on the nine kilometers long route. Cetina is of one of the most beautiful Croatian rivers where you can see rapids, waterfalls, caves and quiet parts of the river rich in flora and fauna. After the unforgettable adventure you can change your clothes at the finish point. If you want to experience the rafting adventure on the Cetina River you do not need to be physically prepared or experienced. <br /> <br /> Children aged 7 – 12 can also experience this adventure, but accompanied by their parents. <br /> <br /> Distance from start to finish: 9.000 meters <br /> <br /> River temperature: Between 14°C and 17°C. It depends on the season. <br /> <br /> Swimming: you can swim at few of the stops during the trip. <br /> <br /> Rafting equipment: inflatable boats, neoprene pants and jacket, a life jacket, a helmet and a paddle. <br /> <br /> Equipment & Staff: All equipment used is registered and certified at the EU. All customers must wear Personal Flotation Devices (PFD) and helmets at all times while on the river. All of our professional guides are registered at Croatian mountain rescue service. Our tour leaders are IRF(International rafting federation) certified. Staff members speak Croatian and English. <br /> <br />",
          Price: 100,
          Slug: "/rafting",
          CategoryID: 3,
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        },
        {
          Heading: "Zip line Omis",
          Description:
            "Zipline is an adrenaline entertainment where guests descend through the canyon down the steel wire rope, secured with a belt. Adventure also includes training and a short walk in nature. <br /> <br /> Zipline is located 3 km from Omis, in the canyon of the Cetina River and consists of eight wires total length of 2100m . Depending on the size of the group, zipline gives you up to 3 hours of unforgettable fun and beautiful nature. <br /> <br /> We organized the transfer to the start and back (3 km from Omis) by our vehicle. Before the beginning, the group goes to the training ground and each guest receives equipment . There are two short wires, length 25m , where guides show you how to brake and act on cable. The next thing is a short walk to the first wire. During the walk, you can enjoy the beautiful, almost untouched nature and stunning views of the Cetina river canyon. Before each wire, one of the guides demonstrate descend, while the second guide attaches you and gives you instructions. First guide welcomes you at the beginning of the second wire. That is the system to pass all eight wires. <br /> <br /> The finish point of a zipline tour is located 50m from the road, and there is our van waiting to take you back to Split. ",
          Price: 100,
          Slug: "/zip",
          CategoryID: 3,
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        },
        {
          Heading: "Brac",
          Description:
            "Golden horn and Bol tour from Split starts with 1 hour cruise on the mega catamaran to island Brač, starting with Summer Blues welcome drink. <br /> <br /> Discover the inland of island Brač during the organized 2 hour panoramic bus tour from Supetar to Bol with professional guide, including a stop on “Vidova Gora” to enjoy breathtaking views and take photos. <br /> <br /> Finaly we arrive at the famous beach Golden Horn where you’ll have 2 hours free time for swimming and sun. <br /> <br /> Early afternoon, at 15:00, we’ll walk through the village of Bol and continue our journey on the Summer Blues catamaran. While we cruise along the south side of island Brač and admire the views of wineyards, lunch will be served and the bar with the all inclusive drinks is open till the end of the excursion. <br /> <br /> Our next highlight is the natural bay „Lučice“ where catamaran anchors for a swim stop, enjoy every second in the pure paradise. We are relaxed and ready to start the sailing tour to Split including one more swim stop in another hidden bay of island Brač. <br /> <br /> On board more fresh fruits and delicious dailly cakes are served; the bar with drinks is still open and the dance music entertainment during the sunset <br /> <br /> ",
          Price: 100,
          Slug: "/brac",
          CategoryID: 2,
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        },
        {
          Heading: "Canyoning",
          Description:
            "We will pick you up at arranged meeting points (if you take a transfer). Following the highway we will reach Zadvarje. Getting ready for the truly exciting adventure along the Cetina River canyon follows our arrival. After instructors provide you with a life-jacket, a helmet, a long neoprene pants and jacket, the small expedition will be ready for the unknown. Our tour guide will help you to get familiar with the route and rules of the excursion to ensure the safety of all participants. <br /> <br /> What is canyoning? You slowly go down the canyon while the sound of the river amplifies, so after a ten-minute walk you will find yourself deep in the canyon carved by Cetina River. You walk through the river and rapids, pass through subterranean tunnels, swim in natural river basins, bypass waterfalls and lakes...That is canyoning experience! Swimming in the lake into which the waterfall thunders from a height of 60m and the climb to the “step” behind the “water curtains” will be an experience worth remembering. For thousands of years Cetina River has been flowing persistently through the canyon, creating magical shapes in its bed. Crystal clear and pleasant for swimming, the Cetina River today represents the genuine experience of the intact nature with its 180 meters high cliffs, wild rapids, basins, lakes, subterranean tunnels and a 60 meters high waterfall called Gubavica. <br /> <br /> Equipment and staff: All equipment used is registered and certified at the EU. All participants must wear Personal Flotation Devices and helmets at all times while on the river. <br /> <br /> All guides are registered at Croatian mountain rescue service. Our tour leaders are IRF (International rafting federation) certified. Staff members speak Croatian and English.",
          Price: 100,
          Slug: "/canyoning",
          CategoryID: 3,
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        },
        {
          Heading: "Diving",
          Description:
            "Safety and a serious approach are the most important for relaxed diving, and for those reasons our priorities are quality choice and education of the guides, and a quality preparation before the dive. Discover a new dimension of the world with us and take our diving courses done by old American diving school PADI (Professional Association of Diving Instructors), oldest and biggest diving organization in the world. <br /> <br /> We offer you a diving trips on attractive diving locations on daily basis. <br /> <br /> Diving trips can be half-day or one-day trips. <br /> <br /> Half-day diving trip consist of one dive on attractive location of your choice. Departure is at 10:00 AM, return to Split at 14:00 PM. <br /> <br /> One-day diving trip consists of two dives on attractive locations of your choice. Departure is at 10:00 AM, arrival to Split at 16:00 PM. <br /> <br /> Locations of diving trips are: <br /> <br /> Island Čiovo (Wreck Pajo and Red rocks) <br /> <br /> Kluda <br /> <br /> Kraljevac (Wreck Dube) <br /> <br /> Island Šolta (Wreck Ribolovac) <br /> <br /> Island Brač (Cave Dragon’s eye) <br /> <br /> Island Hvar, and other locations upon agreement. <br /> <br /> <br /> <br /> Besides trips, we offer diving courses are for all age 8-78 years old candidates. <br /> <br /> Also you can do many specialities like: boat diving, deep diving, dry suit diving, night diving, search and recovery, underwater navigation, underwater photography, wreck diving. <br /> <br /> ",
          Price: 100,
          Slug: "/diving",
          CategoryID: 3,
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        },
        {
          Heading: "Dubrovnik",
          Description:
            "Excursion starts at the pre-arranged meeting point, where you will begin a full day of experiencing and discovering famous walls of Dubrovnik, a UNESCO World Heritage site. <br /> <br /> Drive in air-conditioned van goes along the winding coast and stops at several overlooks for amazing panoramic views of the Dalmatian islands. <br /> <br /> Arrival to Dubrovnik (Croatia's most famous medieval city and also the “pearl of the Adriatic”) is around noon. <br /> <br /> The tour begins at the monumental Pile Gate, built on the top of Stradun, a splendid main promenade street of the Old Town. You will get to sightsee Franciscan Monastery (its cloister is one of the most impressive sites in the city!) then stop by the oldest pharmacy in Europe opened in 1317. Nearby stands Sponza Palace, notable for its portico with columns and elaborate stone carvings which today houses the State Archives. <br /> <br /> Tour ends with a visit to the Cathedral where you will learn more how it was built on the ruins of a 12th century church, then destroyed by the great earthquake of 1667. The guided tour lasts for about an hour and a half and after sightseeing the most important parts of the Old Town, there's time to go back and explore its hidden corners by yourself. You can climb the stairs to the walls that let you walk around the Old Town from high up on its ramparts or even take a cable car for a amazing view of the famous red tile roofs and the sea. <br /> <br /> Dubrovnik leaves nobody unimpressed! <br /> <br /> <strong>Bring passport!</strong> <br /> <br />",
          Price: 100,
          Slug: "/dubrovnik",
          CategoryID: 1,
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        },
        {
          Heading: "Mostar",
          Description:
            "The journey starts with driving between the Dalmatian coast and hinterland. <br /> <br /> Our first destination is Mostar (ancient Ottoman city known as ˈthe window to the Orient'), where you will get to explore the Old Bazaar, full of picturesque shops and crafts workshops, then sightsee the Mosque. <br /> <br /> Afterwards, you will enjoy a walk along the famous 16th century Turkish bridge. After guided tour you’ll have enough free time for shopping unique souvenirs and opportunity to taste authentic Bosnian specialties like ćevapi, pita or burek. <br /> <br /> Last stop is amazing Kravica Waterfall to cool-off before we return to Split. <br /> <br /> <strong>Bring passport!</strong> <br /> <br /> ",
          Price: 100,
          Slug: "/mostar",
          CategoryID: 1,
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        },
        {
          Heading: "Plitvice lakes",
          Description:
            "Immerse yourself in exceptional natural beauty, in a place so magical you can't even believe it exists. A magical mix of waterfalls and lakes, all set against a lush green backdrop, this national park is a must. <br /> <br /> In about three and a half hours drive we arrive to Plitvice National Park, the largest, the oldest and most famous national park in Croatia, which was declared as UNESCO world heritage in 1979. (among the first in the world). Plitvice Lakes National Park is a special geological and hydrogeological phenomenon with natural and rich biodiversity. The oldest national park in Croatia represents a forested mountain area and a series of 16 crystal blue lakes. Lakes receive water from numerous rivers and streams, and they are connected by cascades and waterfalls. Travertine barriers, which were made in the period of ten thousand years ago are one of the fundamental features of the park. Vast forests, extraordinary beauty of lakes and waterfalls, flora and fauna, contrasting autumn colors, trails and wooden bridges form a remarkable and unforgettable beauty. <br /> <br /> Upon arriving at Plitvice you will walk through woodland. The path takes you across Upper Lakes and then it is time for boat ride within the sound of the waterfalls to Lower Lakes. Get ready to walk across the lake on charming wooden paths, as well as an unforgettable thunder produced by Great Falls, 78 meters high waterfall. Tour ends with a panoramic train ride through the forest, but after that there is a plenty of time for lunch at local tavern or for a picnic in the shade, next to the magnificent lake. <br /> <br /> <strong>NOTE:</strong> Guests should have proper clothing; sportswear, closed comfortable shoes. Out of season don’t forget warm sweater, umbrella or raincoat. <br /> <br /> ",
          Price: 100,
          Slug: "/plitvice",
          CategoryID: 1,
          CreatedAt: new Date().toISOString(),
          UpdatedAt: new Date().toISOString()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Trips", null, {});
  }
};
