import { compose, map, reduce, split } from "ramda";

/// используем ramda с заданиями про чистые функции
/// Задание 7 - Напишем compose для поиска имени с наибольшим количеством очков. Вывести нужно только имя!
export type Team = { name: string; score: number };

const getName = (team: Team) => team.name;
const reducer = (teams: Team[]) => {
  return teams.reduce((prev: Team, cur: Team) =>
    prev.score >= cur.score ? prev : cur
  );
};
export const getTopName = compose(getName, reducer);

/// Задание 8 - Напишем compose для создания query string и наоборот - query string -> object
export type QsObj = Record<string, string | number | boolean | object>;
const addQMark = (x: string) => "?" + x;
const joinParams = (params: string[]) => params.join("&");
const mapValToParam = (qsObj: QsObj) =>
  map((key: string) => key + "=" + qsObj[key].toString(), Object.keys(qsObj));

export const createQs = compose(addQMark, joinParams, mapValToParam);

// Задание 9
export const parseQs = compose(
  reduce((acc, cur) => {
    if (cur.indexOf("=") < 0) return acc;
    const [prop = "no prop", value = "no val"] = cur.split("=");
    return { ...acc, [prop]: value };
  }, {} as QsObj),
  split("&"),
  (str: string) => str.substr(1)
);
