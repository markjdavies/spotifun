import { greeting } from "./main";

test("should return hello world", () => {
  expect(greeting("world")).toEqual("Hello world");
});
