type inputValue = string | number;

const Box = <T extends inputValue>({
  label,
  value,
  onChange,
}: {
  label: string;
  value: T;
  onChange: () => void;
}) => {
  return (
    <div>
      <form>
        <label>{label}</label>
        <input type="text" value={value} onChange={onChange} />
      </form>
    </div>
  );
};

export default Box;
