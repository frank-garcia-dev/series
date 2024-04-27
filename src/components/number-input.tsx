import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NumberInput = ({
  onChange: handleChange,
  value,
  hasError,
}: {
  value: string;
  onChange: (value: string) => void;
  hasError?: boolean;
}) => {
  return (
    <>
      <Input
        type="text"
        value={value}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        placeholder="Ingrese un número"
        aria-invalid={hasError ? "true" : "false"}
        className="aria-[invalid=true]:border-red-500"
      />
      <Button type="submit">Calcular</Button>
    </>
  );
};
