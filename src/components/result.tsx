interface Props {
  result: number;
}

export const Result = ({ result }: Props) => {
  return (
    <div className="flex flex-col mx-auto gap-2 w-fit">
      <p>Resultado: {result}</p>
    </div>
  );
};
