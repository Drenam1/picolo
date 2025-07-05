import { Question, QuestionType } from "../models/question";
import { Topic } from "./topic";

export const standardQuestions: Question[] = [
  {
    type: QuestionType.Standard,
    startString:
      "{player} and {player} - whoever has more instagram followers can give out a number of drinks equal to the first digit of their follower count.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player} must hum a song. The other players must guess the song. The first to guess correctly may nominate {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Who is the funniest person in the room? The comedian {giveortake} {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString: "Anyone who smokes {giveortake} {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Vote for someone to test their sobriety. They must stand on one leg for 10 seconds. If they fall, they must drink {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString: "Everyone take a drink without using your hands.",
  },
  {
    type: QuestionType.Standard,
    startString: "Everyone drink {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString: "The tallest player {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString: "The shortest player {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Vote for the person you think can do the most pushups. They can give out 1 drink for every 5 pushups they can do.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "If you can bend over and touch your toes, you can nominate {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "If your hair color is not natural you {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString: "Anyone with brown eyes {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString: "Anyone with blue eyes {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString: "Anyone with green eyes {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString: "Anyone with hazel eyes {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString: "Men {giveortake} {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString: "Women {giveortake} {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "If you've drunk in the last 3 rounds, you {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "If you've ever been skinnydipping you {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString: "Men, finish your drinks.",
  },
  {
    type: QuestionType.Standard,
    startString: "Women, finish your drinks.",
  },
  {
    type: QuestionType.Standard,
    startString: "Christians/Catholics, finish your drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "The person who shaved most recently {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Anyone who has been pulled over by the police {giveortake} {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Play a round of Truth or Dare - anyone who refuses to participate drinks {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Play a round of Never Have I Ever - three fingers up, first to lose all fingers drinks {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString: "Anyone who can do a backflip may nominate {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString: "Everyone nominate {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Anyone willing to tell the group about their worst date ever can nominate {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Who is most likely to wake up in the woods after a night out? The voted person must drink {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Anyone whos second toe is longer than their big toe {giveortake} {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Anyone who has vomited on public transport {giveortake} {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "If your body count is over 20 you {giveortake} {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString: "First person to do 20 pushups can give out {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString: "Anyone wearing glasses {giveortake} {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player} must record a 5-second moivational video for {player} or drink {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "If you've ever dropped your phone in the toilet, drink {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player}, come up with a name for an erotic fiction novel and detail what it's about, or drink {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player}, do your best impression of {player} or drink {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "If you've ever shit yourself from drinking too much, drink {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player} and {player} must slow dance with each other to the next song, regardless of what that song is, or both players must drink {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Who is the most drunk right now? Vote, and that person drinks 1 and gives out {number}.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player} has to admit what they like to be called in bed. If they admit it they can give out {number} drinks, oherwise drink that many.",
  },
  {
    type: QuestionType.Standard,
    startString: "{player} must feed {player} a piece of food or drink.",
  },
  {
    type: QuestionType.Standard,
    startString: "If you've taken someones virginity, drink {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player} must start into {player}'s eyes without breaking eye contact for 30 seconds or drink {number}.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Waterfall! Starting with {player} and moving clokwise, everyone drinks until the person before them stops.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player}, pick who is the least drunk. That person must finish their drink.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Who has done the most illegal drugs? Vote, and the rock star can give out {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Anyone whos partner is older than them {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player}, give a personalized compliment to all the players (including yourself) or finish your drink.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player} must let {player} give them a nickname for the rest of the game.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "If you've ever had sex in a pool or hot tub, drink {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Who is the most positive player? Vote, and Bob Ross can nominate {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString: "If you're wearing fun socks, nominate {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString: "Anyone drinking water right now has to finish it. Hydrate!",
  },
  {
    type: QuestionType.Standard,
    startString: "If you've ever been streaking, drink {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "If you've ever had sex with someone within 24 hours of meeting them, drink {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Mix together a cocktail of everone's drinks. {player} has to drink it.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player} must give a lapdance to {player}. If either person refuses, both must drink {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player}, pick someone to pick someone else that will drink 5 times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "If you've ever used a cringey pickup line online or in real life, share it with the group and drink {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player}, share your body count to give out 12 drinks, or drink {number} yourself.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player} must sit on {player}'s lap for the next 2 rounds, or drink {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player} drinks 8 times. The person to their left drinks 1 less, all the way around until you reach 0.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Anyone holding a drink in their hand must drink {number} times from it.",
  },
  {
    type: QuestionType.Standard,
    startString: "{player}, ever done 69 before? If yes, drink {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Anyone drinking 7% or lower alcohol content beverages, drink {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString: "Everyone drink {number} from the cup of your choosing.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player} pass an ice cube from your mouth to {player}'s mouth or drink {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player} choose a part of your body. The first person to touch it can give out a shot.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player} give a dare to {player}. If they do it they can give out {number} drinks. If they don't, they drink instead.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player}, what is a non sexual thing that turns you on? If everyone agrees, give out {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player}, who do you think gave/received head more recently, {player} or {player}. They can give out {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player}, who do you think believes they are better in bed, {player} or {player}. They must drink {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Vote for who has the bigger penis (or most Big Dick Energy) out of {player} and {player}. The loser must take a shots.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player} choose a player to take off a item of clothing. The prude must drink {number} if they refuse.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Vote for who is the biggest clout chaser. The attention seeker {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Vote for who is most likely to tell a joke that doesn't land. The jokester {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "All players pass their drinks to the person to their right. {player} take a penalty drink before handing yours over.",
  },
  {
    type: QuestionType.Standard,
    startString: "{player} and {player} take a shot together.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player} who likes foreplay more, {player} or {player}. They {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player} who do you think has been broken up with more, {player} or {player}. They {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString: "If you love anal, you {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Drink {number} times if you've ever had sex with another player.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player} and {player}, demonstrate a sex position. The first person to yell the name gives {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player} and {player}, swap shirts. Both drink {number} times if either player refuses.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Go round the room and say how long it's been since you last had sex. The person with the longest dry spell {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString: "If you like to be dommed, drink {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "If you have any piercings besides ears, you {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Vote for most likely to get in a fight. Chuck Norris {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Who has ripped their pants most recently? That person {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player}, are you a vegetarian? If you are, non-vege's drink {number} times. If no, vegetarians drink {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Everyone, ever been in a love triangle? If so drink 3 times. How about a love square? If so drink 4 times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "If you've ever been in a relationship with someone in this room, you {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player}, who do you think is the most likely to have a mid-life crisis? They {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player}, who do you think is the most likely to be a sugar baby? They {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player}, who do you think is the most likely to be a sugar daddy? They {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Vote for who is most likely to go after a MILF/DILF. That person must drink {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Anyone who has slept with someone in a relationship {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player}, describe a problem of yours and the others take a moment to describe how they'd fix it. Best (or funniest) solution voted by you doesn't drink, everyone else drinks {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Everyone say something they like about {player}. They must drink in their own honor.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Everyone decides on a topic. {player} must go on a 30 second rant about this topic. If they can't fill 30 seconds, they must drink {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "{player} make a pose. The next person must make your pose, then their own. Continue around the circle, adding an additional pose per person. The first person to mess up drinks {number} times.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Anyone who has spent more than £300 in a single night out {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Anyone who has spent more than £300 in a single night out {giveortake} {number} drinks.",
  },
  {
    type: QuestionType.Standard,
    startString:
      "Anyone who has been catfished {giveortake} {number} drinks.",
  },
];

export const categoryQuestions: Question[] = [
  {
    type: QuestionType.Categories,
    startString: "Booze Brands",
  },
  {
    type: QuestionType.Categories,
    startString: "European Countries",
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
    startString: "Show Brands",
  },
  {
    type: QuestionType.Categories,
    startString: "Sex Positions",
  },
  {
    type: QuestionType.Categories,
    startString: "Synonyms for the word 'penis'",
  },
  {
    type: QuestionType.Categories,
    startString: "{player}'s choice!",
  },
];

export const ruleQuestions: Question[] = [
  {
    type: QuestionType.Rule,
    startString: "{player} make a rule.",
    endString: "The custom rule is no longer in effect.",
  },
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
    startString: "You must use an accent that is not your native one.",
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
  {
    type: QuestionType.Rule,
    startString:
      "No looking at your phone (besides the current player, smartass).",
    endString: "You may look at your phone again.",
  },
  {
    type: QuestionType.Rule,
    startString:
      "The player who cries the most when drinking is now called 'Crybaby'. Anyone who calls them by their real name has to drink.",
    endString: "The baby has grown up.",
  },
  {
    type: QuestionType.Rule,
    startString:
      "The oldest player is now called 'Grandpa/Grandma'. Anyone who calls them by their real name has to drink.",
    endString: "The clock has turned back - Grandpa/Grandma is young again.",
  },
  {
    type: QuestionType.Rule,
    startString:
      "{player} is now snake eyes. If you make eye contact with them, you must drink.",
    endString: "Your eyes have returned to normal.",
  },
  {
    type: QuestionType.Rule,
    startString:
      "{player}, choose another player. When you should drink, they must drink instead. If they must drink, you must drink instead",
    endString: "Your drinking buddy has been released.",
  },
];

export const umActuallyQuestions: Question[] = [
  {
    type: QuestionType.UmActually,
    startString:
      "*The Expanse* follows the crew of the spaceship Rocinante in the future of our solar system and beyond. The Rocinante, originally known as the Tachi, was used by the crew to escape the UNN Donnager while it was under attack by stealth spaceships.",
    endString: "The Donnager was an MCRN ship, not a UNN ship.",
    topics: [Topic.TV_SHOWS, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In all *Pokémon* games, the player is given the option between three starter Pokémon - one Fire type, one Water type and one Grass type. Up until Omega Ruby and Alpha Sapphire, your rival would pick the one with a type advantage over yours. From Sun and Moon onwards, your rival picks the one with a type disadvantage.",
    endString: `In "Pokémon Yellow: Special Pikachu edition", "Lets Go Pikachu!" and "Lets Go Eevee!", your starters are Pikachu and Eevee respectively.`,
    topics: [Topic.VIDEO_GAMES, Topic.TV_SHOWS],
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In Joss Whedon's Sci-fi show *Firefly*, smuggler captain Malcolm Reynolds and his crew fly aboard the ship Firefly to avoid the all-powerful Alliance.",
    endString: "The name of the ship is Serenity - it is a Firefly class ship.",
    topics: [Topic.TV_SHOWS],
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In *Return of the Jedi*, the rebels attack and destroy the new Death Star's shield generator on the planet Endor with the help of furry creatures called Ewoks.",
    endString: "Endor is not a planet, it is a forested moon.",
    topics: [Topic.MOVIES],
  },
  {
    type: QuestionType.UmActually,
    startString:
      "Eevee - the 133rd *Pokémon* - can evolve into Vaporeon, Electreon, Flareon, Espeon, Umbreon, Leafeon, Glaceon and Sylveon.",
    endString: "Eevee evolves into Jolteon, not Electreon.",
    topics: [Topic.VIDEO_GAMES, Topic.TV_SHOWS],
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In *Marvel Comics*, Captain America's shield is so strong because it is made of Adamantium, the same metal in Wolverine's skeleton.",
    endString: "Captain America's shield is made of Vibranium.",
    topics: [Topic.COMICS, Topic.MOVIES],
  },
  {
    type: QuestionType.UmActually,
    startString:
      "According to the rules of Quidditch in *Harry Potter*, throwing the Quaffle though an opponent's hoop earns 10 points, hitting an opponent with a bludger earns 0 points, and catching the golden snitch earns 50 points and ends the game.",
    endString: "Catching the golden snitch earns you 150 points.",
    topics: [Topic.MOVIES, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In J.R.R. Tolkein's *The Fellowship of the Ring*, the titular fellowship is composed of nine members with representatives from four races: 4 Hobbits, 3 Men, 1 Dwarf and 1 Elf.",
    endString: "Gandalf is a member of the Istari race, not the race of Man.",
    topics: [Topic.MOVIES, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString:
      "*The Wheel of Time* series began with the publishing of The Eye of the World in 1990 and concluded 23 years and fifteen books later when Robert Jordan finished the final work, A Memory of Light.",
    endString:
      "Robert Jordan died before the completion of the final three books, which fellow fantasy author Brandon Sanderson completed by referencing his extensive notes.",
    topics: [Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In *Harry Potter*, the Deathly Hallows are magical items won by the Peverell Brothers from Gellert Grindelwald They are The Elder Wand, the Resurrection Stone, and the Cloak of Invisibility.",
    endString:
      "The Peverell brothers won the Hallows from Death himself, not Gellert Grindelwald.",
    topics: [Topic.MOVIES, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In the *Pokémon* games, use of the moonstone can evolve your Clefairy into a Clefable, your Jigglypuff into a Pigglybuff, or your Nidorina into a Nidoqueen.",
    endString: "The correct evolution of Jigglypuff is Wigglytuff.",
    topics: [Topic.VIDEO_GAMES, Topic.TV_SHOWS],
  },
  {
    type: QuestionType.UmActually,
    startString:
      "*Dungeons and Dragons* has a lot of monsters that have been drawn from European Folklore such as the Kobold, Goblin, Orc, and Troll, but it also has several monsters unique to D&D, such as the Tarrasque, the Beholder and the Grell.",
    endString: "Orcs were invented by J.R.R Tolkein for Middle Earth.",
    topics: [Topic.BOARD_GAMES],
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In *Harry Potter*, all of Voldemort's most evil henchmen, such as Lucius Malfoy, Bellatrix Lestrange and Peter Pettigrew, graduated Hogwarts as members of Slytherin.",
    endString: "Peter Pettigrew was in Gryffindor.",
    topics: [Topic.MOVIES, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In the original *Crash Bandicoot*, Crash can gain a new life by breaking a 1-Up Box or by collecting 100 mangoes.",
    endString: "Crashdoesn't collect mangoes, he collects Wumpa Fruit.",
    topics: [Topic.VIDEO_GAMES],
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In the book *Charlie and the Chocolate Factory*, Augustus Gloop is sucked though a tube in a chocolate river, Violet Beauregard turns into a blueberry after eating experimental gum, Veruca Salt is sent down a trash chute after demanding a goose that lays golden eggs, and Mike Teavee is shrunk by television chocolate technology.",
    endString:
      "These are the correct events of the movie Willy Wonka and the Chocolate Factory. However, in the book Veruca Salt demands a squirrel that can sort nuts.",
    topics: [Topic.BOOKS, Topic.MOVIES],
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In *Harry Potter*, Hogwarts School of Witchcraft and Wizardry is famously divided into four houses, each named after one of the four founders, and each with an associated animal: Lion for Gryffindor, Badger for Hufflepuff, Raven for Ravenclaw, and Snake for Slytherin.",
    endString: "The animal associated with Ravenclaw is an eagle.",
    topics: [Topic.MOVIES, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In the orginal *Star Trek*, Spock has a faint greenish-yellow hue to create a subtle alien, otherworldly look. While this colour is now iconic enough that you can buy pre-mixed versions of the makeup called L-N#1, the original plan was for Spock be blue.",
    endString:
      "Spock was going to be red, but most people had black & white TVs at the time, which made the red make-up appear to be blackface.",
    topics: [Topic.TV_SHOWS],
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In the series *His Dark Materials*, Lyra Belequa's daemon, Pantalaimon, is an animal companion capable of changing shape and in some ways represents Lyra's soul. In Lyra's world, people's daemons change shape all the time to reflect their mood or personality until the person dies.",
    endString:
      "Most people's daemons only change shape until puberty, and then stay one animal the rest of their life.",
    topics: [Topic.BOOKS, Topic.TV_SHOWS],
  },
  {
    type: QuestionType.UmActually,
    startString:
      "In *The Lord of the Rings* Anduril, which means Flame of the West, was the name of the sword wielded by Elendil during the Last Alliance of Elves and Men. Once broken, Elendil's son Isildur used the broken handle-shard of Anduril to cut the One Ring from Sauron's hand. 3,000 years later, it was reforged and given to Aragorn, son of Arathorn.",
    endString:
      "The sword wasn't called Anduril until it was reforged - before then, it was called Narsil.",
    topics: [Topic.MOVIES, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In *Dune* Shai'hulud, meaning "Old Man of the Desert," is the Fremen nickname for a House Atreides vassal, the grizzled warrior Gurney Halleck.`,
    endString:
      "Shai'hulud is the Fremen word of the massive sand worms that roam the planet.",
    topics: [Topic.MOVIES, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `*Superman*, known originally as Kal-El, was born on the planet of Krypton, which was destroyed in a terrible cataclysm. Although the exploding planet would not have been able to harm the invulnerable infant Kal-El, the fearsome Zod, General of Krypton certainly would have.`,
    endString:
      "Infant Kal-El would have been vulnerable to Krypton explosion because his powers come from the Earth's yellow sun.",
    topics: [Topic.MOVIES, Topic.COMICS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In *Mad Max: Fury Road*, Imperator Furiosa abandons and betrays her leader Immortan Joe to liberate his captive wives and bring them to safety. Immortan Joe promises his War Boys an eternity in Elysium, shiny and chrome, if they can recapture his wives, including Toast the Knowing and Cheeto the Fragile.`,
    endString:
      "War boys are promised an eternity in Valhalla, the Norse afterlife. Elysium is the Roman afterlife.",
    topics: [Topic.MOVIES],
  },
  {
    type: QuestionType.UmActually,
    startString: `In *The Lord of the Rings* Denethor, King of Gondor, is the father of both Faramir and Boromir, one of which dies above the Rauros Falls defending Merry and Pippin, the other grievously injured in the battle of Osgiliath.`,
    endString:
      "Denethor is not the king of Gondor, he is the steward. His appointment will be over when Aragorn, the King, returns.",
    topics: [Topic.MOVIES, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In Buffy the Vampire Slayer Willow, played by Alyson Hannigan, and Oz, played by Seth Green, play a witch and a warlock involved in a long-term relationship. The relationship ultimately ends when Oz leaves Sunnydale after Oz is forced to kill another woman to protect Willow.`,
    endString: "Oz is a werewolf, not a warlock.",
    topics: [Topic.TV_SHOWS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In *Harry Potter and The Chamber of Secrets*, the basilisk Nagini is killed when Harry pierces it's skull with the Sword of Gryffindor, pulled from the sorting hat itself.`,
    endString:
      "Nagini is Voldemort's pet snake, not the basilisk in the Chamber of Secrets.",
    topics: [Topic.MOVIES, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In *Firefly*, Captain Malcolm Reynolds and the crew of the Serenity have plenty to worry about. Criminals, outlaws, and former rebels man the ship, putting them on the wrong side of the Alliance, and the backwater planets they travel through put them often in the path of the Reavers; a deadly race of alien marauders that torture and devour their prey.`,
    endString: "Reavers aren't aliens, they are mutated humans.",
    topics: [Topic.TV_SHOWS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In *Star Wars*, As a powerful Sith Lord, Darth Vader can harness power of the dark side of the Force to conjure Force Lightning, and use the power of the Force for evil means like when he uses telekinesis to choke adversaries.`,
    endString:
      "Darth Vadar can't use Force Lightning because he has mechanical limbs.",
    topics: [Topic.MOVIES],
  },
  {
    type: QuestionType.UmActually,
    startString: `In *Mortal Kombat*, characters can perform "Animalities" as a finisher, in which the character temporarily transforms into an animal and dispatches their opponent. For example, Nightwolf transforms into a wolf, Scorpion transforms into a scorpion, and Johnny Cage transforms into a kangaroo.`,
    endString: "Scorpion actually transforms into a penguin.",
    topics: [Topic.VIDEO_GAMES],
  },
  {
    type: QuestionType.UmActually,
    startString: `In the extended *Pokémon* universe, Officer Jenny and Nurse Joy appear to exist and work in every town, though it is acknowledged that neither is a single entity, but rather multiple identical clones.`,
    endString:
      "They aren't clones, they're all family members of the Jenny and Joy families respectively.",
    topics: [Topic.VIDEO_GAMES, Topic.TV_SHOWS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In *Harry Potter*, the position of Defense Against the Dark Arts Teacher at Hogwarts seems to be a cursed one. Of the seven professors that taught in that position during the seven years of the books, all of them, including Quirinus Quirrell, Gilderoy Lockhart, Remus Lupin, Alastor 'Mad-Eye' Moody, Dolores Umbridge, Severus Snape, and Amycus Carrow, served only one year.`,
    endString:
      "Mad-Eye Moody never taught - it was Barty Crouch Jr. using Polyjuice potion to impersonate him.",
    topics: [Topic.MOVIES, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `The Infinity Stones are featured in multiple *Marvel* movies. The Space Stone was housed within the Tesseract, the Time Stone resided in the Eye of Agamemnon, the Reality Stone was hidden away from the Dark Elves, the Mind Stone rested in Loki's Scepter, the Power Stone was contained in an orb on the planet Morag and the Soul Stone was kept on Vormir.`,
    endString:
      "The Time Stone was in the Eye of Agamotto - Agamemnon was an ancient Greek king.",
    topics: [Topic.MOVIES, Topic.COMICS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In *Game of Thrones*, Westeros has a tradition of naming children born out of wedlock based on the location of their birth - Flowers in the Reach, Hill in the Westerlands, Stone in the Vale, Storm in the Stormlands, Rivers in the Riverlands, Waters in the Crownlands, Salt in the Iron Islands, Snow in the north and Sand in Dorne.`,
    endString: "The name given to bastards in the Iron Islands is Pyke.",
    topics: [Topic.TV_SHOWS, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `Mutations in the *X-Men* universe often bring incredible supernatural abilities, but it can also bring seemingly unrelated physical changes as well. Kurt Wagner received his ability to teleport, but also got fangs and a tail. Mystique, while she can change form at will, is in her natural form scaly and blue. Hank McCoy's mutation gave him super intelligence and beast-like strength and agility, but also a beast-like physicality.`,
    endString: "Hank's intelligence is not a mutation - he's just super smart!",
    topics: [Topic.MOVIES, Topic.COMICS],
  },
  {
    type: QuestionType.UmActually,
    startString: `Superheroes and supervillains often choose aliases that are descriptive of their special powers, but some are maybe a little too obvious, like Matter Eater Lad, who can eat any kind of matter, Arm Fall Off Boy, whose arm falls off, Eye-Scream, whose eyes scream magic spells, and Dog Welder, who welds dogs to people.`,
    endString:
      "Eye-Scream's power is to be able to turn into any flavour of ice cream that he wants.",
    topics: [Topic.COMICS],
  },
  {
    type: QuestionType.UmActually,
    startString: `*Black Panther*, the superheroic alter ego of Prince T'Challa, makes his first appearance in the Marvel Cinematic Universe in Captain America: Civil War. His solo film, shot domestically in Atlanta, Georgia and internationally in Argentina, Wakanda, and South Korea, stars Chadwick Boseman reprising the titular role.`,
    endString: "Wakanda isn't a real place.",
    topics: [Topic.MOVIES, Topic.COMICS],
  },
  {
    type: QuestionType.UmActually,
    startString: `The Hippogriff Buckbeak is saved in *Harry Potter and the Prisoner of Azkaban* when Harry & Hermione steal a time-turner from Dumbledore's office.`,
    endString:
      "They don't steal the time-turner, Hermione has special permission to use one so that she can take extra classes.",
    topics: [Topic.MOVIES, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `With the exception of several featured hobbits such as Rosie Cotton, women are few and far between in *The Lord of the Rings* trilogy. From the missing Entwives to the dwarf women hidden away under mountains, only three named female characters feature prominently in the film trilogy: Galadriel, Arwen, and Eowyn.`,
    endString: "Shelob, the massive spider in Return of the King, is female.",
    topics: [Topic.MOVIES, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In the *Pokémon* TV show, most Pokémon communicate by saying their name over and over, but there are some exceptions. At least one Meowth can speak like a human, Charizard never says his name, and Mr. Mime doesn't make any sound at all.`,
    endString: "Mr Mime does say his name.",
    topics: [Topic.TV_SHOWS, Topic.VIDEO_GAMES],
  },
  {
    type: QuestionType.UmActually,
    startString: `The BBC series *Doctor Who* depicts the adventures of a time-traveling humanoid alien (a Time Lord) named Doctor Who, who explores the universe in a ship that looks like a blue British police box.`,
    endString:
      "The character's name is not Doctor Who - he goes by The Doctor, but his true name is unknown.",
    topics: [Topic.TV_SHOWS],
  },
  {
    type: QuestionType.UmActually,
    startString: `The direwolves of the Stark children do not fare well in the *Game of Thrones* TV show. Only Nymeria still lives, while Lady, Greywind, Ghost, Summer, and Shaggydog have all been brutally killed on screen.`,
    endString: "Ghost is still alive.",
    topics: [Topic.TV_SHOWS, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In the *"Harry Potter* series the caretaker of Hogwarts, Argus Filch, is a non-magical person from a wizarding family, also known as a muggle.`,
    endString:
      "The term for a non-magical person from a wizarding family is a squib, which Filch is.",
    topics: [Topic.MOVIES, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In *Game of Thrones*, House Lannister of Casterly Rock is a wealthy family known by their house words, "A Lannister always pays his debts," and also by their sigil, a golden lion on a crimson field.`,
    endString: `The official words of House Lannister are "Hear me roar."`,
    topics: [Topic.TV_SHOWS, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `Syndrome, the villainous alter ego of Buddy Pine in *The Incredibles*, meets his untimely demise at the hands, or rather claws, of his own Omnidroid, which targets him and his remote control as a threat during the staged "fight" in the city of Metroville.`,
    endString: `Syndrome is actually killed by a jet engine that catches him by his cape.`,
    topics: [Topic.MOVIES],
  },
  {
    type: QuestionType.UmActually,
    startString: `In *The Lord of the Rings*, Frodo ultimately comes to hold the powerful One Ring when his grandfather, Bilbo Baggins, leaves it for him on the mantle.`,
    endString: `Bilbo and Frodo are cousins.`,
    topics: [Topic.MOVIES, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `Tom Holland stars as the friendly neighborhood webslinger in *Spider-Man: Homecoming*, a fresh take on Spider-Man's origin story, featuring Michael Keaton as the villainous Vulture.`,
    endString: `Spider-Man: Homecoming is not an origin story - it picks up after he has already had his powers for a while.`,
    topics: [Topic.MOVIES, Topic.COMICS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In *Raiders of the Lost Ark*, Indy discovers his former lover Marion Ravenwood in Nepal. She agrees to sell Indy the headpiece of the Staff of Ra for $3000, but not before the Nazis are able to photograph it, allowing them to construct their own version.`,
    endString: `The nazis don't photograph the headpiece of the staff - it is burned into the hand of the head Gestapo agent.`,
    topics: [Topic.MOVIES],
  },
  {
    type: QuestionType.UmActually,
    startString: `One of the more popular subgenres of anime and manga centers on a scenario in which multiple pilots assemble a giant mecha robot out of smaller sub-robots. This trope can be seen in cartoons such as Voltron, live-action TV shows such as Power Rangers, and movies such as Pacific Rim.`,
    endString: `In Pacific Rim, the robots are not comprised of smaller robots.`,
    topics: [Topic.TV_SHOWS, Topic.MOVIES],
  },
  {
    type: QuestionType.UmActually,
    startString: `Frodo, the titular character of the *Lord of the Rings* trilogy, offers to take the One Ring to Mount Doom, also know as Orodruin.`,
    endString: `Frodo is not the titular character - the Lord of the Rings is Sauron.`,
    topics: [Topic.MOVIES, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `Emilia Clarke's *Game of Thrones* character Daenerys announces herself to Khal Moro as Daenerys Stormborn of the House Targaryen, the First of Her Name, the Unburnt, Unbowed, and Unsullied, Queen of Meereen, Queen of the Andals, the Rhoynar and the First Men, Khalessi of the Great Grass Sea, Breaker of Chains and Mother of Dragons.`,
    endString: `Unsullied is not part of her title.`,
    topics: [Topic.TV_SHOWS, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In *Harry Potter*, Moony, Wormtail, Padfoot and Prongs are the aliases of the Marauders, a group of four Animagi who attended Hogwarts as members of House Gryffindor years prior to the birth of Harry Potter.`,
    endString: `Moony (AKA Remus Lupin) is not an animagus, he is a werewolf.`,
    topics: [Topic.MOVIES, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In *The Hobbit*, Bilbo and his dwarf companions escape from a group of fearsome trolls named Tom, Bert and William when Gandalf appears at the last minute and turns them all to stone.`,
    endString: `The sun turns them to stone, not Gandalf.`,
    topics: [Topic.MOVIES, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `Ryan Coogler's *Black Panther* takes us to Wakanda, where for the first time in the Marvel Cinematic Universe we will meet the Dora Milaje, a team of elite women bodyguards who protect the monarch of Wakanda.`,
    endString: `We actually meet the Dora Milaje for the first time in Civil War, after T'Challa's father, King T'Chaka, is killed in an explosion.`,
    topics: [Topic.MOVIES],
  },
  {
    type: QuestionType.UmActually,
    startString: `In Jules Verne's novel *20,000 Leagues Under the Sea: a Tour of the Underwater World*, readers meet Captain Nemo, who lives a secretive life twenty thousand leagues beneath sea level in his advanced submarine: the Nautilus.`,
    endString: `20,000 leagues refers to how far they travel underwater, not how deep they are. 20,000 leagues is 96,560km, more than seven times the diameter of the earth.`,
    topics: [Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `While most people know that kryptonite is *Superman's* biggest weakness, not as many people know that kyptonite comes in many different colors, with varying effects: classic green kryptonite weakens Superman, pink makes him permanantly lose his superpowers, and periwinkle caises him to lose his inhibitions.`,
    endString: `Pink kryptonite does not cause Superman to lose his powers, pink kryptonite causes Superman to become gay.`,
    topics: [Topic.COMICS],
  },
  {
    type: QuestionType.UmActually,
    startString: `The Planet Express employees that we meet in *Futurama's* first season appear to be a ragtag group of aliens and weirdos, but despite their differences, only Doctor John Zoidberg is from a different planet.`,
    endString: `Amy Wong is from Mars.`,
    topics: [Topic.TV_SHOWS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In the novel *American Gods* by Neil Gaiman, the god Odin has two ravens, Huginn and Muninn (or thought and memory). When the protagonist, Shadow, finds himself alone with one of these ravens for the first time, it charmingly says to him, "nevermore," as a reference to the Edgar Allen Poe poem "The Raven".`,
    endString: `Shadow tries to get the raven to say 'Nevermore', but instead it says 'Fuck you'.`,
    topics: [Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In *Game of Thrones'* Westeros, Valyrian steel swords are particularly prized: they are exceptionally sharp, never need honing, and the technique to make Valyrian steel was lost when Doom befell Valyria. Jon Snow acquires the Valyrian steel sword Ice when he is gifted it by Jeor Mormont.`,
    endString: `Ice was Ned Stark's sword, which was melted down by the Lannisters. Jon Snow's sword is Long Claw.`,
    topics: [Topic.TV_SHOWS, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In *Monty Python and the Holy Grail*, a narrator reading the book of the film informs us of the four other knights that join Arthur on his quest: Sir Bedevere the Wise, Sir Lancelot the Brave, Sir Galahad the Pure and Sir Robin the Not-Quite-So-Brave-as-Sir-Lancelot.`,
    endString: `There is another, fifth knight listed, Sir Not-Appearing-In-This-Film.`,
    topics: [Topic.MOVIES],
  },
  {
    type: QuestionType.UmActually,
    startString: `The *X-Men's* Cyclops is often recognized by his iconic ruby-quartz visor. Without his visor or come other means of inhibiting his abilities, when Cyclops opens his eyes they become apertures to another dimension, causing focused radiation to pour into our world in the form of powerful but difficult-to-control eye-lasers.`,
    endString: `It is a concussive optic blast, not lasers. Technically, Cyclops' eyes are portals to another dimension of pure kinetic energy.`,
    topics: [Topic.MOVIES, Topic.COMICS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In addition to housing seven year's worth of students, *Harry Potter's* Hogwarts is the home of several ghosts, including Nearly Headless Nick, Peeves, Moaning Myrtle, the Grey Lady, and the Fat Friar.`,
    endString: `Peeves is a poltergeist, not a ghost.`,
    topics: [Topic.MOVIES, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `Hobbits have a famous love of food. When they can get it, a hobbit's daily meals consist of breakfast, second breakfast, luncheon, afternoon tea, dinner and supper.`,
    endString: `Elevenses should also be included in that list.`,
    topics: [Topic.MOVIES, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `The entirety of the series *A Song of Ice and Fire* is filled with brutal, awful deaths. Among the worst is catching "greyscale," a highly contagious disease that slowly and painfully turns you into stone.`,
    endString: `Greyscale just makes your skin hard and cracked, not actual stone.`,
    topics: [Topic.BOOKS, Topic.TV_SHOWS],
  },
  {
    type: QuestionType.UmActually,
    startString: `Despite commercial success, Ang Lee's film *Hulk* was about 5 years too early to be a part of the Marvel Cinematic Universe, and so Eric Bana only played Bruce Banner for the one film. Instead, Mark Ruffalo got to take over the mantle from Eric Bana of the iconic character with the creation of the MCU.`,
    endString: `Edward Norton was the Hulk after Eric Bana in "The Incredible Hulk" in 2008.`,
    topics: [Topic.MOVIES, Topic.COMICS],
  },
  {
    type: QuestionType.UmActually,
    startString: `Every *Pokémon* is classified as at least one of eighteen types, one of the rarest of which is the "dragon" type. Weak against ice attacks and other dragon attacks, this type includes Dragonite, Salamence, and Charizard.`,
    endString: `Charizard is a fire type, not a dragon type.`,
    topics: [Topic.VIDEO_GAMES, Topic.TV_SHOWS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In the *Witcher* series Ciri, aka The Lady of Time and Space, has inherited her mother Yennefer's eyes and talent for magic, and her father Geralt's sword skills and silver hair.`,
    endString: `Ciri is adopted, not Geralt and Yennefer's biological daughter, so she didn't 'inherit' anything from them.`,
    topics: [Topic.TV_SHOWS, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `*The Matrix Reloaded* introduces audiences to the Merovingian, a very old program living in the Matrix, who takes the form of a smug, French man who surrounds himself with opulence. To explain his core philosophy of "causality," the Merovingian butchers and cooks a chicken while he talks with Neo, Morpheus, and Trinity.`,
    endString: `The Merovingian demonstrates his philosophy of causality by serving a beautiful woman a cake that makes her orgasm.`,
    topics: [Topic.MOVIES],
  },
  {
    type: QuestionType.UmActually,
    startString: `Titles are hard, and sometimes they need to remain secret.  That combination can lead to some truly bizarre working titles.  "Halo" had the working title of "Monkey Nuts," "Crash Bandicoot" was internally called "Sonic's Ass Game," and "Doom" was called "Bang Bang Splat".`,
    endString: `Doom's working title was "Attack of the Attackers".`,
    topics: [Topic.VIDEO_GAMES],
  },
  {
    type: QuestionType.UmActually,
    startString: `In the poem *Jabberwocky* by Lewis Carroll we learn of fearsome creatures like the Jubjub beast, the bandersnatch and the titular Jabberwock. Yet despite its purported ferocity, someone beheads it with a simple swish-swash of his vorpal sword.`,
    endString: `The sound the vorpal sword makes is 'snicker-snack'.`,
    topics: [Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In *The Lord of the Rings*, Frodo first gains possession of The One Ring during Bilbo Baggins 100th birthday, where Bilbo announced he would be leaving the Shire.`,
    endString: `It was Bilbo's eleventy-first (111th) birthday).`,
    topics: [Topic.BOOKS, Topic.MOVIES],
  },
  {
    type: QuestionType.UmActually,
    startString: `One of the strangest and most memorable monsters in *Dungeons & Dragons* is the gelatinous sphere: a mindless, transparent, ball of gelatinous ooze that absorbs and digests everything in its path.`,
    endString: `The gelatinous sphere is not a monster, but the gelatinous cube is.`,
    topics: [Topic.BOARD_GAMES],
  },
  {
    type: QuestionType.UmActually,
    startString: `*The Hunger Games* takes place in a post-apocalyptic version of North America, now called "Panem" as a simplification of "Pan America.`,
    endString: `Panem isn't an abbreviation for Pan America. Panem comes from "panem et circenses," a Latin phrase meaning "bread and circuses".`,
    topics: [Topic.BOOKS, Topic.MOVIES],
  },
  {
    type: QuestionType.UmActually,
    startString: `*Comic books* have the difficult challenge of conveying sound with words, a particularly difficult feat when depicting sounds of fictional actions and devices.  This has led to some iconic onomatopoeia including SNIKT, the sound of Wolverine's claws, FOOF, the sound of Nightcrawler teleporting, and THWIP the sound of Spider-Man's webbing.`,
    endString: `The onomatopoeia of Nightcrawler teleporting is BAMF.`,
    topics: [Topic.COMICS],
  },
  {
    type: QuestionType.UmActually,
    startString: `A recurring feature of alien invasion stories is the discovery of a mundane weakness of otherwise invincible aliens.  In the "Animorphs" series, Yeerks are driven insane with addiction if exposed to instant maple and ginger oatmeal, the aliens in "Evolution" are weak to the song 'Indian Love Call' by Slim Whitman, and the aliens in "Signs" are destroyed when they come into contact with water.`,
    endString: `The aliens in Evolution are killed by the selenium content of Head and Shoulders shampoo.`,
    topics: [Topic.BOOKS, Topic.MOVIES],
  },
  {
    type: QuestionType.UmActually,
    startString: `Stanley Kubrick's *2001: A Space Odyssey*, based on the Arthur C. Clarke novel of the same name, takes place largely on Discovery One, a spacecraft controlled almost entirely by the computer HAL 9000.`,
    endString: `Arthur C. Clarke and Stanley Kubrick worked on the novel and film at the same time, consulting with each other, so neither is technically based on the other.`,
    topics: [Topic.MOVIES, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In the 1954 movie *Godzilla*, we are first introduced to the creature of the same name: an enormous, fire-breathing, amphibious lizard-like monster that emerges from the sea.`,
    endString: `Godzilla breathes an atomically charged nuclear power heat ray, not fire.`,
    topics: [Topic.MOVIES],
  },
  {
    type: QuestionType.UmActually,
    startString: `In *Monty Python and the Holy Grail*, The Knights Who Say "Ni!" refuse to let Arthur and his knights pass unless they obtain a shrubbery.  After obtaining the shrubbery, the Knights Who Say "Ni!" demand he find a second shrubbery to be placed next to but slightly higher than the first, and to then cut down the mightiest tree in the forest with a herring.`,
    endString: `When Arthur returns with the shrubbery, they are no longer The Knights Who Say "Ni!", they have become The Knights Who Say "Ekki-Ekki-Ekki-Ekki-PTANG Zoom-Boing Z'nourrwringmm".`,
    topics: [Topic.MOVIES],
  },
  {
    type: QuestionType.UmActually,
    startString: `Stephen King's *The Dark Tower* series is a sprawling epic that links together many of his previously unrelated books. In the sixth book, "Song of Susannah," Roland and Eddie visit The Overlook Hotel from "The Shining" in hopes of finding the psychic Danny.`,
    endString: `They do not visit The Overlook Hotel to find Danny, they go to find the author Stephen King himself at his home".`,
    topics: [Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `One of the tales in *A Thousand and One Arabian Nights* is the story of "Aladdin and the Magic Lamp."  In the story, a sorcerer traps Aladdin in a magic cave, but Aladdin manages to escape by finding a magic lamp and cleverly tricking the genie inside.`,
    endString: `In the original story Aladdin escapes using a second, slightly weaker genie that was in a ring he already had.`,
    topics: [Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `"Shaun of the Dead", "Hot Fuzz", and "The World's End" make up Edgar Wright's *Three Flavors Cornetto Trilogy*. The movies aren't connected by plot but all focus on a friendship between characters played by Simon Pegg and Nick Frost set against the backdrop of a supernatural horror story.`,
    endString: `Hot Fuzz is not supernatural. Shaun of the Dead features zombies, and The World's End features aliens.`,
    topics: [Topic.MOVIES],
  },
  {
    type: QuestionType.UmActually,
    startString: `March 2019 saw the release of the MCU movie "Captain Marvel" and the DCEU movie, "Shazam!" Although the alien hero Shazam is now just called 'Shazam,' in the comics he was originally called Captain Marvel.`,
    endString: `Shazam isn't an alien, he's human.`,
    topics: [Topic.MOVIES, Topic.COMICS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In *Community*, The MeowMeowBeenz app allows people to rank each other on a scale of one to five MeowMeowBeenz. A dystopian social caste system forms at Greendale Community College based on the rating system, with "The Fives" - made up of Shirley, Koogler, Abed, and Prof. Hickey - serving as a kind of ruling council.`,
    endString: `Chang is also one of the Fives.`,
    topics: [Topic.TV_SHOWS],
  },
  {
    type: QuestionType.UmActually,
    startString: `The *Norse pantheon* is full of familiar figures like Odin and his sons Thor and Loki. But there are many obscure deities, too. Forseti is a god who peacefully settled disputes between men, Sol is the goddess of the sun, Mani is the god of the moon, and Hodr is a warrior god typically depicted as blind.`,
    endString: `In Norse mythology, Loki is not Odin's son, he's Odin's brother.`,
    topics: [Topic.MYTHOLOGY],
  },
  {
    type: QuestionType.UmActually,
    startString: `One of the earliest attempts to adapt *The Lord of the Rings* to the screen was by The Beatles. It was to feature original songs by The Beatles, with Paul McCartney as Frodo, Ringo Starr as Sam, George Harrison as Gandalf, and John Lennon as Aragorn. The project was cancelled because Tolkien did not like The Beatles' music.`,
    endString: `John Lennon was not going to play Aragorn, he was going to be Gollum.`,
    topics: [Topic.MOVIES, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `Water. Earth. Fire. Air. These are the four types of bending featured in the *Avatar* universe. However, there is a fifth type: Energybending, which is older than all the other forms and can be used to strip a bender of their magical abilities. Taught to Avatar Aang by an ancient lion turtle, the only known Energybenders are Aang, Amon, and Korra.`,
    endString: `Amon used bloodbending (a sub-set of waterbending) to strip benders of their abilities, not energybending.`,
    topics: [Topic.TV_SHOWS],
  },
  {
    type: QuestionType.UmActually,
    startString: `Janet, the robotic assistant in *The Good Place,* is arguably one of the most powerful beings on the show. She can be instantly summoned by saying "Hey, Janet".`,
    endString: `Janet isn't a robot.`,
    topics: [Topic.TV_SHOWS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In *The Lord of the Rings*, the gigantic, sentient tree people known as Ents are capable of reproduction but are dying off because the only remaining Ents are all male. The Entwives were destroyed by Sauron, his forces massacring them in front of the male Ents to ensure they would not rise against him.`,
    endString: `The Entwives were not destroyed by Sauron, they just left and the male Ents can't find them.`,
    topics: [Topic.MOVIES, Topic.BOOKS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In the *F.R.I.E.N.D.S* episode "The One Where Ross Got High", Rachel makes a Thanksgiving trifle whose layers are comprised of lady fingers, jam, custard, raspberries, more ladyfingers, beef sautéed with peas and onions, more custard, bananas, and whipped cream. The other Thanksgiving guests all find ways to avoid eating it, except Ross, who shoves Rachel's helping into his own mouth to prevent her from tasting it and realizing what a bad job she'd done.`,
    endString: `Joey enjoys eating the Thanksgiving trifle. He says, "What's not to like? Custard, good. Jam, good. Meat, good."`,
    topics: [Topic.TV_SHOWS],
  },
  {
    type: QuestionType.UmActually,
    startString: `In *Scott Pilgrim vs The World*, Scott, the 23-year-old bassist for the band Sex Bob-omb, develops a crush on a "ninja delivery girl" for Amazon.com named Ramona Flowers. But in order to date Ramona, Scott must first defeat her "League of Evil Exes," a supervillain-esque group of six ex-boyfriends and one ex-girlfriend.`,
    endString: `Ramona delivers for amazon.ca, as the story takes place in Canada.`,
    topics: [Topic.MOVIES, Topic.COMICS],
  },
  {
    type: QuestionType.UmActually,
    startString: `It may not have won the Tony for Best Musical, but original Broadway hit *Grease* was loaded with catchy songs: "Summer Nights," "Grease," and "Hopelessly Devoted to You" all become top-10 Billboard hits. And "You're the One That I Want" is one of the top 10 best selling singles of all time.`,
    endString: `None of those songs except 'Summer Nights' were in the original Broadway production of Grease.`,
    topics: [Topic.STAGE_PRODUCTIONS, Topic.MOVIES],
  },
  {
    type: QuestionType.UmActually,
    startString: `When we first meet Mike and his friends in *Stranger Things*, they're playing a game of "Dungeons & Dragons". The kids name some of their major foes, such as Demogorgon, Mind Flayer and Vecna, after iconic D&D monsters because they look similar.`,
    endString: `Demogorgon, Mind Flayer and Vecna in Stranger things look nothing like their D&D counterparts.`,
    topics: [Topic.TV_SHOWS, Topic.BOARD_GAMES],
  },
  {
    type: QuestionType.UmActually,
    startString: `Orks in *Warhammer 40k* only bear a passing resemblance to those in Tolkien's work. Orks, or "Greenskins" as they're often called, are brilliant engineers capable of spaceflight who worship their own gods Gork and Mork. They also reproduce asexually through spores, similar to a fungus.`,
    endString: `Orks are not brilliant engineers. Instead, they manifest a collective psychic field, known as WAAAGH, which allows them to get technology to work through sheer force of will. An example of this at work is that their vehicles will go faster if they are painted red.`,
    topics: [Topic.BOARD_GAMES],
  },
  {
    type: QuestionType.UmActually,
    startString: `In the international release of *The Winter Soldier*, we see that Steve Rogers has a list of things he missed while in cryo-sleep that he'd like to catch up on. Here is that list: I Love Lucy, Moon Landing, Berlin Wall (Up + Down), Steve Jobs (Apple), Pisco, Thai Food, Star Wars/Trek, Nirvana (Band), Rocky (Rocky II?), and Troubleman (Soundtrack).`,
    endString: `The list was different in every country of release, such as in the UK the Beatles and the World Cup were added, and in Japan it includes Dance Dance Revolution and "Oldboy".`,
    topics: [Topic.MOVIES, Topic.COMICS],
  },
  {
    type: QuestionType.UmActually,
    startString: `*Avengers: Infinity War* introduces Cull Obsidian: the large hammer-wielding member of the Black Order, aka "The Children of Thanos." In the comics, Cull Obsidian is another name for the Black Order itself, and the character's name is Black Dwarf - who usually wields an axe. While in the movie he is slain when Wong sends him through a portal to Antarctica and slices off his hand, in the comics he is killed by Ronan the Accuser.`,
    endString: `In the movie Cull Obsidian s killed in the final battle by Bruce Banner, piloting the Hulk Buster armor.`,
    topics: [Topic.MOVIES, Topic.COMICS],
  },
];
