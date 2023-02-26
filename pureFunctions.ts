/// Задание 1 - Лучшая команда (наибольшее кол-во очков), выводим имя
export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => {
  return teams.length > 0
    ? teams.reduce((prevVal, currVal) =>
        prevVal.score >= currVal.score ? prevVal : currVal
      ).name
    : "";
};

/// Задание 2 - Querystring из объекта
type ValueType = string | number | boolean | string[] | number[] | boolean[];

export type QsObj = Record<string, ValueType>;

export const createQs = (qsObj: QsObj): string => {
  return (
    "?" +
    Object.keys(qsObj)
      .filter((key) => qsObj[key])
      .map((key) => key + "=" + qsObj[key])
      .join("&")
  );
};

/// Задание 3 - Объект из querystring

export const parseQs = (qs: string): QsObj => {
  return qs
    .substr(1)
    .split("&")
    .reduce((arr, cur) => {
      const [prop, value] = cur.split("=");
      return { ...arr, [prop]: value };
    }, {});
};
