// constants
const questionsBank = [
    {
        question: 'What is the capital of Australia?',
        choices: {
            a: 'Sydney',
            b: 'Melbourne',
            c: 'Brisbane',
            d: 'Canberra'
        },
        answer: 'd'
    },
    {
        question: 'Which country is both in Europe and Asia?',
        choices: {
            a: 'Russia',
            b: 'China',
            c: 'India',
            d: 'Iran'
        },
        answer: 'a'
    },
    {
        question: 'Who painted the Mona Lisa?',
        choices: {
            a: 'Vincent van Gogh',
            b: 'Pablo Picasso',
            c: 'Leonardo da Vinci',
            d: 'Rembrandt'
        },
        answer: 'c'
    },
    {
        question: 'What is the smallest planet in the solar system?',
        choices: {
            a: 'Mercury',
            b: 'Mars',
            c: 'Venus',
            d: 'Earth'
        },
        answer: 'a'
    },
    {
        question: 'Which continent is the largest by area?',
        choices: {
            a: 'Europe',
            b: 'Africa',
            c: 'Asia',
            d: 'South America'
        },
        answer: 'c'
    },
    {
        question: 'What is the smallest country in the world?',
        choices: {
            a: 'Vatican City',
            b: 'Monaco',
            c: 'San Marino',
            d: 'Liechtenstein'
        },
        answer: 'a'
    },
    {
        question: 'What is the largest organ in the human body?',
        choices: {
            a: 'Heart',
            b: 'Brain',
            c: 'Liver',
            d: 'Skin'
        },
        answer: 'd'
    },
    {
        question: 'What is the name of the currency used in Japan?',
        choices: {
            a: 'Dollar',
            b: 'Yuan',
            c: 'Euro',
            d: 'Yen'
        },
        answer: 'd'
    },
    {
        question: 'Which gas makes up the largest percentage of Earth’s atmosphere?',
        choices: {
            a: 'Oxygen',
            b: 'Carbon dioxide',
            c: 'Nitrogen',
            d: 'Hydrogen'
        },
        answer: 'c'
    },
    {
        question: 'Which river is the longest in the world?',
        choices: {
            a: 'Nile',
            b: 'Amazon',
            c: 'Yangtze',
            d: 'Mississippi'
        },
        answer: 'a'
    },
    {
        question: 'What is the largest mammal in the world?',
        choices: {
            a: 'Elephant',
            b: 'Giraffe',
            c: 'Hippopotamus',
            d: 'Blue whale'
        },
        answer: 'd'
    },
    {
        question: 'What is the name of the largest desert in the world?',
        choices: {
            a: 'Sahara',
            b: 'Gobi',
            c: 'Arabian',
            d: 'Antarctic'
        },
        answer: 'a'
    },
    {
        question: 'Who wrote the novel “To Kill a Mockingbird”?',
        choices: {
            a: 'Ernest Hemingway',
            b: 'Harper Lee',
            c: 'F. Scott Fitzgerald',
            d: 'William Faulk'
        },
        answer: 'b'
    },
    {
        question: 'What is the name of the largest ocean in the world?',
        choices: {
            a: 'Atlantic',
            b: 'Pacific',
            c: 'Indian',
            d: 'Arctic'
        },
        answer: 'b'
    },
    {
        question: 'What is the name of the largest animal on Earth?',
        choices: {
            a: 'Giraffe',
            b: 'Blue whale',
            c: 'Elephant',
            d: 'Hippopotamus'
        },
        answer: 'b'
    },
    {
        question: 'What is the highest mountain in Africa?',
        choices: {
            a: 'Mount Kilimanjaro',
            b: 'Mount Everest',
            c: 'Mount Elbrus',
            d: 'Mount Denali'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the largest waterfall in the world?',
        choices: {
            a: 'Niagara Falls',
            b: 'Angel Falls',
            c: 'Victoria Falls',
            d: 'Iguazu Falls'
        },
        answer: 'c'
    },
    {
        question: 'What is the name of the ship that Charles Darwin sailed on his famous voyage?',
        choices: {
            a: 'HMS Endeavour',
            b: 'HMS Victory',
            c: 'HMS Beagle',
            d: 'HMS Challenger'
        },
        answer: 'c'
    },
    {
        question: 'What is the name of the smallest planet in the solar system?',
        choices: {
            a: 'Mars',
            b: 'Venus',
            c: 'Mercury',
            d: 'Neptune'
        },
        answer: 'c'
    },
    {
        question: 'Who wrote the novel “1984”?',
        choices: {
            a: 'George Orwell',
            b: 'Ernest Hemingway',
            c: 'Jane Austen',
            d: 'William Faulkner'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the highest mountain in North America?',
        choices: {
            a: 'Mount Kilimanjaro',
            b: 'Mount Everest',
            c: 'Mount Elbrus',
            d: 'Mount Denali'
        },
        answer: 'd'
    },
    {
        question: 'What is the name of the largest lake in Africa?',
        choices: {
            a: 'Lake Victoria',
            b: 'Lake Tanganyika',
            c: 'Lake Malawi',
            d: 'Lake Chad'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the largest reef system in the world?',
        choices: {
            a: 'Great Barrier Reef',
            b: 'Florida Reef',
            c: 'Belize Barrier Reef',
            d: 'Maldives Coral Reef'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the smallest continent in the world?',
        choices: {
            a: 'Europe',
            b: 'South America',
            c: 'Antarctica',
            d: 'Australia'
        },
        answer: 'd'
    },
    {
        question: 'What is the name of the smallest bird in the world?',
        choices: {
            a: 'Hummingbird',
            b: 'Parakeet',
            c: 'Robin',
            d: 'Penguin'
        },
        answer: 'a'
    },
    {
        question: 'Which country is the largest by area?',
        choices: {
            a: 'Russia',
            b: 'Canada',
            c: 'China',
            d: 'United States'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the longest river in the world?',
        choices: {
            a: 'Amazon',
            b: 'Nile',
            c: 'Yangtze',
            d: 'Mississippi'
        },
        answer: 'b'
    },
    {
        question: 'Who is credited with discovering penicillin?',
        choices: {
            a: 'Alexander Fleming',
            b: 'Marie Curie',
            c: 'Albert Einstein',
            d: 'Isaac Newton'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the highest waterfall in the United States?',
        choices: {
            a: 'Niagara Falls',
            b: 'Yosemite Falls',
            c: 'Angel Falls',
            d: 'Victoria Falls'
        },
        answer: 'b'
    },
    {
        question: 'What is the name of the largest desert in the world?',
        choices: {
            a: 'Sahara',
            b: 'Gobi',
            c: 'Arabian',
            d: 'Mojave'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the largest island in the world?',
        choices: {
            a: 'Greenland',
            b: 'Madagascar',
            c: 'Borneo',
            d: 'New Guinea'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the largest country in South America?',
        choices: {
            a: 'Brazil',
            b: 'Argentina',
            c: 'Colombia',
            d: 'Peru'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the largest country in Africa?',
        choices: {
            a: 'Nigeria',
            b: 'Egypt',
            c: 'South Africa',
            d: 'Algeria'
        },
        answer: 'd'
    },
    {
        question: 'What is the name of the smallest country in the world?',
        choices: {
            a: 'Monaco',
            b: 'Nauru',
            c: 'Vatican City',
            d: 'San Marino'
        },
        answer: 'c'
    },
    {
        question: 'Who was the first person to walk on the moon?',
        choices: {
            a: 'Neil Armstrong',
            b: 'Buzz Aldrin',
            c: 'Yuri Gagarin',
            d: 'Alan Shepard'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the largest stadium in the world?',
        choices: {
            a: 'Wembley Stadium',
            b: 'Camp Nou',
            c: 'Rungrado 1st of May Stadium',
            d: 'Santiago Bernabeu'
        },
        answer: 'c'
    },
    {
        question: 'Who is the current Prime Minister of Canada?',
        choices: {
            a: 'Justin Trudeau',
            b: 'Andrew Scheer',
            c: 'Jagmeet Singh',
            d: 'Erin O’Toole'
        },
        answer: 'a'
    },
    {
        question: 'What is the capital of Indonesia?',
        choices: {
            a: 'Jakarta',
            b: 'Bali',
            c: 'Surabaya',
            d: 'Bandung'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the largest lake in Africa?',
        choices: {
            a: 'Lake Victoria',
            b: 'Lake Tanganyika',
            c: 'Lake Malawi',
            d: 'Lake Chad'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the highest mountain in Africa?',
        choices: {
            a: 'Kilimanjaro',
            b: 'Mount Kenya',
            c: 'Mount Meru',
            d: 'Mount Elgon'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the only continent that lies entirely within the Southern Hemisphere?',
        choices: {
            a: 'North America',
            b: 'South America',
            c: 'Europe',
            d: 'Australia'
        },
        answer: 'd'
    },
    {
        question: 'What is the name of the famous street in San Francisco that is known for its steep hills?',
        choices: {
            a: 'Broadway',
            b: 'Lombard Street',
            c: 'Market Street',
            d: 'Van Ness Avenue'
        },
        answer: 'b'
    },
    {
        question: 'What is the name of the largest fish in the world?',
        choices: {
            a: 'Great white shark',
            b: 'Blue whale',
            c: 'Giant squid',
            d: 'Whale shark'
        },
        answer: 'd'
    },
    {
        question: 'What is the name of the smallest bird in the world?',
        choices: {
            a: 'Hummingbird',
            b: 'Wren',
            c: 'Goldcrest',
            d: 'Bee hummingbird'
        },
        answer: 'd'
    },
    {
        question: 'What is the name of the first man to climb Mount Everest?',
        choices: {
            a: 'Tenzing Norgay',
            b: 'Edmund Hillary',
            c: 'Reinhold Messner',
            d: 'Maurice Herzog'
        },
        answer: 'b'
    },
    {
        question: 'What is the name of the largest organ in the human body?',
        choices: {
            a: 'Brain',
            b: 'Heart',
            c: 'Liver',
            d: 'Skin'
        },
        answer: 'd'
    },
    {
        question: 'What is the name of the largest city in South Korea?',
        choices: {
            a: 'Seoul',
            b: 'Busan',
            c: 'Incheon',
            d: 'Daegu'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the largest river in South America?',
        choices: {
            a: 'Amazon',
            b: 'Orinoco',
            c: 'Magdalena',
            d: 'Paraguay'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the largest bird in the world?',
        choices: {
            a: 'Emu',
            b: 'Ostrich',
            c: 'Cassowary',
            d: 'Albatross'
        },
        answer: 'b'
    },
    {
        question: 'What is the product of 7 and 8?',
        choices: {
            a: '15',
            b: '56',
            c: '64',
            d: '72'
        },
        answer: 'b'
    },
    {
        question: 'What is the quotient of 27 and 9?',
        choices: {
            a: '2',
            b: '3',
            c: '6',
            d: '9'
        },
        answer: 'b'
    },
    {
        question: 'What is the sum of 1/3 and 2/5?',
        choices: {
            a: '5/15',
            b: '7/15',
            c: '11/15',
            d: '15/35'
        },
        answer: 'c'
    },
    {
        question: 'What is the difference between 15 and 8?',
        choices: {
            a: '7',
            b: '8',
            c: '15',
            d: '23'
        },
        answer: 'a'
    },
    {
        question: 'What is the area of a rectangle with length 5 and width 7?',
        choices: {
            a: '12',
            b: '25',
            c: '35',
            d: '40'
        },
        answer: 'c'
    },
    {
        question: 'What is the perimeter of a square with sides of length 6?',
        choices: {
            a: '12',
            b: '18',
            c: '24',
            d: '36'
        },
        answer: 'c'
    },
    {
        question: 'What is the value of 7 squared?',
        choices: {
            a: '14',
            b: '21',
            c: '35',
            d: '49'
        },
        answer: 'd'
    },
    {
        question: 'What is the value of 25 divided by 5?',
        choices: {
            a: '2',
            b: '5',
            c: '10',
            d: '15'
        },
        answer: 'b'
    },
    {
        question: 'What is the value of 3 to the power of 4?',
        choices: {
            a: '7',
            b: '9',
            c: '12',
            d: '81'
        },
        answer: 'd'
    },
    {
        question: 'What is the value of 8 times 4 plus 2?',
        choices: {
            a: '26',
            b: '32',
            c: '34',
            d: '40'
        },
        answer: 'c'
    },
    {
        question: 'What is the value of 10 minus 3 plus 6?',
        choices: {
            a: '3',
            b: '7',
            c: '10',
            d: '13'
        },
        answer: 'd'
    },
    {
        question: 'What is the name of the hero in "Terminator 2: Judgment Day"?',
        choices: {
            a: 'Kyle Reese',
            b: 'John Connor',
            c: 'The Terminator',
            d: 'Sarah Connor'
        },
        answer: 'b'
    },
    {
        question: 'What is the title of the 1990 film starring Johnny Depp about a man with scissor blades for hands?',
        choices: {
            a: 'Edward Scissorhands',
            b: 'The Nightmare Before Christmas',
            c: 'Benny & Joon',
            d: 'What\'s Eating Gilbert Grape'
        },
        answer: 'a'
    },
    {
        question: 'In what city does "Home Alone 2: Lost in New York" take place?',
        choices: {
            a: 'Chicago',
            b: 'Boston',
            c: 'Los Angeles',
            d: 'New York'
        },
        answer: 'd'
    },
    {
        question: 'What 1994 film did Quentin Tarantino write and direct, featuring a non-linear storyline and multiple intersecting plotlines?',
        choices: {
            a: 'Pulp Fiction',
            b: 'Reservoir Dogs',
            c: 'True Romance',
            d: 'Natural Born Killers'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the villain in "The Lion King"?',
        choices: {
            a: 'Scar',
            b: 'Zazu',
            c: 'Mufasa',
            d: 'Simba'
        },
        answer: 'a'
    },
    {
        question: 'In what year was "Forrest Gump" released?',
        choices: {
            a: '1991',
            b: '1994',
            c: '1997',
            d: '2000'
        },
        answer: 'b'
    },
    {
        question: 'What is the name of the computer program that Neo must fight in "The Matrix"?',
        choices: {
            a: 'The Terminator',
            b: 'The Oracle',
            c: 'The Architect',
            d: 'Agent Smith'
        },
        answer: 'd'
    },
    {
        question: 'What is the name of the dog in "The Mask"?',
        choices: {
            a: 'Buddy',
            b: 'Max',
            c: 'Oscar',
            d: 'Milo'
        },
        answer: 'd'
    },
    {
        question: 'What 1997 film tells the story of a young woman who travels back in time to meet her mother as a teenager, and accidentally disrupts her parents\' first meeting?',
        choices: {
            a: 'Back to the Future',
            b: 'The Time Traveler\'s Wife',
            c: 'The Butterfly Effect',
            d: 'Kate & Leopold'
        },
        answer: 'd'
    },
    {
        question: 'What is the name of the clown in "It"?',
        choices: {
            a: 'Pennywise',
            b: 'Bozo',
            c: 'Krusty',
            d: 'Ronald McDonald'
        },
        answer: 'a'
    },
    {
        question: 'Who wrote the Harry Potter series of books?',
        choices: {
            a: 'J.K. Rowling',
            b: 'Stephenie Meyer',
            c: 'Suzanne Collins',
            d: 'Veronica Roth'
        },
        answer: 'a'
    },
    {
        question: 'What is the capital of Canada?',
        choices: {
            a: 'Toronto',
            b: 'Ottawa',
            c: 'Montreal',
            d: 'Vancouver'
        },
        answer: 'b'
    },
    {
        question: 'What is the largest planet in our solar system?',
        choices: {
            a: 'Venus',
            b: 'Mars',
            c: 'Jupiter',
            d: 'Saturn'
        },
        answer: 'c'
    },
    {
        question: 'What is the name of the tallest mountain in the world?',
        choices: {
            a: 'Mount Kilimanjaro',
            b: 'Mount Everest',
            c: 'Mount Denali',
            d: 'Mount Fuji'
        },
        answer: 'b'
    },
    {
        question: 'Who was the first person to walk on the moon?',
        choices: {
            a: 'Neil Armstrong',
            b: 'Buzz Aldrin',
            c: 'Yuri Gagarin',
            d: 'John Glenn'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the largest ocean in the world?',
        choices: {
            a: 'Atlantic Ocean',
            b: 'Indian Ocean',
            c: 'Pacific Ocean',
            d: 'Arctic Ocean'
        },
        answer: 'c'
    },
    {
        question: 'What is the name of the instrument that is played by blowing into it?',
        choices: {
            a: 'Piano',
            b: 'Trumpet',
            c: 'Drums',
            d: 'Guitar'
        },
        answer: 'b'
    },
    {
        question: 'What is the name of the process by which plants make food?',
        choices: {
            a: 'Photosynthesis',
            b: 'Respiration',
            c: 'Evaporation',
            d: 'Transpiration'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the toy company that produces the Lego building blocks?',
        choices: {
            a: 'Mattel',
            b: 'Hasbro',
            c: 'Lego Group',
            d: 'Mega Brands'
        },
        answer: 'c'
    },
    {
        question: 'Who was the first U.S. President?',
        choices: {
            a: 'George Washington',
            b: 'Thomas Jefferson',
            c: 'Abraham Lincoln',
            d: 'John F. Kennedy'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the author of "Charlotte\'s Web"?',
        choices: {
            a: 'E.B. White',
            b: 'C.S. Lewis',
            c: 'J.K. Rowling',
            d: 'L. Frank Baum'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the animal that is the symbol of the United States?',
        choices: {
            a: 'Bald eagle',
            b: 'Lion',
            c: 'Tiger',
            d: 'Gorilla'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the device used to see distant objects?',
        choices: {
            a: 'Binoculars',
            b: 'Telescope',
            c: 'Microscope',
            d: 'Magnifying glass'
        },
        answer: 'b'
    },
    {
        question: 'What is the name of the capital city of Japan?',
        choices: {
            a: 'Tokyo',
            b: 'Kyoto',
            c: 'Osaka',
            d: 'Sapporo'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the biggest desert in the world?',
        choices: {
            a: 'Sahara',
            b: 'Gobi',
            c: 'Arabian',
            d: 'Kalahari'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the smallest planet in our solar system?',
        choices: {
            a: 'Mars',
            b: 'Venus',
            c: 'Mercury',
            d: 'Pluto'
        },
        answer: 'c'
    },
    {
        question: 'What is the name of the largest land animal in the world?',
        choices: {
            a: 'Giraffe',
            b: 'Elephant',
            c: 'Hippopotamus',
            d: 'Rhinoceros'
        },
        answer: 'b'
    },
    {
        question: 'What is the name of the instrument that is played by hitting it?',
        choices: {
            a: 'Piano',
            b: 'Trumpet',
            c: 'Drums',
            d: 'Guitar'
        },
        answer: 'c'
    },
    {
        question: 'What is the name of the device that measures temperature?',
        choices: {
            a: 'Ruler',
            b: 'Thermometer',
            c: 'Barometer',
            d: 'Altimeter'
        },
        answer: 'b'
    },
    {
        question: 'What is the name of the process by which water changes from a liquid to a gas?',
        choices: {
            a: 'Melting',
            b: 'Freezing',
            c: 'Boiling',
            d: 'Condensation'
        },
        answer: 'c'
    },
    {
        question: 'What is the name of the toy company that produces Barbie dolls?',
        choices: {
            a: 'Mattel',
            b: 'Hasbro',
            c: 'Lego Group',
            d: 'Mega Brands'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the musical instrument that is played with a bow?',
        choices: {
            a: 'Trumpet',
            b: 'Guitar',
            c: 'Violin',
            d: 'Piano'
        },
        answer: 'c'
    },
    {
        question: 'What is the name of the part of a plant that makes seeds?',
        choices: {
            a: 'Flower',
            b: 'Stem',
            c: 'Root',
            d: 'Leaf'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the animal that is known for its black and white stripes?',
        choices: {
            a: 'Zebra',
            b: 'Hippo',
            c: 'Raccoon',
            d: 'Panda'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the force that makes objects fall to the ground?',
        choices: {
            a: 'Magnetism',
            b: 'Gravity',
            c: 'Electricity',
            d: 'Wind'
        },
        answer: 'b'
    },
    {
        question: 'Which planet is closest to the sun?',
        choices: {
            a: 'Mars',
            b: 'Jupiter',
            c: 'Venus',
            d: 'Saturn'
        },
        answer: 'c'
    },
    {
        question: 'What is the smallest continent by land area?',
        choices: {
            a: 'Africa',
            b: 'Europe',
            c: 'Asia',
            d: 'Australia'
        },
        answer: 'd'
    },
    {
        question: 'What is the name of the organ that pumps blood throughout the body?',
        choices: {
            a: 'Brain',
            b: 'Liver',
            c: 'Heart',
            d: 'Lungs'
        },
        answer: 'c'
    },
    {
        question: 'What is the smallest unit of matter?',
        choices: {
            a: 'Atom',
            b: 'Molecule',
            c: 'Cell',
            d: 'Nucleus'
        },
        answer: 'a'
    },
    {
        question: 'What is the term for a word that has the opposite meaning of another word?',
        choices: {
            a: 'Synonym',
            b: 'Homophone',
            c: 'Antonym',
            d: 'Rhyme'
        },
        answer: 'c'
    },
    {
        question: 'What is the name of the device that changes sound into an electrical signal?',
        choices: {
            a: 'Microphone',
            b: 'Speaker',
            c: 'Amplifier',
            d: 'Recorder'
        },
        answer: 'a'
    },
    {
        question: 'What is the name of the instrument used to measure wind speed?',
        choices: {
            a: 'Thermometer',
            b: 'Barometer',
            c: 'Anemometer',
            d: 'Hygrometer'
        },
        answer: 'c'
    },
    {
        question: 'Which of the following is a mammal: snake, frog, whale, or lizard?',
        choices: {
            a: 'Snake',
            b: 'Frog',
            c: 'Whale',
            d: 'Lizard'
        },
        answer: 'c'
    },
    {
        question: 'What is the name of the smallest particle of an element that has the properties of that element?',
        choices: {
            a: 'Proton',
            b: 'Neutron',
            c: 'Electron',
            d: 'Atom'
        },
        answer: 'd'
    },
    {
        question: 'What is the term for a word that sounds like the thing it describes?',
        choices: {
            a: 'Simile',
            b: 'Metaphor',
            c: 'Personification',
            d: 'Onomatopoeia'
        },
        answer: 'd'
    },
    {
        question: 'What is the name of the process by which plants make their own food?',
        choices: {
            a: 'Photosynthesis',
            b: 'Respiration',
            c: 'Fermentation',
            d: 'Combustion'
        },
        answer: 'a'
    },

];

// state variables
let playerName;
let numOfQuestions;
let currentQuestions;
let score;
let randomQuestions;
let position;
let newQuestionEl;
let newUlEl;
let newChoice1El;
let newChoice2El;
let newChoice3El;
let newChoice4El;
let answer;
let nextBtn;
let warningEl;
let warningMsgEl;
let playAgainBtn;



// cached elements
const nameInputEl = document.getElementById('name-input');
const numInputEl = document.getElementById('num-input');
const playBtn = document.getElementById('play-button');
const mainContainerEl = document.getElementById('main-container');
const homeDivEl = document.getElementById('home-div');
let scoreEl = document.createElement('p');
let audio = document.createElement('audio');




// event listeners
playBtn.addEventListener('click', play);

// functions
initialize();

// resets all to initial values
function initialize() {
    playerName = '';
    numOfQuestions = 0;
    currentQuestions = [];
    score = 0;
    randomQuestions = [];
    position = 0;
}

// takes player input and starts game
function play() {
    playerName = nameInputEl.value;
    numOfQuestions = numInputEl.value;
  
    // checks if input fields are empty of out of bound
    // displays warning if true
    if (playerName === '' || numOfQuestions <= 0 || numOfQuestions > 50) {
        if (playerName === ''){
            nameInputEl.classList = 'focus';
        } else {
            nameInputEl.classList = '';
        }
        if (numOfQuestions <= 0 || numOfQuestions > 50) {
            numInputEl.classList = 'focus';
        } else {
            numInputEl.classList = '';
        }

        if (warningEl === undefined) {
            invalidInput();
            return;
        } 
        warningEl.remove();
        invalidInput();
        return;
    } else if (warningEl !== undefined) {
        warningEl.remove();
    }
    
    nameInputEl.value = '';
    numInputEl.value = '';
    randomQuestions = randomize(questionsBank);
    currentQuestions = questionsPicker(randomQuestions);
    position++;
    document.getElementById('name-label').remove();
    nameInputEl.remove();
    document.getElementById('name-div').remove();
    document.getElementById('num-label').remove();
    numInputEl.remove();
    document.getElementById('num-div').remove();

    playBtn.remove();

    createNewLayout();
}

// creates warning
function invalidInput() {
    warningEl = document.createElement('div');
    warningEl.classList = 'warning-box';
    mainContainerEl.appendChild(warningEl);
    warningMsgEl = document.createElement('span');
    warningMsgEl.classList = 'warning-msg';
    warningMsgEl.innerText = 'Invalid Input\n Try again'
    warningEl.append(warningMsgEl);
}

// shuffles all questions in questionsBank array
function randomize(randomQuestions) {
    for (let i = questionsBank.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i - 1));
        [questionsBank[i], questionsBank[randomIndex]] = [questionsBank[randomIndex], questionsBank[i]];
    }
    return randomQuestions;
}

// loads # of questions chosen by the user to currenQuestions array
function questionsPicker() {
    for (let i = 0; i < numOfQuestions; i++) {
        currentQuestions.push(randomQuestions[i]);
    }
    return currentQuestions;
}

// generates elements for new question and answers
function createNewLayout() {
    newQuestionEl = document.createElement('h2');
    newQuestionEl.classList = 'question';
    newQuestionEl.innerText = currentQuestions[position-1].question;
    homeDivEl.appendChild(newQuestionEl);

    newUlEl = document.createElement('ul');
    newUlEl.classList = 'choice';
    homeDivEl.appendChild(newUlEl);

    newChoice1El = document.createElement('li');
    newChoice1El.classList = 'a';
    newChoice1El.innerText = currentQuestions[position-1].choices.a;
    newUlEl.appendChild(newChoice1El);

    newChoice2El = document.createElement('li');
    newChoice2El.classList = 'b';
    newChoice2El.innerText = currentQuestions[position-1].choices.b;
    newUlEl.appendChild(newChoice2El);

    newChoice3El = document.createElement('li');
    newChoice3El.classList = 'c';
    newChoice3El.innerText = currentQuestions[position-1].choices.c;
    newUlEl.appendChild(newChoice3El);

    newChoice4El = document.createElement('li');
    newChoice4El.classList = 'd';
    newChoice4El.innerText = currentQuestions[position-1].choices.d;
    newUlEl.appendChild(newChoice4El);

    answer = currentQuestions[position-1].answer;

    // adds even delegation to 'ul' elements (multiple choice)
    newUlEl.addEventListener('click', checkAnswer);
}

// handles event from clicking on newULEl 
function checkAnswer (event){
    let className = event.target.className;

    // checks if selected answer is correct
    if(className === answer) {
        document.querySelector(`li.${className}`).innerHTML = `${questionsBank[position-1].choices[`${answer}`]}<span style="color: green"> CORRECT</span>`;
        clap();
        newUlEl.removeEventListener('click', checkAnswer);
        score++;
        renderNextBtn();
        renderScore();  
        return;
    } else {
        document.querySelector(`li.${className}`).innerHTML = `${questionsBank[position-1].choices[`${className}`]}<span style="color: red"> INCORRECT</span>`;
        document.querySelector(`li.${answer}`).innerHTML = `${questionsBank[position-1].choices[`${answer}`]}<span style="color: green"> CORRECT</span>`;
        boo();
        newUlEl.removeEventListener('click', checkAnswer);
        renderNextBtn();
        renderScore();  
        return;
    }  
}

// creates "next" button and adds event listener to it
function renderNextBtn() {
    nextBtn = document.createElement('button');
    nextBtn.innerText = 'Next';
    nextBtn.classList = 'next';
    homeDivEl.appendChild(nextBtn);
    nextBtn.addEventListener('click', nextQuestion);

}

// renders score message to the screen
function renderScore() {
    scoreEl.className = "score-msg";
    scoreEl.innerHTML = `Hey ${playerName}! You've answered <b><em>${score}</em></b> out of <b><em>${numOfQuestions}</em></b> questions correctly.`;
    document.querySelector('body').append(scoreEl);
}

// removes the question, choices, button, and score elements
function clearQuestions() {
    newQuestionEl.remove();
    newUlEl.remove();
    newChoice1El.remove();
    newChoice2El.remove();
    newChoice3El.remove();
    newChoice4El.remove();
    nextBtn.remove();
    scoreEl.remove();

    return;
}

function nextQuestion() {
    
    // removes old question and answers from screen and invokes new layout
    if (position < numOfQuestions) {
        position++;
        clearQuestions();
        createNewLayout();
        renderScore();
        
    // clears screen, calculates score and renders final message based on score
    } else if (position == numOfQuestions) {
        clearQuestions();
        let grade = score/numOfQuestions*100;
        let gradeRnd = Math.round(grade);          
        scoreEl.innerHTML = `You've answered <b><em>${score}</em></b> out of <b><em>${numOfQuestions}</em></b> questions correctly.<br><br>That's ${gradeRnd}% correct!`;
        scoreEl.classList = 'congrats-msg'
        homeDivEl.append(scoreEl);
        let finalMsg = document.createElement('h4');
        if (grade >= 90) {
            finalMsg.innerHTML = `<span class="emphasize">Great job!<br>You're almost as<br>smart as ChatGPT.</span><br><br>Would you like to play again?`
            homeDivEl.append(finalMsg);
        } else if (grade >= 75) {
            finalMsg.innerHTML = `<span class="emphasize">Not too bad!<br>ChatGPT is still smarter than you.</span><br><br>Would you like to play again?`
            homeDivEl.append(finalMsg);
        } else if (grade >= 55) {
            finalMsg.innerHTML = `<span class="emphasize">You could benefit from reading a book.<br>ChatGPT is way smarter than you.</span><br><br>Would you like to play again?`
            homeDivEl.append(finalMsg);
        } else {
            finalMsg.innerHTML = `<span class="emphasize">You uncultured swine!<br>Do you even know what ChatGPT is?!?.</span><br><br>Would you like to play again?`
            homeDivEl.append(finalMsg);
        }   
        playAgain();
    }
}

// creates "play again" button and adds event listener to it
function playAgain() {
    playAgainBtn = document.createElement('button');
    playAgainBtn.innerText = 'Play Again';
    playAgainBtn.classList = 'play-again';
    homeDivEl.appendChild(playAgainBtn);
    playAgainBtn.addEventListener('click', reload);
}

// reloads the page
function reload(){
    location.reload();
}

// creates and plays clapping audio
function clap(){
    audio.setAttribute("src", "./files/clap.mp3");
    return audio.play();
}

// creates and plays booing audio
function boo(){
    audio.setAttribute("src", "./files/boo.mp3");
    return audio.play();
}
