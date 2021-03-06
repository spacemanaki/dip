var borders={
    "North Sea": [
        "Edinburgh",
        "Yorkshire",
        "London",
        "English Channel",
        "Belgium",
        "Holland",
        "Helgoland Bight",
        "Denmark",
        "Skagerrak",
        "Norway",
        "Norwegian Sea"
    ],
    "Barents Sea": [
        "St Petersburg (nc)",
        "Norwegian Sea",
        "Norway"
    ],
    "St Petersburg (nc)": [
        "Barents Sea",
        "Norway",
        "Finland",
        "St Petersburg (sc)",
        "Moscow"
    ],
    "Norwegian Sea": [
        "North Sea",
        "Barents Sea",
        "Norway",
        "Edinburgh",
        "Clyde",
        "North Atlantic Ocean"
    ],
    "Norway": [
        "Norwegian Sea",
        "Barents Sea",
        "St Petersburg (nc)",
        "Finland",
        "Sweden",
        "Skagerrak"
    ],
    "Edinburgh": [
        "North Sea",
        "Norwegian Sea",
        "Clyde",
        "Liverpool",
        "Yorkshire"
    ],
    "Clyde": [
        "Norwegian Sea",
        "Edinburgh",
        "North Atlantic Ocean",
        "Liverpool"
    ],
    "North Atlantic Ocean": [
        "Norwegian Sea",
        "Clyde",
        "Liverpool",
        "Irish Sea",
        "Mid-Atlantic_Ocean"
    ],
    "Switzerland": [
        "Burgundy",
        "Munich",
        "Marseilles",
        "Piedmont",
        "Tyrolia"
    ],
    "Burgundy": [
        "Switzerland",
        "Munich",
        "Marseilles",
        "Belgium",
        "Ruhr",
        "Picardy",
        "Gascony",
        "Paris"
    ],
    "Munich": [
        "Switzerland",
        "Burgundy",
        "Tyrolia",
        "Berlin",
        "Kiel",
        "Silesia",
        "Bohemia",
        "Ruhr"
    ],
    "Marseilles": [
        "Switzerland",
        "Burgundy",
        "Piedmont",
        "Gascony",
        "Spain (sc)",
        "Gulf of Lyon"
    ],
    "Piedmont": [
        "Switzerland",
        "Marseilles",
        "Tyrolia",
        "Gulf of Lyon",
        "Tuscany",
        "Venice"
    ],
    "Tyrolia": [
        "Switzerland",
        "Piedmont",
        "Munich",
        "Bohemia",
        "Vienna",
        "Venice",
        "Trieste"
    ],
    "Adriatic Sea": [
        "Apulia",
        "Ionian Sea",
        "Venice",
        "Trieste",
        "Albania"
    ],
    "Apulia": [
        "Adriatic Sea",
        "Ionian Sea",
        "Venice",
        "Naples",
        "Rome"
    ],
    "Ionian Sea": [
        "Adriatic Sea",
        "Apulia",
        "Albania",
        "Aegean Sea",
        "Greece",
        "Naples",
        "Eastern Mediterranean",
        "Tyrrhenian Sea",
        "Tunis"
    ],
    "Venice": [
        "Adriatic Sea",
        "Apulia",
        "Trieste",
        "Rome",
        "Piedmont",
        "Tuscany",
        "Tyrolia"
    ],
    "Trieste": [
        "Adriatic Sea",
        "Venice",
        "Albania",
        "Serbia",
        "Budapest",
        "Vienna",
        "Tyrolia"
    ],
    "Albania": [
        "Adriatic Sea",
        "Trieste",
        "Ionian Sea",
        "Greece",
        "Serbia"
    ],
    "Aegean Sea": [
        "Greece",
        "Ionian Sea",
        "Bulgaria (sc)",
        "Constantinople",
        "Smyrna",
        "Eastern Mediterranean"
    ],
    "Greece": [
        "Aegean Sea",
        "Ionian Sea",
        "Bulgaria (sc)",
        "Albania",
        "Serbia"
    ],
    "Bulgaria (sc)": [
        "Aegean Sea",
        "Greece",
        "Constantinople",
        "Bulgaria (ec)",
        "Serbia"
    ],
    "Constantinople": [
        "Aegean Sea",
        "Bulgaria (sc)",
        "Smyrna",
        "Ankara",
        "Black Sea",
        "Bulgaria (ec)"
    ],
    "Smyrna": [
        "Aegean Sea",
        "Constantinople",
        "Eastern Mediterranean",
        "Ankara",
        "Armenia",
        "Syria"
    ],
    "Eastern Mediterranean": [
        "Aegean Sea",
        "Smyrna",
        "Syria",
        "Ionian Sea"
    ],
    "Serbia": [
        "Albania",
        "Greece",
        "Trieste",
        "Budapest",
        "Rumania",
        "Bulgaria (ec)",
        "Bulgaria (sc)"
    ],
    "Ankara": [
        "Armenia",
        "Black Sea",
        "Constantinople",
        "Smyrna"
    ],
    "Armenia": [
        "Ankara",
        "Black Sea",
        "Smyrna",
        "Syria",
        "Sevastopol"
    ],
    "Black Sea": [
        "Ankara",
        "Armenia",
        "Constantinople",
        "Sevastopol",
        "Bulgaria (ec)",
        "Rumania"
    ],
    "Naples": [
        "Apulia",
        "Ionian Sea",
        "Rome",
        "Tyrrhenian Sea"
    ],
    "Rome": [
        "Apulia",
        "Venice",
        "Naples",
        "Tyrrhenian Sea",
        "Tuscany"
    ],
    "Syria": [
        "Armenia",
        "Smyrna",
        "Eastern Mediterranean"
    ],
    "Sevastopol": [
        "Armenia",
        "Black Sea",
        "Rumania",
        "Moscow",
        "Ukraine"
    ],
    "Baltic Sea": [
        "Denmark",
        "Skagerrak",
        "Sweden",
        "Gulf of Bothnia",
        "Livonia",
        "Prussia",
        "Berlin",
        "Kiel"
    ],
    "Denmark": [
        "North Sea",
        "Baltic Sea",
        "Skagerrak",
        "Sweden",
        "Kiel",
        "Helgoland Bight"
    ],
    "Skagerrak": [
        "North Sea",
        "Baltic Sea",
        "Denmark",
        "Sweden",
        "Norway"
    ],
    "Sweden": [
        "Baltic Sea",
        "Denmark",
        "Skagerrak",
        "Gulf of Bothnia",
        "Finland",
        "Norway"
    ],
    "Gulf of Bothnia": [
        "Baltic Sea",
        "Sweden",
        "Livonia",
        "Finland",
        "St Petersburg (sc)"
    ],
    "Livonia": [
        "Baltic Sea",
        "Gulf of Bothnia",
        "Prussia",
        "St Petersburg (sc)",
        "Warsaw",
        "Moscow"
    ],
    "Prussia": [
        "Baltic Sea",
        "Livonia",
        "Berlin",
        "Silesia",
        "Warsaw"
    ],
    "Berlin": [
        "Baltic Sea",
        "Prussia",
        "Kiel",
        "Munich",
        "Silesia"
    ],
    "Kiel": [
        "Baltic Sea",
        "Berlin",
        "Denmark",
        "Munich",
        "Helgoland Bight",
        "Holland",
        "Ruhr"
    ],
    "Belgium": [
        "North Sea",
        "Holland",
        "Ruhr",
        "Burgundy",
        "Picardy",
        "English Channel"
    ],
    "Holland": [
        "North Sea",
        "Belgium",
        "Ruhr",
        "Helgoland Bight",
        "Kiel"
    ],
    "Ruhr": [
        "Belgium",
        "Holland",
        "Burgundy",
        "Munich",
        "Kiel"
    ],
    "Picardy": [
        "Belgium",
        "Burgundy",
        "English Channel",
        "Brest",
        "Paris"
    ],
    "English Channel": [
        "North Sea",
        "Belgium",
        "Picardy",
        "Brest",
        "Mid-Atlantic_Ocean",
        "Irish Sea",
        "Wales",
        "London"
    ],
    "Silesia": [
        "Berlin",
        "Munich",
        "Prussia",
        "Bohemia",
        "Galicia",
        "Warsaw"
    ],
    "Bulgaria (ec)": [
        "Black Sea",
        "Constantinople",
        "Rumania",
        "Bulgaria (sc)",
        "Serbia"
    ],
    "Rumania": [
        "Black Sea",
        "Bulgaria (ec)",
        "Sevastopol",
        "Budapest",
        "Galicia",
        "Serbia",
        "Ukraine"
    ],
    "Bohemia": [
        "Munich",
        "Tyrolia",
        "Silesia",
        "Galicia",
        "Vienna"
    ],
    "Galicia": [
        "Bohemia",
        "Silesia",
        "Vienna",
        "Budapest",
        "Rumania",
        "Warsaw",
        "Ukraine"
    ],
    "Vienna": [
        "Bohemia",
        "Galicia",
        "Tyrolia",
        "Budapest",
        "Trieste"
    ],
    "Brest": [
        "English Channel",
        "Picardy",
        "Mid-Atlantic_Ocean",
        "Gascony",
        "Paris"
    ],
    "Mid-Atlantic_Ocean": [
        "Brest",
        "English Channel",
        "Gascony",
        "Spain (nc)",
        "Irish Sea",
        "North Atlantic Ocean",
        "Portugal",
        "Spain (sc)",
        "Western Mediterranean",
        "North Africa"
    ],
    "Gascony": [
        "Brest",
        "Mid-Atlantic_Ocean",
        "Paris",
        "Burgundy",
        "Marseilles",
        "Spain (nc)",
        "Spain (sc)"
    ],
    "Paris": [
        "Brest",
        "Gascony",
        "Picardy",
        "Burgundy"
    ],
    "Budapest": [
        "Galicia",
        "Rumania",
        "Serbia",
        "Trieste",
        "Vienna"
    ],
    "Liverpool": [
        "Clyde",
        "North Atlantic Ocean",
        "Edinburgh",
        "Yorkshire",
        "Irish Sea",
        "Wales"
    ],
    "Helgoland Bight": [
        "North Sea",
        "Denmark",
        "Kiel",
        "Holland"
    ],
    "Yorkshire": [
        "North Sea",
        "Edinburgh",
        "Liverpool",
        "Wales",
        "London"
    ],
    "Irish Sea": [
        "English Channel",
        "Wales",
        "Liverpool",
        "North Atlantic Ocean",
        "Mid-Atlantic_Ocean"
    ],
    "Wales": [
        "English Channel",
        "Irish Sea",
        "London",
        "Liverpool",
        "Yorkshire"
    ],
    "London": [
        "North Sea",
        "English Channel",
        "Wales",
        "Yorkshire"
    ],
    "Finland": [
        "Gulf of Bothnia",
        "Sweden",
        "St Petersburg (sc)",
        "St Petersburg (nc)",
        "Norway"
    ],
    "St Petersburg (sc)": [
        "Finland",
        "Gulf of Bothnia",
        "St Petersburg (nc)",
        "Livonia",
        "Moscow"
    ],
    "Warsaw": [
        "Galicia",
        "Silesia",
        "Ukraine",
        "Livonia",
        "Prussia",
        "Moscow"
    ],
    "Ukraine": [
        "Galicia",
        "Warsaw",
        "Rumania",
        "Moscow",
        "Sevastopol"
    ],
    "Spain (nc)": [
        "Gascony",
        "Mid-Atlantic_Ocean",
        "Spain (sc)",
        "Portugal"
    ],
    "Spain (sc)": [
        "Gascony",
        "Spain (nc)",
        "Marseilles",
        "Gulf of Lyon",
        "Western Mediterranean",
        "Mid-Atlantic_Ocean",
        "Portugal"
    ],
    "Gulf of Lyon": [
        "Spain (sc)",
        "Western Mediterranean",
        "Marseilles",
        "Piedmont",
        "Tuscany",
        "Tyrrhenian Sea"
    ],
    "Western Mediterranean": [
        "Gulf of Lyon",
        "Spain (sc)",
        "Mid-Atlantic_Ocean",
        "North Africa",
        "Tunis",
        "Tyrrhenian Sea"
    ],
    "Tuscany": [
        "Gulf of Lyon",
        "Piedmont",
        "Tyrrhenian Sea",
        "Venice",
        "Rome"
    ],
    "Tyrrhenian Sea": [
        "Gulf of Lyon",
        "Tuscany",
        "Ionian Sea",
        "Naples",
        "Tunis",
        "Rome",
        "Western Mediterranean"
    ],
    "Tunis": [
        "Ionian Sea",
        "Tyrrhenian Sea",
        "North Africa",
        "Western Mediterranean"
    ],
    "Moscow": [
        "Livonia",
        "Warsaw",
        "St Petersburg (sc)",
        "St Petersburg (nc)",
        "Ukraine",
        "Sevastopol"
    ],
    "Portugal": [
        "Mid-Atlantic_Ocean",
        "Spain (nc)",
        "Spain (sc)"
    ],
    "North Africa": [
        "Mid-Atlantic_Ocean",
        "Western Mediterranean",
        "Tunis"
    ]
};

