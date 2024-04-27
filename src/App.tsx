import { Calculate } from "@/classes/Calculate";
import { NumberInput } from "@/components/number-input";
import { Result } from "@/components/result";

import { useState } from "react";

const Calc = new Calculate();

export default function App() {
  const [resultado, setResultado] = useState<number | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [value, setValue] = useState("");

  return (
    <main className="flex justify-center p-4">
      <form
        className="grid gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (value === "") {
            setErr("El valor es requerido.");
            setResultado(null);
            return;
          }
          const numberValue = Number(value);
          if (isNaN(numberValue)) {
            setErr("El valor de n no es un número.");
            setResultado(null);
            return;
          }
          if (numberValue <= 0) {
            setErr("El valor de n debe ser un número positivo.");
            setResultado(null);
            return;
          }

          if (numberValue % 1 !== 0) {
            setErr("El valor de n debe ser un número entero.");
            setResultado(null);
            return;
          }

          const res = Calc.calculate(numberValue);

          setErr(null);
          setResultado(res);
        }}
      >
        <h1 className="text-2xl text-center">Calculadora</h1>
        <p className="text-center">
          Ésta calculadora está diseñada para resolver la siguiente ecuación
        </p>
        <img src="/image.png" alt="Una ecuación" className="w-[25rem]" />
        <NumberInput value={value} onChange={setValue} hasError={!!err} />
        {resultado !== null && <Result result={resultado} />}
        {!!err && <p className="text-red-500">{err}</p>}
      </form>
    </main>
  );
}
