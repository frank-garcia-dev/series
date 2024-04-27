import { NumberInput } from "@/components/number-input";
import { expect, test } from "vitest";

test("Should render correctly on change", () => {
  expect(NumberInput({ onChange: () => {}, value: "5" }))
    .toMatchInlineSnapshot(`
    <React.Fragment>
      <Input
        aria-invalid="false"
        className="aria-[invalid=true]:border-red-500"
        onChange={[Function]}
        placeholder="Ingrese un número"
        type="text"
        value="5"
      />
      <Button
        type="submit"
      >
        Calcular
      </Button>
    </React.Fragment>
  `);
  expect(NumberInput({ onChange: () => {}, value: "7" }))
    .toMatchInlineSnapshot(`
    <React.Fragment>
      <Input
        aria-invalid="false"
        className="aria-[invalid=true]:border-red-500"
        onChange={[Function]}
        placeholder="Ingrese un número"
        type="text"
        value="7"
      />
      <Button
        type="submit"
      >
        Calcular
      </Button>
    </React.Fragment>
  `);
});
