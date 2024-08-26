import { Sum } from "../components/Sum";

test("Testing the sum of two values", () => {
  const result = Sum(1, 2);
  //assertion
  expect(result).toBe(3);
});
