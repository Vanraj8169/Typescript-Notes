import { Dispatch, SetStateAction } from "react";

type inputValue = string | number;

const Box = <T extends inputValue>({
  label,
  value,
  setter, 
}: {
  label: string;
  value: T;
  setter: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div>
      <form>
        <label>{label}</label>
        <input
          type="text"
          value={value}
          onChange={(e) => setter(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Box;
