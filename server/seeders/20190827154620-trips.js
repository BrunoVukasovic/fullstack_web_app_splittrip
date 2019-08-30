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
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Trips", null, {});
  }
};
