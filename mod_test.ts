import { assert } from "https://deno.land/std/testing/asserts.ts";
import { randomInt } from "./mod.ts";

Deno.test("test randomInt function", async (): Promise<void> => {
  assert(Number(randomInt(10)));
  assert(Number(randomInt(10, 1000)));
});
