export default class GenericHelper {
  public static randomFromArray(arr: any[]) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  public static replaceTokens(string: string, players: string[]) {
    let usedPlayers: string[] = [];
    const stringWithPlayers = string.replace(/\{player\}/g, () => {
      // Filter out already used players
      const availablePlayers = players.filter((p) => !usedPlayers.includes(p));
      // If all players have been used, reset the usedPlayers array
      if (availablePlayers.length === 0) {
        usedPlayers = [];
        availablePlayers.push(...players);
      }
      // Pick a random player from the available ones
      const chosen =
        availablePlayers[Math.floor(Math.random() * availablePlayers.length)];
      usedPlayers.push(chosen);
      return chosen;
    });
    const stringWithNumbers = stringWithPlayers.replace(/\{number\}/g, () =>
      String(Math.floor(Math.random() * 4) + 2)
    );
    const stringWithGiveOrTake = stringWithNumbers.replace(
      /\{giveortake\}/g,
      () => (Math.random() < 0.5 ? "may nominate" : "must drink")
    );
    return stringWithGiveOrTake;
  }
}
