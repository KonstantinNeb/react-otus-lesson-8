import { getTopName, Team, QsObj, createQs, parseQs } from "./pureFunctions";

test("get best team", () => {
  const teams: Team[] = [
    { name: "Lions", score: 5 },
    { name: "Tigers", score: 4 },
    { name: "Bears", score: 6 },
    { name: "Monkeys", score: 2 },
  ];
  expect(getTopName(teams)).toBe("Bears");
});

test("No teams", () => {
  const teams: Team[] = [];
  expect(getTopName(teams)).toBe("");
});

test("createQs", () => {
  const qsObj: QsObj = {
    page: "2",
    pageSize: "10",
    total: "205",
    somethingElse: "value",
  };
  expect(createQs(qsObj)).toBe(
    "?page=2&pageSize=10&total=205&somethingElse=value"
  );
});

test("parseQs", () => {
  const qs = "?page=2&pageSize=10&total=205&somethingElse=value";
  expect(parseQs(qs)).toEqual({
    page: "2",
    pageSize: "10",
    total: "205",
    somethingElse: "value",
  });
});

test("parseQsEmpty", () => {
  const qs = "?page=2&pageSize=10&total=205&somethingElse=value";

  expect(parseQs(qs)).toEqual({
    page: "2",
    pageSize: "10",
    total: "205",
    somethingElse: "value",
  });
});
