import { Result } from "@/components/result";
import { expect, test } from "vitest";

test("Should return the result of the formula", () => {
  expect(Result({ result: 5 })).toMatchInlineSnapshot(`
    <div
      className="flex flex-col mx-auto gap-2 w-fit"
    >
      <p>
        Resultado: 
        5
      </p>
    </div>
  `);
});
