import { Question, QuestionType } from "../models/question";

export const standardQuestions: Question[] = [
  {
    type: QuestionType.Standard,
    startString:
      "{person1} and {person2} - whoever has more instagram followers can give out a number of drinks equal to the first digit of their follower count.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{person1} and {person2} - whoever has more instagram followers can give out a number of drinks equal to the first digit of their follower count.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{person1} and {person2} - whoever has more instagram followers can give out a number of drinks equal to the first digit of their follower count.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{person1} and {person2} - whoever has more instagram followers can give out a number of drinks equal to the first digit of their follower count.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{person1} and {person2} - whoever has more instagram followers can give out a number of drinks equal to the first digit of their follower count.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{person1} and {person2} - whoever has more instagram followers can give out a number of drinks equal to the first digit of their follower count.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{person1} and {person2} - whoever has more instagram followers can give out a number of drinks equal to the first digit of their follower count.",
  },
];

export const categoryQuestions: Question[] = [
  {
    type: QuestionType.Categories,
    startString: "Booze Brands",
  },
  {
    type: QuestionType.Categories,
    startString: "Euopean Countries",
  },
  {
    type: QuestionType.Categories,
    startString: "Fruits",
  },
  {
    type: QuestionType.Categories,
    startString: "Vegetables",
  },
  {
    type: QuestionType.Categories,
    startString: "Sports",
  },
  {
    type: QuestionType.Categories,
    startString: "Movies",
  },
  {
    type: QuestionType.Categories,
    startString: "TV Shows",
  },
  {
    type: QuestionType.Categories,
    startString: "Books",
  },
  {
    type: QuestionType.Categories,
    startString: "Music Genres",
  },
  {
    type: QuestionType.Categories,
    startString: "Video Games",
  },
  {
    type: QuestionType.Categories,
    startString: "Board Games",
  },
  {
    type: QuestionType.Categories,
    startString: "Animals",
  },
  {
    type: QuestionType.Categories,
    startString: "Colors",
  },
  {
    type: QuestionType.Categories,
    startString: "Languages",
  },
  {
    type: QuestionType.Categories,
    startString: "Musical Instruments",
  },
  {
    type: QuestionType.Categories,
    startString: "Mythical Creatures",
  },
  {
    type: QuestionType.Categories,
    startString: "Fashion Brands",
  },
  {
    type: QuestionType.Categories,
    startString: "Tech Companies",
  },
];

export const ruleQuestions: Question[] = [
  {
    type: QuestionType.Rule,
    startString: "You must drink with your bad hand.",
    endString: "You may drink with whatever hand you like.",
  },
  {
    type: QuestionType.Rule,
    startString:
      "You must refer to people you talk to as 'Your Majesty' or something similar.",
    endString: "You may refer to people however you like.",
  },
  {
    type: QuestionType.Rule,
    startString: "You must use an accent that is not your native.",
    endString: "You may speak however you like.",
  },
  {
    type: QuestionType.Rule,
    startString: "You must always stand up when you drink.",
    endString: "You may sit down when you drink.",
  },
  {
    type: QuestionType.Rule,
    startString: "Before you drink, you must cheers another player.",
    endString: "You may drink without cheersing.",
  },
];

export const umActuallyQuestions: Question[] = [
  {
    type: QuestionType.UmActually,
    startString:
      "The Expanse follows the crew of the Rocinante in the future of the solar system and beyond. The Rocinante, originally known as the Tachi, was used by the crew to escape the UNN Donnager while it was under attack by stealth spaceships.",
    endString: "The Donnager was an MCRN ship, not a UNN ship.",
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In all Pokémon games, the player is given the option between three starter Pokémon - one Fire type, one Water type and one Grass type. Up until Omega Ruby and Alpha Sapphire, your rival would pick the one with a type advantage over yours. From Sun and Moon onwards, your rival picks the one with a type disadvantage.",
    endString:
      "In Pokémon Yellow: Special Pikachu edition, Lets Go Pikachu! and Lets Go Eevee!, your starters are Pikachu and Eevee respectively.",
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In Joss Whedon's Sci-fi show Firefly, smuggler captain Malcolm Reynolds and his crew fly aboard the ship Firefly to avoid the all-powerful Alliance.",
    endString: "The name of the ship is Serenity - it is a Firefly class ship.",
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In Return of the Jedi, the rebels attack and destroy the new Death Star's shield generator on the planet Endor with the help of furry creatures called Ewoks.",
    endString: "Endor is not a planet, it is a forested moon.",
  },
  {
    type: QuestionType.UmActually,
    startString:
      "Eevee - the 133rd Pokémon - can evolve into Vaporeon, Electreon, Flareon, Espeon, Umbreon, Leafeon, Glaceon and Sylveon.",
    endString: "Eevee evolves into Jolteon, not Electreon.",
  },
  {
    type: QuestionType.UmActually,
    startString:
      "Captain America's shield is so strong because it is made of Adamantium, the same metal in Wolverine's skeleton.",
    endString:
      "Captain America's shield is made of an alloy of Vibranium and an unknown iron alloy.",
  },
  {
    type: QuestionType.UmActually,
    startString:
      "According to the rules of Quidditch, throwing the Quaffle though an opponent's hoop earns 10 points, hitting an opponent with a bludger earns 0 points, and catching the golden snitch earns 50 points and ends the game.",
    endString: "Catching the golden snitch earns you 150 points.",
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In J.R.R. Tolkein's The Fellowship of the Ring, the titular fellowship is composed of nine members with representatives from four races: Hobbit, Dwarf, Elf, and Man.",
    endString: "Gandalf is a member of the Istari race, not the race of Man.",
  },
  {
    type: QuestionType.UmActually,
    startString:
      "The Wheel of Time series began with the publishing of The Eye of the World in 1990 and concluded 23 years and thirteen books later when Robert Jordan finished the final work, A Memory of Light.",
    endString:
      "Robert Jordan died before the completion of the final three books, which fellow fantasy author Brandon Sanderson completed by referencing his extensive notes.",
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In Harry Potter, the Deathly Hallows are the magical items won by the Peverell Brothers from Gellert Grindelwald: The Elder Wand, the Resurrection Stone, and the Cloak of Invisibility.",
    endString: "The Peverell brothers won the Hallows from Death himself.",
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In the Pokémon games, use of the moonstone can evolve your Clefairy into a Clefable, your Jigglypuff into a Pigglybuff, or your Nidorina into a Nidoqueen.",
    endString: "The correct evolution of Jigglypuff is Wigglytuff.",
  },
  {
    type: QuestionType.UmActually,
    startString:
      "Dungeons and Dragons has a lot of monsters that have been drawn from European Folklore such as the Kobold, Goblin, Orc, and Troll, but it also has several monsters unique to D&D, such as the Tarrasque, the Beholder and the Grell.",
    endString: "Orcs were invented by J.R.R Tolkein for Middle Earth.",
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In Harry Potter, all of Voldemort's most evil henchmen, such as Lucius Malfoy, Bellatrix Lestrange and Peter Pettigrew, graduated Hogwarts as members of Slytherin.",
    endString: "Peter Pettigrew was in Gryffindor.",
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In the original Crash Bandicoot, Crash can gain a new life by breaking a 1-Up Box or by collecting 100 mangoes.",
    endString: "Crashdoesn't collect mangoes, he collects Wumpa Fruit.",
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In the book Charlie and the Chocolate Factory, Augustus Gloop is sucked though a tube in a chocolate river, Violet Beauregard turns into a blueberry after eating experimental gum, Veruca Salt is sent down a trash chute after demanding a goose that lays golden eggs, and Mike Teavee is shrunk by television chocolate technology.",
    endString:
      "These are the correct events of the movie Willy Wonka and the Chocolate Factory. However, in the book Veruca Salt demands a squirrel that can sort nuts.",
  },
  {
    type: QuestionType.UmActually,
    startString:
      "Hogwarts School of Witchcraft and Wizardry is famously divided into four houses, each named after one of the four founders, and each with an associated animal: Lion for Gryffindor, Badger for Hufflepuff, Raven for Ravenclaw, and Snake for Slytherin.",
    endString: "The animal associated with Ravenclaw is an eagle.",
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In the orginal Star Trek, Spock has a faint greenish-yellow hue to create a subtle alien, otherworldly look. While this colour is now iconic enough that you can buy pre-mixed versions of the makeup called L-N#1, the original plan was for Spock be blue.",
    endString:
      "Spock was going to be red, but most people had black & white TVs at the time, which made the red make-up appear to be blackface.",
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In the series His Dark Materials, Lyra Belequa's daemon, Pantalaimon, is an animal companion capable of changing shape and in some ways represents Lyra's soul. In Lyra's world, people's daemons change shape all the time to reflect their mood or personality until the person dies.",
    endString:
      "Most people's daemons only change shape until puberty, and then stay one animal the rest of their life.",
  },
];
