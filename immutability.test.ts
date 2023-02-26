import {
  originalTeamToExpectedTeam,
  originalArrayToExpectedArray,
  originalTeamToExpectedTeamDeep,
} from "./immutability";

import { OriginalTeam, ExpectedTeam } from "./immutability";
test("dummy test", () => undefined);
// Задание 4
test("team to team", () => {
  const originalTeam: OriginalTeam = Object.freeze({
    size: 15,
    name: "Tampa Bay Roosters",
    league: "Minor",
  });
  const expectedTeam: ExpectedTeam = {
    name: "New York Badgers",
    league: "Minor",
    roster: 25,
  };
  expect(originalTeamToExpectedTeam(originalTeam)).toStrictEqual(expectedTeam);
});

// Задание 5
test("array to array", () => {
  const originalArray = Object.freeze([1, 2, 3, 4]);
  const expectedArray = ["two", 3, 4, 5];
  expect(originalArrayToExpectedArray(originalArray)).toStrictEqual(
    expectedArray
  );
});

// Задание 6
test("team to team deep", () => {
  const originalTeam = Object.freeze({
    name: "Tampa Bay Roosters",
    captain: {
      name: "Bryan Downey",
      age: 27,
    },
  });
  const expectedTeam = {
    name: "Tampa Bay Roosters",
    captain: {
      name: "Bryan Downey",
      age: 28,
    },
  };
  expect(originalTeamToExpectedTeamDeep(originalTeam)).toEqual(expectedTeam);
});
