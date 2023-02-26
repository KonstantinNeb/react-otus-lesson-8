/// Получить из A -> B не мутируя оригинальный объект
/// Задание 4 - Поменять объект
export type OriginalTeam = {
  size: number;
  name: string;
  league: string;
};

export type ExpectedTeam = {
  name: string;
  league: string;
  roster: number;
};

export const originalTeamToExpectedTeam = (
  originalTeam: OriginalTeam
): ExpectedTeam => {
  const { size, name, ...rest } = originalTeam;
  return { name: "New York Badgers", roster: 25, ...rest };
};

/// Задание 5 - Поменять массив
type SomeArray = readonly number[] | string[] | number[] | (string | number)[];

export const originalArrayToExpectedArray = (
  originalArray: SomeArray
): SomeArray => {
  const getVal = (v: number | string): number | string => {
    return v === 1 ? "two" : +v + 1;
  };
  return originalArray.map(getVal);
};

/// Задание 6 - Поменять глубокий объект
export type Team = {
  name: string;
  captain: {
    name: string;
    age: number;
  };
};

export const originalTeamToExpectedTeamDeep = (originalTeam: Team): Team => {
  const { name, captain } = originalTeam;
  return { name, captain: { ...captain, age: 28 } };
};
