import { stringifyParams } from "./stringifyParams";

describe("stringifyParams", () => {
  it("should return an empty object when params is empty", () => {
    const stringified = stringifyParams({});
    expect(stringified).toBe("");
  });

  it("should stringify a params object with a non-array value", () => {
    const params = { first: "hello" };
    const stringified = stringifyParams(params);
    expect(stringified).toBe("first=hello");
  });

  it("should stringify a params object with an array value", () => {
    const params = { first: ["hello", "world"] };
    const stringified = stringifyParams(params);
    expect(stringified).toBe("first=hello%2Cworld");
  });

  it("should stringify a params object with multiple values", () => {
    const params = { first: ["hello", "world"], second: ["hola", "mundo"] };
    const stringified = stringifyParams(params);
    expect(stringified).toBe("first=hello%2Cworld&second=hola%2Cmundo");
  });
});
