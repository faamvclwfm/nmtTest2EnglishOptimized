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
    text:`Fast food has become a global phenomenon, but its roots
          <b>(17)___</b> While McDonald's is often credited with
          popularizing fast food, White Castle, founded in 1921 in
          Wichita, Kansas, is considered the first fast-food chain. At
          that time, hamburgers were seen (18)___
          from
          questionable meat.
          White Castle's creators wanted to
          change this belief by designing restaurants that focused
          (19)___. Their success helped improve the reputation of
          hamburgers across the United States.
          However, McDonald's changed the fast-food industry with
          its "Speedee Service System" when it reopened in 1948.
          This assembly-line system set the standard for fast food
          and while some chains like KFC and Carl's Jr. were around
          before McDonald's innovation, (20)___
          The fast-food industry has grown massively,with
          McDonald's leading the charge as the world's largest fast-
          food chain. 'However, (21)___ hasn't always been
          smooth. McDonald's has faced prost ward biden
          Protestors have accused McDonald's of selling unhealthy
          food, aggressive marketing and undermining local values
          and culture. Despite this, fast food, symbolized by the
          iconic drive-through, (22) ___ shaping dining habits
          globally.`,
    options:[
      "as low-quality food made",
      "the global expansion of fast food",
      "remains an integral part of modern life",
      "on cleanliness and visible food preparation",
      "give hamburger meat a better reputation",
      "trace back to early 20th-century America",
      "they soon adopted similar methods",
      "magine fast food without drive-through windows",
    ],
    questionText:"17.",
    correct:5,
  },
  {
    text:`Fast food has become a global phenomenon, but its roots
          (17)___ While McDonald's is often credited with
          popularizing fast food, White Castle, founded in 1921 in
          Wichita, Kansas, is considered the first fast-food chain. At
          that time, hamburgers were seen <b>(18)___</b>
          from
          questionable meat.
          White Castle's creators wanted to
          change this belief by designing restaurants that focused
          (19)___. Their success helped improve the reputation of
          hamburgers across the United States.
          However, McDonald's changed the fast-food industry with
          its "Speedee Service System" when it reopened in 1948.
          This assembly-line system set the standard for fast food
          and while some chains like KFC and Carl's Jr. were around
          before McDonald's innovation, (20)___
          The fast-food industry has grown massively,with
          McDonald's leading the charge as the world's largest fast-
          food chain. 'However, (21)___ hasn't always been
          smooth. McDonald's has faced prost ward biden
          Protestors have accused McDonald's of selling unhealthy
          food, aggressive marketing and undermining local values
          and culture. Despite this, fast food, symbolized by the
          iconic drive-through, (22) ___ shaping dining habits
          globally.`,
     questionText:"18.",
     options:[
      "as low-quality food made",
      "the global expansion of fast food",
      "remains an integral part of modern life",
      "on cleanliness and visible food preparation",
      "give hamburger meat a better reputation",
      "trace back to early 20th-century America",
      "they soon adopted similar methods",
      "magine fast food without drive-through windows",
    ],
    correct:0,
  },
  {
    text:`Fast food has become a global phenomenon, but its roots
          (17)___ While McDonald's is often credited with
          popularizing fast food, White Castle, founded in 1921 in
          Wichita, Kansas, is considered the first fast-food chain. At
          that time, hamburgers were seen (18)___
          from
          questionable meat.
          White Castle's creators wanted to
          change this belief by designing restaurants that focused
          <b>(19)___</b>. Their success helped improve the reputation of
          hamburgers across the United States.
          However, McDonald's changed the fast-food industry with
          its "Speedee Service System" when it reopened in 1948.
          This assembly-line system set the standard for fast food
          and while some chains like KFC and Carl's Jr. were around
          before McDonald's innovation, (20)___
          The fast-food industry has grown massively,with
          McDonald's leading the charge as the world's largest fast-
          food chain. 'However, (21)___ hasn't always been
          smooth. McDonald's has faced prost ward biden
          Protestors have accused McDonald's of selling unhealthy
          food, aggressive marketing and undermining local values
          and culture. Despite this, fast food, symbolized by the
          iconic drive-through, (22) ___ shaping dining habits
          globally.`,
    questionText:"19.",
    options:[
      "as low-quality food made",
      "the global expansion of fast food",
      "remains an integral part of modern life",
      "on cleanliness and visible food preparation",
      "give hamburger meat a better reputation",
      "trace back to early 20th-century America",
      "they soon adopted similar methods",
      "magine fast food without drive-through windows",
    ],
    correct:3,
  },
  {
    text:`Fast food has become a global phenomenon, but its roots
          (17)___ While McDonald's is often credited with
          popularizing fast food, White Castle, founded in 1921 in
          Wichita, Kansas, is considered the first fast-food chain. At
          that time, hamburgers were seen (18)___
          from
          questionable meat.
          White Castle's creators wanted to
          change this belief by designing restaurants that focused
          (19)___. Their success helped improve the reputation of
          hamburgers across the United States.
          However, McDonald's changed the fast-food industry with
          its "Speedee Service System" when it reopened in 1948.
          This assembly-line system set the standard for fast food
          and while some chains like KFC and Carl's Jr. were around
          before McDonald's innovation, <b>(20)___</b>
          The fast-food industry has grown massively,with
          McDonald's leading the charge as the world's largest fast-
          food chain. 'However, (21)___ hasn't always been
          smooth. McDonald's has faced prost ward biden
          Protestors have accused McDonald's of selling unhealthy
          food, aggressive marketing and undermining local values
          and culture. Despite this, fast food, symbolized by the
          iconic drive-through, (22) ___ shaping dining habits
          globally.`,
    questionText:"20.",
    options:[
      "as low-quality food made",
      "the global expansion of fast food",
      "remains an integral part of modern life",
      "on cleanliness and visible food preparation",
      "give hamburger meat a better reputation",
      "trace back to early 20th-century America",
      "they soon adopted similar methods",
      "magine fast food without drive-through windows",
    ],
    correct:6,
  },
  {
    text:`Fast food has become a global phenomenon, but its roots
          (17)___ While McDonald's is often credited with
          popularizing fast food, White Castle, founded in 1921 in
          Wichita, Kansas, is considered the first fast-food chain. At
          that time, hamburgers were seen (18)___
          from
          questionable meat.
          White Castle's creators wanted to
          change this belief by designing restaurants that focused
          (19)___. Their success helped improve the reputation of
          hamburgers across the United States.
          However, McDonald's changed the fast-food industry with
          its "Speedee Service System" when it reopened in 1948.
          This assembly-line system set the standard for fast food
          and while some chains like KFC and Carl's Jr. were around
          before McDonald's innovation, (20)___
          The fast-food industry has grown massively,with
          McDonald's leading the charge as the world's largest fast-
          food chain. 'However, <b>(21)___</b> hasn't always been
          smooth. McDonald's has faced prost ward biden
          Protestors have accused McDonald's of selling unhealthy
          food, aggressive marketing and undermining local values
          and culture. Despite this, fast food, symbolized by the
          iconic drive-through, (22) ___ shaping dining habits
          globally.`,
    questionText:"21.",
    options:[
      "as low-quality food made",
      "the global expansion of fast food",
      "remains an integral part of modern life",
      "on cleanliness and visible food preparation",
      "give hamburger meat a better reputation",
      "trace back to early 20th-century America",
      "they soon adopted similar methods",
      "magine fast food without drive-through windows",
    ],
    correct:1,
  },
  {
    text:`Fast food has become a global phenomenon, but its roots
          (17)___ While McDonald's is often credited with
          popularizing fast food, White Castle, founded in 1921 in
          Wichita, Kansas, is considered the first fast-food chain. At
          that time, hamburgers were seen (18)___
          from
          questionable meat.
          White Castle's creators wanted to
          change this belief by designing restaurants that focused
          (19)___. Their success helped improve the reputation of
          hamburgers across the United States.
          However, McDonald's changed the fast-food industry with
          its "Speedee Service System" when it reopened in 1948.
          This assembly-line system set the standard for fast food
          and while some chains like KFC and Carl's Jr. were around
          before McDonald's innovation, (20)___
          The fast-food industry has grown massively,with
          McDonald's leading the charge as the world's largest fast-
          food chain. 'However, (21)___ hasn't always been
          smooth. McDonald's has faced prost ward biden
          Protestors have accused McDonald's of selling unhealthy
          food, aggressive marketing and undermining local values
          and culture. Despite this, fast food, symbolized by the
          iconic drive-through, <b>(22)___</b> shaping dining habits
          globally.`,
    questionText:"22.",
    options:[
      "as low-quality food made",
      "the global expansion of fast food",
      "remains an integral part of modern life",
      "on cleanliness and visible food preparation",
      "give hamburger meat a better reputation",
      "trace back to early 20th-century America",
      "they soon adopted similar methods",
      "magine fast food without drive-through windows",
    ],
    correct:2,
  },

]
const questionsTask5 = [
  {
    text:`Artificial intelligence (Al) is increasingly becoming a part of our daily lives, performing a wide <b>(23)____</b> of
          tasks. From writing texts and answering questions to suggesting routes and enhancing business management,
          Al is everywhere. But how is Al transforming the world of art?
          Recently, Al-powered tools that can create digital art have gained significant attention. These tools allow
          artists to push the boundaries of creativity and (24)___ new forms of expression.
          With AI, artists can (25)___ with machines to develop unique art forms. Techniques like GANs
          (Generative Adversarial Networks) and computer-aided drawing tools are helping artists create diverse and
          complex pieces more efficiently.
          As Al continues to evolve, it opens up new (26)___ in the art world, expanding what we consider possible
          in artistic expression. However, it's crucial to remember that Al is a tool, not a replacement for human
          creativity, (27)___ rather than replacing the artist's vision.`,
    options:[
      "range",
      "space",
      "variability",
      "level",
    ],
    questionText:"23.",
    correct:0,
  },
  {
    text:`Artificial intelligence (Al) is increasingly becoming a part of our daily lives, performing a wide (23)____ of
          tasks. From writing texts and answering questions to suggesting routes and enhancing business management,
          Al is everywhere. But how is Al transforming the world of art?
          Recently, Al-powered tools that can create digital art have gained significant attention. These tools allow
          artists to push the boundaries of creativity and <b>(24)___</b> new forms of expression.
          With AI, artists can (25)___ with machines to develop unique art forms. Techniques like GANs
          (Generative Adversarial Networks) and computer-aided drawing tools are helping artists create diverse and
          complex pieces more efficiently.
          As Al continues to evolve, it opens up new (26)___ in the art world, expanding what we consider possible
          in artistic expression. However, it's crucial to remember that Al is a tool, not a replacement for human
          creativity, (27)___ rather than replacing the artist's vision.`,
    questionText:"24.",
    options:[
      "look up",
      "manage",
      "explore",
      "replace",
    ],
    correct:2,
  },
  {
    text:`Artificial intelligence (Al) is increasingly becoming a part of our daily lives, performing a wide (23)____ of
          tasks. From writing texts and answering questions to suggesting routes and enhancing business management,
          Al is everywhere. But how is Al transforming the world of art?
          Recently, Al-powered tools that can create digital art have gained significant attention. These tools allow
          artists to push the boundaries of creativity and (24)___ new forms of expression.
          With AI, artists can <b>(25)___</b> with machines to develop unique art forms. Techniques like GANs
          (Generative Adversarial Networks) and computer-aided drawing tools are helping artists create diverse and
          complex pieces more efficiently.
          As Al continues to evolve, it opens up new (26)___ in the art world, expanding what we consider possible
          in artistic expression. However, it's crucial to remember that Al is a tool, not a replacement for human
          creativity, (27)___ rather than replacing the artist's vision.`,
    questionText:"25.",
    options:[
      "join",
      "collaborate",
      "aid",
      "connect",
    ],
    correct:1,
  },
  {
    text:`Artificial intelligence (Al) is increasingly becoming a part of our daily lives, performing a wide (23)____ of
          tasks. From writing texts and answering questions to suggesting routes and enhancing business management,
          Al is everywhere. But how is Al transforming the world of art?
          Recently, Al-powered tools that can create digital art have gained significant attention. These tools allow
          artists to push the boundaries of creativity and (24)___ new forms of expression.
          With AI, artists can (25)___ with machines to develop unique art forms. Techniques like GANs
          (Generative Adversarial Networks) and computer-aided drawing tools are helping artists create diverse and
          complex pieces more efficiently.
          As Al continues to evolve, it opens up new <b>(26)___</b> in the art world, expanding what we consider possible
          in artistic expression. However, it's crucial to remember that Al is a tool, not a replacement for human
          creativity, (27)___ rather than replacing the artist's vision.`,
    questionText:"26.",
    options:[
      "possibilities",
      "chances",
      "hazards",
      "occasions",
    ],
    correct:0,
  },
  {
    text:`Artificial intelligence (Al) is increasingly becoming a part of our daily lives, performing a wide (23)____ of
          tasks. From writing texts and answering questions to suggesting routes and enhancing business management,
          Al is everywhere. But how is Al transforming the world of art?
          Recently, Al-powered tools that can create digital art have gained significant attention. These tools allow
          artists to push the boundaries of creativity and (24)___ new forms of expression.
          With AI, artists can (25)___ with machines to develop unique art forms. Techniques like GANs
          (Generative Adversarial Networks) and computer-aided drawing tools are helping artists create diverse and
          complex pieces more efficiently.
          As Al continues to evolve, it opens up new (26)___ in the art world, expanding what we consider possible
          in artistic expression. However, it's crucial to remember that Al is a tool, not a replacement for human
          creativity, <b>(27)___</b> rather than replacing the artist's vision.`,
    questionText:"27.",
    options:[
      "improving",
      "magnifying",
      "enhancing",
      "lifting",
    ],
    correct:2,
  }

]
const questionsTask6 = [
  {
    text: `Although Rome is one of the most fascinating cities
          in the world, many people <b>(28)___</b> to really experience its
          special qualities. This is because they stick to guided (29)___
          and fixed itineraries. As the British author Elizabeth
          Bowen once wrote, you cannot truly know Rome (30)___
          you have walked through the tangle of streets and
          alleys until you are totally exhausted. It is not only very
          easy to get lost in Rome, but doing (31)___ is the best
          way to actually learn about the city. Of course, if you
          are curious about history, you should visit the famous
          archaeological sites, churches and monuments in 5-
          to learn as much as you can about the city. However,
          there is such a huge amount of information, that at
          some point you should just take a break and spend an
          afternoon exploring the back streets (32)___foot. If you get
          lost - and you probably will - so much the better. Just
          give yourself enough time to enjoy the experience
          without worry or stress. You will have a chance to
          see everyday Roman life and you will go back home
          knowing Rome better than most other tourists.`,
    questionText: "28.",
    options: [
      "decided",
      "avoid",
      "fail",
      "want"
    ],
    correct: 2 // Please fill in the correct option index (0-3)
  },
  {
    text: `Although Rome is one of the most fascinating cities
          in the world, many people (28)___ to really experience its
          special qualities. This is because they stick to guided <b>(29)___</b> 
          and fixed itineraries. As the British author Elizabeth
          Bowen once wrote, you cannot truly know Rome (30)___
          you have walked through the tangle of streets and
          alleys until you are totally exhausted. It is not only very
          easy to get lost in Rome, but doing (31)___ is the best
          way to actually learn about the city. Of course, if you
          are curious about history, you should visit the famous
          archaeological sites, churches and monuments in 5-
          to learn as much as you can about the city. However,
          there is such a huge amount of information, that at
          some point you should just take a break and spend an
          afternoon exploring the back streets (32)___foot. If you get
          lost - and you probably will - so much the better. Just
          give yourself enough time to enjoy the experience
          without worry or stress. You will have a chance to
          see everyday Roman life and you will go back home
          knowing Rome better than most other tourists.`,
    questionText: "29.",
    options: [
      "journeys",
      "travels",
      "trips",
      "tours"
    ],
    correct: 3 // Please fill in the correct option index (0-3)
  },
  {
    text: `Although Rome is one of the most fascinating cities
          in the world, many people (28)___to really experience its
          special qualities. This is because they stick to guided (29)___
          and fixed itineraries. As the British author Elizabeth
          Bowen once wrote, you cannot truly know Rome <b>(30)___</b>  
          you have walked through the tangle of streets and
          alleys until you are totally exhausted. It is not only very
          easy to get lost in Rome, but doing (31)___ is the best
          way to actually learn about the city. Of course, if you
          are curious about history, you should visit the famous
          archaeological sites, churches and monuments in 5-
          to learn as much as you can about the city. However,
          there is such a huge amount of information, that at
          some point you should just take a break and spend an
          afternoon exploring the back streets (32)___foot. If you get
          lost - and you probably will - so much the better. Just
          give yourself enough time to enjoy the experience
          without worry or stress. You will have a chance to
          see everyday Roman life and you will go back home
          knowing Rome better than most other tourists.`,
    questionText: "30.",
    options: [
      "although",
      "if not",
      "unless",
      "however"
    ],
    correct: 2 // Please fill in the correct option index (0-3)
  },
  {
    text: `Although Rome is one of the most fascinating cities
          in the world, many people (28)___ to really experience its
          special qualities. This is because they stick to guided (29)___
          and fixed itineraries. As the British author Elizabeth
          Bowen once wrote, you cannot truly know Rome (30)___
          you have walked through the tangle of streets and
          alleys until you are totally exhausted. It is not only very
          easy to get lost in Rome, but doing <b>(31)___</b> is the best
          way to actually learn about the city. Of course, if you
          are curious about history, you should visit the famous
          archaeological sites, churches and monuments in 5-
          to learn as much as you can about the city. However,
          there is such a huge amount of information, that at
          some point you should just take a break and spend an
          afternoon exploring the back streets (32)___foot. If you get
          lost - and you probably will - so much the better. Just
          give yourself enough time to enjoy the experience
          without worry or stress. You will have a chance to
          see everyday Roman life and you will go back home
          knowing Rome better than most other tourists.`,
    questionText: "31.",
    options: [
      "so",
      "such",
      "it",
      "there"
    ],
    correct: 0 // Please fill in the correct option index (0-3)
  },
  {
    text: `Although Rome is one of the most fascinating cities
          in the world, many people (28)___ to really experience its
          special qualities. This is because they stick to guided (29)___
          and fixed itineraries. As the British author Elizabeth
          Bowen once wrote, you cannot truly know Rome (30)___
          you have walked through the tangle of streets and
          alleys until you are totally exhausted. It is not only very
          easy to get lost in Rome, but doing (31)___ is the best
          way to actually learn about the city. Of course, if you
          are curious about history, you should visit the famous
          archaeological sites, churches and monuments in 5-
          to learn as much as you can about the city. However,
          there is such a huge amount of information, that at
          some point you should just take a break and spend an
          afternoon exploring the back streets <b>(32)___</b> foot. If you get
          lost - and you probably will - so much the better. Just
          give yourself enough time to enjoy the experience
          without worry or stress. You will have a chance to
          see everyday Roman life and you will go back home
          knowing Rome better than most other tourists.`,
    questionText: "32.",
    options: [
      "with",
      "on",
      "for",
      "along"
    ],
    correct: 1 // Please fill in the correct option index (0-3)
  }
];
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
        <div style='display:none' class="CorrectAnswer questionCorrectAnswer">
          <p  >Correct answer:${q.correct+1}</p>
        </div>
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
        <div style='display:none' class="CorrectAnswer questionCorrectAnswer">
          <p  >Correct answer:${q.correct+1}</p>
        </div>
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
        <div style='display:none' class="CorrectAnswer questionCorrectAnswer">
          <p  >Correct answer:${q.correct+1}</p>
        </div>
      </div>
    `
    questionsContainer.appendChild(div);
})

questionsTask4.forEach((q,index)=>{
  const qNumber = index + questions.length + 20; // Унікальний номер
    const div = document.createElement("div");

    div.className = "question";

    div.innerHTML=`
    <h2 style="text-align: center; font-size:40px; font-weight:600">The History of Fast Food</h2>
    <p>${q.text}</p>
    <p style="font-weight: bold;">${q.questionText}</p>
    <div class="space-y-3">
        ${q.options.map((opt, i) => `
          <label for="q${qNumber}a${i+1}" class="block">
            <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);>
            <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
          </label><br>
        `).join("")}
        <div style='display:none' class="CorrectAnswer questionCorrectAnswer">
          <p  >Correct answer:${q.correct+1}</p>
        </div>
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
        <div style='display:none' class="CorrectAnswer questionCorrectAnswer">
          <p  >Correct answer:${q.correct+1}</p>
        </div>
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
    <h3 style="text-align: center; font-size:40px; font-weight:600">Getting lost in Rome</h3>
    <p>${q.text}</p>
    <p style="font-weight: bold;">${q.questionText}</p>
    <div class="space-y-3">
        ${q.options.map((opt, i) => `
          <label for="q${qNumber}a${i+1}" class="block">
            <input type="radio" id="q${qNumber}a${i+1}" name="q${qNumber}" value="${i === q.correct ? 1 : 0}" class="hidden" onchange="markSelected(this);>
            <div class="option-btn border border-gray-300 rounded-xl px-5 py-3 text-gray-800 bg-white cursor-pointer">${opt}</div>
          </label><br>
        `).join("")}
        <div style='display:none' class="CorrectAnswer questionCorrectAnswer">
          <p  >Correct answer:${q.correct+1}</p>
        </div>
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
      Array.from(correctanswer).forEach((el) => {
        el.style.display='block';
    })
    
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
      const correctanswer=document.getElementsByClassName('CorrectAnswer');
        Array.from(correctanswer).forEach((el) => {
            el.style.display='none';
        })
      
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
