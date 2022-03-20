export const ANIME_BASE_URL = "https://api.aniapi.com/v1"
export const SERVER_BASE_URL = "http://localhost:5000"

export const ENUMS = {
  FORMATS: ["TV", "TV_SHORT", "MOVIE", "SPECIAL", "OVA", "ONA", "MUSIC"],
  STATUS: ["FINISHED", "RELEASING", "NOT_YET_RELEASED", "CANCELLED"],
  SEASON: ["WINTER", "SPRING", "SUMMER", "FALL", "UNKNOWN"],
  DAY: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}

export const ANIME_CONSTANTS = {
  FORMATS: {
    TV: "TV Show",
    TV_SHORT: "TV Short",
    MOVIE: "Movie",
    SPECIAL: "Special",
    OVA: "OVA",
    ONA: "ONA",
    MUSIC: "Music"
  },
  STATUS: {
    FINISHED: "Finished",
    RELEASING: "Releasing",
    NOT_YET_RELEASED: "Not released yet",
    CANCELLED: "Cancelled"
  },
  SEASON: {
    WINTER: "Winter",
    SPRING: "Spring",
    SUMMER: "Summer",
    FALL: "Fall"
  },
  GENRES: [
    "Action",
    "Adventure",
    "Comedy",
    "Drama",
    "Ecchi",
    "Fantasy",
    "Horror",
    "Mahou Shoujo",
    "Mecha",
    "Music",
    "Mystery",
    "Psychological",
    "Romance",
    "Sci-Fi",
    "Slice of Life",
    "Sports",
    "Supernatural",
    "Thriller",
    "Anti-Hero",
    "Ensemble Cast",
    "Female Protagonist",
    "Male Protagonist",
    "Office Lady",
    "Primarily Adult Cast",
    "Primarily Child Cast",
    "Primarily Female Cast",
    "Primarily Male Cast",
    "Villainess",
    "Age Regression",
    "Agender",
    "Aliens",
    "Amnesia",
    "Artificial Intelligence",
    "Asexual",
    "Butler",
    "Centaur",
    "Chimera",
    "Chuunibyou",
    "Cosplay",
    "Crossdressing",
    "Delinquents",
    "Demons",
    "Detective",
    "Dinosaurs",
    "Dissociative Identities",
    "Dragons",
    "Dullahan",
    "Elf",
    "Ghost",
    "Goblin",
    "Gods",
    "Gyaru",
    "Hikikomori",
    "Idol",
    "Kemonomimi",
    "Kuudere",
    "Maids",
    "Mermaid",
    "Monster Girl",
    "Nekomimi",
    "Ninja",
    "Nudity",
    "Nun",
    "Oiran",
    "Ojou-Sama",
    "Pirates",
    "Robots",
    "Samurai",
    "Shrine Maiden",
    "Skeleton",
    "Succubus",
    "Tanned Skin",
    "Teacher",
    "Tsundere",
    "Twins",
    "Vampire",
    "Vikings",
    "Werewolf",
    "Witch",
    "Yandere",
    "Zombie",
    "Josei",
    "Kids",
    "Seinen",
    "Shoujo",
    "Shounen",
    "Bar",
    "Circus",
    "College",
    "Dungeon",
    "Foreign",
    "Language Barrier",
    "Outdoor",
    "Rural",
    "School",
    "School Club",
    "Urban",
    "Work",
    "Achronological Order",
    "Anachronism",
    "Dystopian",
    "Historical",
    "Time Skip",
    "Afterlife",
    "Alternate Universe",
    "Augmented Reality",
    "Post-Apocalyptic",
    "Space",
    "Urban Fantasy",
    "Virtual World",
    "4-Koma",
    "Achromatic",
    "Advertisement",
    "Anthology",
    "CGI",
    "Episodic",
    "Flash",
    "Full CGI",
    "Full Color",
    "No Dialogue",
    "POV",
    "Puppetry",
    "Rotoscoping",
    "Stop Motion",
    "Archery",
    "Battle Royale",
    "Espionage",
    "Fugitive",
    "Guns",
    "Martial Arts",
    "Swordplay",
    "Acting",
    "Calligraphy",
    "Classic Literature",
    "Drawing",
    "Fashion",
    "Food",
    "Photography",
    "Rakugo",
    "Writing",
    "Band",
    "Dancing",
    "Musical",
    "Parody",
    "Satire",
    "Slapstick",
    "Surreal Comedy",
    "Bullying",
    "Coming Of Age",
    "Conspiracy",
    "Rehabilitation",
    "Revenge",
    "Tragedy",
    "Body Swapping",
    "Cultivation",
    "Fairy Tale",
    "Henshin",
    "Isekai",
    "Kaiju",
    "Magic",
    "Mythology",
    "Shapeshifting",
    "Steampunk",
    "Super Power",
    "Superhero",
    "Wuxia",
    "Youkai",
    "Video Games",
    "Card Battle",
    "Go",
    "Karuta",
    "Mahjong",
    "Poker",
    "Shogi",
    "Airsoft",
    "American Football",
    "Athletics",
    "Badminton",
    "Baseball",
    "Basketball",
    "Boxing",
    "Cheerleading",
    "Cycling",
    "Fishing",
    "Fitness",
    "Football",
    "Golf",
    "Ice Skating",
    "Lacrosse",
    "Rugby",
    "Scuba Diving",
    "Skateboarding",
    "Surfing",
    "Swimming",
    "Table Tennis",
    "Tennis",
    "Volleyball",
    "Wrestling",
    "Animals",
    "Astronomy",
    "Autobiographical",
    "Biographical",
    "Body Horror",
    "Cannibalism",
    "Chibi",
    "Cosmic Horror",
    "Crime",
    "Crossover",
    "Death Game",
    "Denpa",
    "Drugs",
    "Economics",
    "Educational",
    "Environmental",
    "Ero Guro",
    "Gambling",
    "Gender Bending",
    "Gore",
    "LGBTQ+ Themes",
    "Lost Civilization",
    "Medicine",
    "Memory Manipulation",
    "Meta",
    "Noir",
    "Otaku Culture",
    "Pandemic",
    "Philosophy",
    "Politics",
    "Reincarnation",
    "Slavery",
    "Software Development",
    "Survival",
    "Terrorism",
    "War",
    "Assassins",
    "Cult",
    "Firefighters",
    "Gangs",
    "Mafia",
    "Military",
    "Police",
    "Triads",
    "Yakuza",
    "Aviation",
    "Cars",
    "Mopeds",
    "Motorcycles",
    "Ships",
    "Tanks",
    "Trains",
    "Age Gap",
    "Bisexual",
    "Boys' Love",
    "Harem",
    "Love Triangle",
    "Reverse Harem",
    "Teens' Love",
    "Yuri",
    "Cyberpunk",
    "Space Opera",
    "Time Manipulation",
    "Tokusatsu",
    "Real Robot",
    "Super Robot",
    "Cute Girls Doing Cute Things",
    "Family Life",
    "Iyashikei"
  ],

  SORTING: [
    "Title",
    "Popularity",
    "Average Score",
    "Trending",
    "Favorites",
    "Date Added",
    "Release Date"
  ],

  LATEST_YEAR: new Date().getFullYear() + 1
}
