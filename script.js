const questions=[
    {
        image: "jewelry.png",
        correct:5,
        question:'Which advertisement is about ___?',
        options: [
            "free fine-tuning if you buy anything from the shop this week",
            "handmade organic skincare products",
            "finding a living space with immediate availability",
            "a place where you can purchase handcrafted ceramics",
            "unusual hobbies",
            "a discount for accessories",
            "a gathering where you can explore contemporary exhibitions",
            "an art gallery"
          ]
    },
    {
        image: "guitar.png",
        correct:0,
        question:'Which advertisement is about ___?',
        options: [
            "free fine-tuning if you buy anything from the shop this week",
            "handmade organic skincare products",
            "finding a living space with immediate availability",
            "a place where you can purchase handcrafted ceramics",
            "unusual hobbies",
            "a discount for accessories",
            "a gathering where you can explore contemporary exhibitions",
            "an art gallery"
          ]
    },
    {
        image: "rent.png",
        correct:2,
        question:'Which advertisement is about ___?',
        options: [
            "free fine-tuning if you buy anything from the shop this week",
            "handmade organic skincare products",
            "finding a living space with immediate availability",
            "a place where you can purchase handcrafted ceramics",
            "unusual hobbies",
            "a discount for accessories",
            "a gathering where you can explore contemporary exhibitions",
            "an art gallery"
          ]
    },
    {
        image: "soap.png",
        correct:1,
        question:'Which advertisement is about ___?',
        options: [
            "free fine-tuning if you buy anything from the shop this week",
            "handmade organic skincare products",
            "finding a living space with immediate availability",
            "a place where you can purchase handcrafted ceramics",
            "unusual hobbies",
            "a discount for accessories",
            "a gathering where you can explore contemporary exhibitions",
            "an art gallery"
          ]
    },
    {
        image: "exhibition.png",
        correct:6,
        question:'Which advertisement is about ___?',
        options: [
          "free fine-tuning if you buy anything from the shop this week",
          "handmade organic skincare products",
          "finding a living space with immediate availability",
          "a place where you can purchase handcrafted ceramics",
          "unusual hobbies",
          "a discount for accessories",
          "a gathering where you can explore contemporary exhibitions",
          "an art gallery"
        ]
    }
]
const questionsTask2=[
  {
      correct:1,
      question:'6. What was the purpose of the 1916 Zoning Resolution in New York City?',
      options: [
          "To limit the height of buildings to preserve city views.",
          "To prevent skyscrapers casting shadows over the streets below.",
          "To regulate the number of new buildings in the city.",
          "To create new parks and green spaces.",
        ]
  },
  {
      correct:0,
      question:'7. What does the term "melting pot" refer to in the context of New York City?',
      options: [
          "A place where various cultures and languages mix.",
          "A cooking utensil used in many city restaurants.",
          "A traditional dish served at New York's famous eateries.",
          "A type of architectural style seen in the city's buildings.",
          
        ]
  },
  {
      correct:1,
      question:'8. According to the text, why might New York City be an excellent place to practice a new language?',
      options: [
          "Because it has many language schools.",
          "Due to the variety of languages spoken by its residents.",
          "Because of its language exchange programs.",
          "Due to the large number of international tourists.",
          
        ]
  },
  {
      correct:1,
      question:'9. What historical change occurred in New York City in 1664?',
      options: [
          "The Dutch settlers returned to Europe.",
          "The city got its present name.",
          "The city was officially established as a major trading post.",
          "New Amsterdam was merged with other Dutch colonies.",
          
        ]
  },
  {
      correct:2,
      question:'10. What is the significance of the nickname "the Big Apple" for New York City?',
      options: [
          "It represents the city's transformation from a small town to a large metropolis.",
          "It reflects the city's numerous cultural festivals and events.",
          "It symbolizes New York's role as the hub of potential and enthusiasm.",
          "It denotes the city's large apple orchards in the past.",
          
        ]
  }

]
const questionsTask3 = [
  {
    text: " <b>Fascinating people's stories</b> <br> In June 2018, after football practice, 12 boys and their 25-year-old coach decided to explore Tham Luang cave in Thailand. They walked into the cave, but a flash flood forced them deeper, and they ended up on a platform four kilometers in. The cave filled with water, trapping them for 17 days. With no food for the first nine days, they drank water from dripping stalactites and took turns digging a hole, hoping to escape. Finally, some divers found them. It was a long and dangerous journey to bring them out of the cave. The boys had to wear special masks to breathe underwater and hold hands with two divers while they swam through dark, narrow tunnels. Sadly, one rescuer, a former Thai Navy Seal died during that operation.",
    questionText: "11. Which of the options states that...",
    options: [
      "The man didn't mean to make such a long voyage alone.",
      "An unusual way was found to get saved from the cavern.",
      "That woman lived alone in a temporary camp for two years.",
      "The voyage was interrupted by marine animals.",
      "The expedition was too dangerous for these scientists to move on.",
      "That person had to injure himself to survive.",
      "That person had a short flight in an unusual vehicle.",
      "That person got lost looking for some insects.",
    ],
    correct: 1
  },
  {
    text: " <b>Fascinating people's stories</b> <br> Cindy Busick from Sanford, NC, had an incredible escape from a tornado. The tornado struck her home, tearing it apart and sending her 75 yards away while she was in her bathtub. 'I flew a football field length in a bath tub,' remembered Cindy, the survivor. The woman had crawled under the bathtub to stay safe. After the tornado, she found that her belongings were scattered up to 70 miles away. With only a few clothes left, Cindy got emergency help from the Red Cross. Her husband, Kevin, who came back from Africa after the tornado, found his wedding band in the ruins. Cindy and Kevin are grateful for the help they had received and plan to give back when they can.",
    questionText: "12. Which of the options states that...",
    options: [
      "The man didn't mean to make such a long voyage alone.",
      "An unusual way was found to get saved from the cavern.",
      "That woman lived alone in a temporary camp for two years.",
      "The voyage was interrupted by marine animals.",
      "The expedition was too dangerous for these scientists to move on.",
      "That person had to injure himself to survive.",
      "That person had a short flight in an unusual vehicle.",
      "That person got lost looking for some insects.",
    ],
    correct: 6
  },
  {
    text: " <b>Fascinating people's stories</b> <br> The Sierra Nevada mountains are a popular destination for tourists and hikers. On August 6, 2014, Mike Vilhauer set out for a day of fly fishing in this picturesque region. After several hours of unsuccessful fishing, he decided to use grasshoppers instead of flies and went to find some. Enjoying the walk, Mike lost track of time and realized it was getting dark. Unable to return to his spot, he spent the night under a pine tree. His phone signal was blocked by the mountains. Some days he followed a small stream but got even more lost. Then he heard a rescue helicopter but it didn't spot him. Returning to his temporary camp, he finally saw a rescue dog and a search team. They had been looking for him since Friday. Mike was exhausted but otherwise fine.",
    questionText: "13. Which of the options states that...",
    options: [
      "The man didn't mean to make such a long voyage alone.",
      "An unusual way was found to get saved from the cavern.",
      "That woman lived alone in a temporary camp for two years.",
      "The voyage was interrupted by marine animals.",
      "The expedition was too dangerous for these scientists to move on.",
      "That person had to injure himself to survive.",
      "That person had a short flight in an unusual vehicle.",
      "That person got lost looking for some insects.",
    ],
    correct: 7
  },
  {
    text: " <b>Fascinating people's stories</b> <br> British dairy farmer Dougal Robertson wanted to give his family an adventure, so on January 27, 1971, he, his wife, and their four children set sail on a wooden boat named Lucette. Despite Dougal's background in the British merchant navy, he hadn't prepared much for the trip. The family enjoyed their time sailing until June 15, 1972, when killer whales attacked their boat near the Galapagos Islands, damaging it badly and causing it to sink. With only a lifeboat, a small dinghy, and six days' worth of food, they survived on rainwater and hunted turtles. After 16 days, their lifeboat became unusable, and they moved to the overcrowded dinghy. They were rescued by Japanese fishermen on July 23, 1972. The Robertson family had been lost at sea for 38 days.",
    questionText: "14. Which of the options states that...",
    options: [
      "The man didn't mean to make such a long voyage alone.",
      "An unusual way was found to get saved from the cavern.",
      "That woman lived alone in a temporary camp for two years.",
      "The voyage was interrupted by marine animals.",
      "The expedition was too dangerous for these scientists to move on.",
      "That person had to injure himself to survive.",
      "That person had a short flight in an unusual vehicle.",
      "That person got lost looking for some insects.",
    ],
    correct: 3
  },
  {
    text: " <b>Fascinating people's stories</b> <br> Aron Ralston's survival story is an example of extraordinary courage. In 2003, while he was hiking alone in Utah's Bluejohn Canyon, a big stone fell and trapped his right arm. With no hope of rescue and limited resources, Ralston faced an impossible decision. After five days of unimaginable suffering, he made the drastic choice to amputate his own arm to free himself. Afterwards, he walked seven miles to his truck and a tourist family found him. Despite the physical and mental trauma, Ralston survived. Nowadays, he continues to climb mountains and is an inspiration to many through his unbelievable story.",
    questionText: "15.Which of the options states that...",
    options: [
      "The man didn't mean to make such a long voyage alone.",
      "An unusual way was found to get saved from the cavern.",
      "That woman lived alone in a temporary camp for two years.",
      "The voyage was interrupted by marine animals.",
      "The expedition was too dangerous for these scientists to move on.",
      "That person had to injure himself to survive.",
      "That person had a short flight in an unusual vehicle.",
      "That person got lost looking for some insects.",
    ],
    correct: 5
  },
  {
    text: " <b>Fascinating people's stories</b> <br> Spending 13 months adrift at sea made José Salvador Alvarenga, a Salvadoran fisherman, the first person known to survive over a year on a small boat at sea. In November, 2012, Alvarenga and a young fisherman Ezequiel Cordoba set out from a fishing village in southern Mexico. They aimed for a short trip to catch sharks and tunas. A severe storm hit shortly after, damaging their boat and radio. The rescue team had no success. The fishermen were believed to die during the storm. Without supplies, the men survived by eating raw fish, turtles, and jellyfish, and drinking rainwater and turtle blood. Cordoba fell ill and died after months at sea. Alvarenga was alone for nine more months before spotting an island and swimming to shore. He was found by a local couple in the Marshall Islands, having been in the sea for over 438 days.",
    questionText: "16. Which of the options states that...",
    options: [
      "The man didn't mean to make such a long voyage alone.",
      "An unusual way was found to get saved from the cavern.",
      "That woman lived alone in a temporary camp for two years.",
      "The voyage was interrupted by marine animals.",
      "The expedition was too dangerous for these scientists to move on.",
      "That person had to injure himself to survive.",
      "That person had a short flight in an unusual vehicle.",
      "That person got lost looking for some insects.",
    ],
    correct: 0
  }
];
const questionsTask4 = [
  {
    text:"The first Olympic Games are traditionally dated to 776 BC and were held every four years at Olympia in ancient Greece <b>(17)_____</b> .Thousands gathered (18)_____, and the pentathlon, pay respects at a giant statue of Zeus, and witness the sacrifice of 100 oxen. Athletes won a wreath of leaves for their efforts.<br><br>The Games lost popularity after (19)_____ in the 2nd century BC and ended around 394 AD when Theodosius I banned pagan festivals. The modern Olympics were revived by Baron Pierre de Coubertin, a French educator.In 1894, he founded the International Olympic Committee (IOC), and the first modern Games (20)_____ in 1896.<br><br>The early Games were small and chaotic, but innovations like (21)_____ helped them grow. The Berlin Games in 1936 marked a significant moment in the Games' history.Hitler's propaganda was overshadowed by African-American sprinter Jesse Owens, who defied the notion of Aryan supremacy by winning four gold medals.<br><br>Despite their impressive spectacles and rising popularity, hosting the Olympics remains costly. The term 'winner's curse' reflects the financial burden, with many host cities facing (22)_____",
    options:[
      "to watch events like running, boxing",
      "the photo finish and the Olympic flame",
      "took place in Athens",
      "as part of a religious festival for Zeus",
      "Greece was conquered by Rome",
      "have grown into a global event",
      "high costs and economic challenges",
      "and the 1850 Wenlock Olympian Games",
    ],
    questionText:"17.",
    correct:3,
  },
  {
    text:"The first Olympic Games are traditionally dated to 776 BC and were held every four years at Olympia in ancient Greece (17)_____ .Thousands gathered <b>(18)_____</b>, and the pentathlon, pay respects at a giant statue of Zeus, and witness the sacrifice of 100 oxen. Athletes won a wreath of leaves for their efforts.<br><br>The Games lost popularity after (19)_____ in the 2nd century BC and ended around 394 AD when Theodosius I banned pagan festivals. The modern Olympics were revived by Baron Pierre de Coubertin, a French educator.In 1894, he founded the International Olympic Committee (IOC), and the first modern Games (20)_____ in 1896.<br><br>The early Games were small and chaotic, but innovations like (21)_____ helped them grow. The Berlin Games in 1936 marked a significant moment in the Games' history.Hitler's propaganda was overshadowed by African-American sprinter Jesse Owens, who defied the notion of Aryan supremacy by winning four gold medals.<br><br>Despite their impressive spectacles and rising popularity, hosting the Olympics remains costly. The term 'winner's curse' reflects the financial burden, with many host cities facing (22)_____",
    questionText:"18.",
    options:[
      "to watch events like running, boxing",
      "the photo finish and the Olympic flame",
      "took place in Athens",
      "as part of a religious festival for Zeus",
      "Greece was conquered by Rome",
      "have grown into a global event",
      "high costs and economic challenges",
      "and the 1850 Wenlock Olympian Games",
    ],
    correct:0,
  },
  {
    text:"The first Olympic Games are traditionally dated to 776 BC and were held every four years at Olympia in ancient Greece (17)_____.Thousands gathered (18)_____, and the pentathlon, pay respects at a giant statue of Zeus, and witness the sacrifice of 100 oxen. Athletes won a wreath of leaves for their efforts.<br><br>The Games lost popularity after <b>(19)_____</b> in the 2nd century BC and ended around 394 AD when Theodosius I banned pagan festivals. The modern Olympics were revived by Baron Pierre de Coubertin, a French educator.In 1894, he founded the International Olympic Committee (IOC), and the first modern Games (20)_____ in 1896.<br><br>The early Games were small and chaotic, but innovations like (21)_____ helped them grow. The Berlin Games in 1936 marked a significant moment in the Games' history.Hitler's propaganda was overshadowed by African-American sprinter Jesse Owens, who defied the notion of Aryan supremacy by winning four gold medals.<br><br>Despite their impressive spectacles and rising popularity, hosting the Olympics remains costly. The term 'winner's curse' reflects the financial burden, with many host cities facing (22)_____",
    questionText:"19.",
    options:[
      "to watch events like running, boxing",
      "the photo finish and the Olympic flame",
      "took place in Athens",
      "as part of a religious festival for Zeus",
      "Greece was conquered by Rome",
      "have grown into a global event",
      "high costs and economic challenges",
      "and the 1850 Wenlock Olympian Games",
    ],
    correct:4,
  },
  {
    text:"The first Olympic Games are traditionally dated to 776 BC and were held every four years at Olympia in ancient Greece (17)_____ .Thousands gathered (18)_____, and the pentathlon, pay respects at a giant statue of Zeus, and witness the sacrifice of 100 oxen. Athletes won a wreath of leaves for their efforts.<br><br>The Games lost popularity after (19)_____ in the 2nd century BC and ended around 394 AD when Theodosius I banned pagan festivals. The modern Olympics were revived by Baron Pierre de Coubertin, a French educator.In 1894, he founded the International Olympic Committee (IOC), and the first modern Games <b>(20)_____</b> in 1896.<br><br>The early Games were small and chaotic, but innovations like (21)_____ helped them grow. The Berlin Games in 1936 marked a significant moment in the Games' history.Hitler's propaganda was overshadowed by African-American sprinter Jesse Owens, who defied the notion of Aryan supremacy by winning four gold medals.<br><br>Despite their impressive spectacles and rising popularity, hosting the Olympics remains costly. The term 'winner's curse' reflects the financial burden, with many host cities facing (22)_____",
    questionText:"20.",
    options:[
      "to watch events like running, boxing",
      "the photo finish and the Olympic flame",
      "took place in Athens",
      "as part of a religious festival for Zeus",
      "Greece was conquered by Rome",
      "have grown into a global event",
      "high costs and economic challenges",
      "and the 1850 Wenlock Olympian Games",
    ],
    correct:2,
  },
  {
    text:" The first Olympic Games are traditionally dated to 776 BC and were held every four years at Olympia in ancient Greece (17)_____.Thousands gathered (18)_____, and the pentathlon, pay respects at a giant statue of Zeus, and witness the sacrifice of 100 oxen. Athletes won a wreath of leaves for their efforts.<br><br>The Games lost popularity after (19)_____ in the 2nd century BC and ended around 394 AD when Theodosius I banned pagan festivals. The modern Olympics were revived by Baron Pierre de Coubertin, a French educator.In 1894, he founded the International Olympic Committee (IOC), and the first modern Games (20)_____ in 1896.<br><br>The early Games were small and chaotic, but innovations like <b>(21)_____</b> helped them grow. The Berlin Games in 1936 marked a significant moment in the Games' history.Hitler's propaganda was overshadowed by African-American sprinter Jesse Owens, who defied the notion of Aryan supremacy by winning four gold medals.<br><br>Despite their impressive spectacles and rising popularity, hosting the Olympics remains costly. The term 'winner's curse' reflects the financial burden, with many host cities facing (22)_____",
    questionText:"21.",
    options:[
      "to watch events like running, boxing",
      "the photo finish and the Olympic flame",
      "took place in Athens",
      "as part of a religious festival for Zeus",
      "Greece was conquered by Rome",
      "have grown into a global event",
      "high costs and economic challenges",
      "and the 1850 Wenlock Olympian Games",
    ],
    correct:2,
  },
  {
    text:"The first Olympic Games are traditionally dated to 776 BC and were held every four years at Olympia in ancient Greece (17)_____.Thousands gathered (18)_____, and the pentathlon, pay respects at a giant statue of Zeus, and witness the sacrifice of 100 oxen. Athletes won a wreath of leaves for their efforts.<br><br>The Games lost popularity after (19)_____ in the 2nd century BC and ended around 394 AD when Theodosius I banned pagan festivals. The modern Olympics were revived by Baron Pierre de Coubertin, a French educator.In 1894, he founded the International Olympic Committee (IOC), and the first modern Games (20)_____ in 1896.<br><br>The early Games were small and chaotic, but innovations like (21)_____ helped them grow. The Berlin Games in 1936 marked a significant moment in the Games' history.Hitler's propaganda was overshadowed by African-American sprinter Jesse Owens, who defied the notion of Aryan supremacy by winning four gold medals.<br><br>Despite their impressive spectacles and rising popularity, hosting the Olympics remains costly. The term 'winner's curse' reflects the financial burden, with many host cities facing <b>(22)_____",
    questionText:"22.",
    options:[
      "to watch events like running, boxing",
      "the photo finish and the Olympic flame",
      "took place in Athens",
      "as part of a religious festival for Zeus",
      "Greece was conquered by Rome",
      "have grown into a global event",
      "high costs and economic challenges",
      "and the 1850 Wenlock Olympian Games",
    ],
    correct:6,
  },

]
const questionsTask5 = [
  {
    text:`Online and offline gaming can offer social and recreational <b>(23)_____</b> and most gamers do not face serious
            issues. Mental health experts are concerned when gaming becomes a prolonged habit that negatively (24)_____
            a person's life, including their relationships, education, or career goals. Gaming disorder is diagnosed
            when gaming (25)_____ with other life aspects for a year or longer. Signs include an inability to control
            gaming, (26)_____ it over other interests, and continuing despite negative consequences. Studies show that
            about 1.4% of gamers may be addicted, though the majority don't have this issue. For children,
            understanding their gaming habits and setting healthy boundaries is (27)_____`,
    options:[
      "expectation",
      "benefits",
      "relaxation",
      "reduction",
    ],
    questionText:"23.",
    correct:1,
  },
  {
    text:`Online and offline gaming can offer social and recreational (23)_____ and most gamers do not face serious
            issues. Mental health experts are concerned when gaming becomes a prolonged habit that negatively <b>(24)_____</b>
            a person's life, including their relationships, education, or career goals. Gaming disorder is diagnosed
            when gaming (25)_____ with other life aspects for a year or longer. Signs include an inability to control
            gaming, (26)_____ it over other interests, and continuing despite negative consequences. Studies show that
            about 1.4% of gamers may be addicted, though the majority don't have this issue. For children,
            understanding their gaming habits and setting healthy boundaries is (27)_____`,
    questionText:"24.",
    options:[
      "impacts",
      "controls",
      "poils",
      "corrupts",
    ],
    correct:0,
  },
  {
    text:`Online and offline gaming can offer social and recreational (23)_____ and most gamers do not face serious
            issues. Mental health experts are concerned when gaming becomes a prolonged habit that negatively (24)_____
            a person's life, including their relationships, education, or career goals. Gaming disorder is diagnosed
            when gaming <b>(25)_____</b> with other life aspects for a year or longer. Signs include an inability to control
            gaming, (26)_____ it over other interests, and continuing despite negative consequences. Studies show that
            about 1.4% of gamers may be addicted, though the majority don't have this issue. For children,
            understanding their gaming habits and setting healthy boundaries is (27)_____`,
    questionText:"25.",
    options:[
      "interferes",
      "enhances",
      "resolves",
      "monitors",
    ],
    correct:0,
  },
  {
    text:`Online and offline gaming can offer social and recreational (23)_____ and most gamers do not face serious
            issues. Mental health experts are concerned when gaming becomes a prolonged habit that negatively (24)_____
            a person's life, including their relationships, education, or career goals. Gaming disorder is diagnosed
            when gaming (25)_____ with other life aspects for a year or longer. Signs include an inability to control
            gaming, <b>(26)_____</b> it over other interests, and continuing despite negative consequences. Studies show that
            about 1.4% of gamers may be addicted, though the majority don't have this issue. For children,
            understanding their gaming habits and setting healthy boundaries is (27)_____`,
    questionText:"26.",
    options:[
      "prioritizing",
      "neglecting",
      "forgetting",
      "avoiding",
    ],
    correct:0,
  },
  {
    text:`Online and offline gaming can offer social and recreational (23)_____ and most gamers do not face serious
            issues. Mental health experts are concerned when gaming becomes a prolonged habit that negatively (24)_____
            a person's life, including their relationships, education, or career goals. Gaming disorder is diagnosed
            when gaming (25)_____ with other life aspects for a year or longer. Signs include an inability to control
            gaming, (26)_____ it over other interests, and continuing despite negative consequences. Studies show that
            about 1.4% of gamers may be addicted, though the majority don't have this issue. For children,
            understanding their gaming habits and setting healthy boundaries is <b>(27)_____</b>`,
    questionText:"27.",
    options:[
      "minimal",
      "unnecessary",
      "essential",
      "unbelievable",
    ],
    correct:2,
  }

]
const questionsTask6 = [
  {
    text:`At the National Air Guitar Championships, Mia felt a mix
            of excitement and nerves. After <b>(28)_____</b>
            she finally stepped onto the stage. The crowd roared as she
            pretended to strum her (29)_____ guitar, losing (30)_____
            in the music. The competition was fierce, but she
            loved every moment of it. "I felt like a rock star." she said.
            "It was amazing (31)_____ my passion with others who
            love air guitar just as much as I do." (32)_____ not
            winning, Mia walked away with great memories and new
            friends. The experience made her even more excited for
            the World Finals in Oulu.`,
    options:[
      "practicing",
      "practiced",
      "been practiced",
      "practice",
    ],
    questionText:"28.",
    correct:0,
  },
  {
    text:`At the National Air Guitar Championships, Mia felt a mix
            of excitement and nerves. After (28)_____
            she finally stepped onto the stage. The crowd roared as she
            pretended to strum her <b>(29)_____</b> guitar, losing (30)_____
            in the music. The competition was fierce, but she
            loved every moment of it. "I felt like a rock star." she said.
            "It was amazing (31)_____ my passion with others who
            love air guitar just as much as I do." (32)_____ not
            winning, Mia walked away with great memories and new
            friends. The experience made her even more excited for
            the World Finals in Oulu.`,
    questionText:"29.",
    options:[
      "imagine",
      "imaginary",
      "imaginative",
      "image",
    ],
    correct:1,
  },
  {
    text:`At the National Air Guitar Championships, Mia felt a mix
            of excitement and nerves. After (28)_____
            she finally stepped onto the stage. The crowd roared as she
            pretended to strum her (29)_____ guitar, losing <b>(30)_____</b>
            in the music. The competition was fierce, but she
            loved every moment of it. "I felt like a rock star." she said.
            "It was amazing (31)_____ my passion with others who
            love air guitar just as much as I do." (32)_____ not
            winning, Mia walked away with great memories and new
            friends. The experience made her even more excited for
            the World Finals in Oulu.`,
    questionText:"30.",
    options:[
      "her",
      "herself",
      "them",
      "themselves",
    ],
    correct:1,
  },
  {
    text:`At the National Air Guitar Championships, Mia felt a mix
            of excitement and nerves. After (28)_____
            she finally stepped onto the stage. The crowd roared as she
            pretended to strum her (29)_____ guitar, losing (30)_____
            in the music. The competition was fierce, but she
            loved every moment of it. "I felt like a rock star." she said.
            "It was amazing <b>(31)_____</b> my passion with others who
            love air guitar just as much as I do." (32)_____ not
            winning, Mia walked away with great memories and new
            friends. The experience made her even more excited for
            the World Finals in Oulu.`,
    questionText:"31.",
    options:[
      "share",
      "sharing",
      "to share",
      "have shared",
    ],
    correct:2,
  },
  {
    text:`At the National Air Guitar Championships, Mia felt a mix
            of excitement and nerves. After (28)_____
            she finally stepped onto the stage. The crowd roared as she
            pretended to strum her (29)_____ guitar, losing (30)_____
            in the music. The competition was fierce, but she
            loved every moment of it. "I felt like a rock star." she said.
            "It was amazing (31)_____ my passion with others who
            love air guitar just as much as I do." <b>(32)_____</b> not
            winning, Mia walked away with great memories and new
            friends. The experience made her even more excited for
            the World Finals in Oulu.`,
    questionText:"32.",
    options:[
      "Despite",
      "Even though",
      "Although",
      "Regardless",
    ],
    correct:0,
  }

]
const questionsContainer = document.getElementById("questions");

 /*               */ 

questions.forEach((q, index) => {
    const qNumber = index + 1;
    const div = document.createElement("div");

    div.className = "question" + (index === 0 ? " active" : "");
  
    div.innerHTML = `
      <img src="${q.image}" alt="question image" width="500px" style="margin-bottom: 20px;"><br/>
      <p style="font-weight: bold;">${q.question}</p>
      <div class="space-y-3">
        ${q.options.map((opt, i) => `
          <label for="q${qNumber}a${i+1}" class="block">
            <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);>
            <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
          </label><br>
        `).join("")}
      </div>
    `;
  
    questionsContainer.appendChild(div);
  });

  questionsTask2.forEach((q, index) => {
    const qNumber = index + questions.length + 1; // Унікальний номер
    const div = document.createElement("div");

    div.className = "question task2";

    div.innerHTML = `
      <h2 style="font-size:40px; font-weight:600">New York City</h2>
      <p>New York City is famous for its stunning skyline and diverse culture. The city's skyscrapers, such as the Empire State Building, are so immense that they have their own zip codes. To ensure that these towering structures wouldn't block sunlight from reaching the streets below, the 1916 Zoning Resolution was introduced. This regulation set guidelines for architects, which has helped keep New York's streets bright and welcoming.
        </p>
        <p>Beyond its architecture, New York City is a true <b>melting pot</b> of cultures, with speakers of around 800 different languages calling it home. Nearly half of NYC households speak a language other than English, and more than a third of New Yorkers are foreign-born. This rich diversity makes it an excellent place to learn or practice a new language.
A stroll through three of the city's five boroughs can be an exciting linguistic journey, offering chances to pick up new phrases and experience different cultures firsthand.</p>
      <p>New York's history is as fascinating as its present.
The city was not always the vibrant metropolis it is today. Dutch settlers bought Manhattan Island in 1626 and named it "New Amsterdam," using it as a fur trading post. When the English took over in 1664, they renamed it New York. To learn more about this history, consider taking a walking tour of lower Manhattan, where you can see historic sites, admire famous architecture, and enjoy a slice of classic New York-style pizza.</p>
      <p>One of the city's most famous nicknames, <b>"the Big Apple,"</b> has a colorful origin. This term began in the 1920s when New York was seen as the heart of opportunity and excitement in the U.S. The "big apple" symbolized the city's vibrant, bustling nature and the countless opportunities it offered. Journalist John J. Fitzgerald popularized the phrase in horse racing commentary, referring to New York as the ultimate prize or "big apple" to be won. This nickname has endured over the years, reflecting New York's status as a major global hub of culture, finance, and commerce.</p>
        <br>
      <p style="font-weight: bold;">${q.question}</p>
      <div class="space-y-3">
        ${q.options.map((opt, i) => `
          <label for="q${qNumber}a${i+1}" class="block">
            <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);>
            <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
          </label><br>
        `).join("")}
      </div>
    `

    questionsContainer.appendChild(div);
});

questionsTask3.forEach((q,index)=>{
  const qNumber = index + questions.length + 10; // Унікальний номер
    const div = document.createElement("div");

    div.className = "question";

    div.innerHTML=`
    
    <p>${q.text}</p>
    <p style="font-weight: bold;">${q.questionText}</p>
    <div class="space-y-3">
        ${q.options.map((opt, i) => `
          <label for="q${qNumber}a${i+1}" class="block">
            <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);>
            <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
          </label><br>
        `).join("")}
      </div>
    `
    questionsContainer.appendChild(div);
})

questionsTask4.forEach((q,index)=>{
  const qNumber = index + questions.length + 20; // Унікальний номер
    const div = document.createElement("div");

    div.className = "question";

    div.innerHTML=`
    <h2 style="text-align: center; font-size:40px; font-weight:600">The History of the Olympic Games</h2>
    <p>${q.text}</p>
    <p style="font-weight: bold;">${q.questionText}</p>
    <div class="space-y-3">
        ${q.options.map((opt, i) => `
          <label for="q${qNumber}a${i+1}" class="block">
            <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);>
            <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
          </label><br>
        `).join("")}
      </div>
    `
    questionsContainer.appendChild(div);
})

questionsTask5.forEach((q,index)=>{
  const qNumber = index + questions.length + 30; // Унікальний номер
    const div = document.createElement("div");

    div.className = "question";

    div.innerHTML=`
    <h2 style="text-align: center;font-size:30px; font-weight:600">USE OF ENGLISH</h2>
    
    <p>${q.text}</p>
    <p style="font-weight: bold;">${q.questionText}</p>
    <div class="space-y-3">
        ${q.options.map((opt, i) => `
          <label for="q${qNumber}a${i+1}" class="block">
            <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);>
            <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
          </label><br>
        `).join("")}
      </div>
    `
    questionsContainer.appendChild(div);
})
questionsTask6.forEach((q,index)=>{
  const qNumber = index + questions.length + 40; // Унікальний номер
    const div = document.createElement("div");

    div.className = "question";

    div.innerHTML=`
    <h2 style="text-align: center;font-size:30px; font-weight:600">USE OF ENGLISH</h2>
    <h3 style="text-align: center; font-size:40px; font-weight:600">Benefits of Exercise</h3>
    <p>${q.text}</p>
    <p style="font-weight: bold;">${q.questionText}</p>
    <div class="space-y-3">
        ${q.options.map((opt, i) => `
          <label for="q${qNumber}a${i+1}" class="block">
            <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);>
            <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
          </label><br>
        `).join("")}
      </div>
    `
    questionsContainer.appendChild(div);
})
 /*               */ 
  function markSelected(radio) {
    const allOptions = radio.closest(".space-y-3").querySelectorAll(".option-btn");
    allOptions.forEach(opt => opt.classList.remove("selected"));
    radio.nextElementSibling.classList.add("selected");
  }

  const Questions = document.querySelectorAll('.question');
const nav = document.getElementById('taskNav');
const buttons = [];
let currentQuestion=0
    Questions.forEach((q, i) => {
      const btn = document.createElement('button');
      btn.textContent = i + 1;
      btn.onclick = () => showQuestion(i);
      if (i === 0) btn.classList.add('active');
      nav.appendChild(btn);
      buttons.push(btn);
    });

    function showQuestion(index) {
      Questions.forEach(q => q.classList.remove('active'));
      Questions[index].classList.add('active');

      buttons.forEach(btn => btn.classList.remove('active'));
      buttons[index].classList.add('active');
      currentQuestion = index;
    }

    function checkAnswers() {
      const allQuestions = [...questions, ...questionsTask2, ...questionsTask3, ...questionsTask4, ...questionsTask5, ...questionsTask6];
      let score = 0;
      const tryAgainButton = document.getElementById('again');
      tryAgainButton.style.display = 'block';
    
      Questions.forEach((qElement, i) => {
        const selected = qElement.querySelector('input[type="radio"]:checked');
        const selectedIndex = selected ? Array.from(qElement.querySelectorAll('input[type="radio"]')).indexOf(selected) : -1;
        const isCorrect = selectedIndex === allQuestions[i].correct;
    
        qElement.querySelectorAll('label').forEach(label => {
          label.classList.remove('correct-answer', 'incorrect-answer');
        });
    
        const correctRadio = qElement.querySelectorAll('input[type="radio"]')[allQuestions[i].correct];
        if (correctRadio && correctRadio.nextElementSibling) {
          correctRadio.nextElementSibling.classList.add('correct-answer');
        }
    
        if (selected && !isCorrect && selected.nextElementSibling) {
          selected.nextElementSibling.classList.add('incorrect-answer');
        }
    
        buttons[i].classList.remove('correct', 'incorrect');
        if (isCorrect) {
          score++;
          buttons[i].classList.add('correct');
        } else {
          buttons[i].classList.add('incorrect');
        }
    
        qElement.querySelectorAll('input[type="radio"]').forEach(radio => {
          radio.disabled = true;
        });
      });
    
      document.getElementById('result').textContent = `Ваш результат: ${score} з ${allQuestions.length}`;
    }
    

    function nextQuestion() {
      // Hide current question
      Questions[currentQuestion].classList.remove('active');
      buttons[currentQuestion].classList.remove('active');

      // Move to next question
      currentQuestion = (currentQuestion + 1) % Questions.length;

      // Show the next question
      Questions[currentQuestion].classList.add('active');
      buttons[currentQuestion].classList.add('active');
    }
    function tryAgain() {
      buttons.length = 0;
      nav.innerHTML = '';
      
      Questions.forEach((q, i) => {
        const btn = document.createElement('button');
        btn.textContent = i + 1;
        btn.onclick = () => showQuestion(i);
        if (i === 0) btn.classList.add('active');
        nav.appendChild(btn);
        buttons.push(btn);
    
        // Reset all radio buttons and styling
        q.querySelectorAll('input[type="radio"]').forEach(radio => {
          radio.disabled = false;
          radio.checked = false;
        });
    
        q.querySelectorAll('label').forEach(label => {
          label.classList.remove('correct-answer', 'incorrect-answer');
        });
      });
      
      showQuestion(0);
      document.getElementById('result').textContent = '';
      document.getElementById('again').style.display = 'none';
    }
