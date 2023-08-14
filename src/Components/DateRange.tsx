import React from "react";
import DateInput from "./DateInput";

const DateRange = () => {
  const [start, setStart] = React.useState("");
  const [end, setEnd] = React.useState("");

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Início"
        value={start}
        onChange={({ target }) => setStart(target.value)}
      />
      {start}
      <DateInput
        label="Final"
        value={end}
        onChange={({ target }) => setEnd(target.value)}
      />
      {end}
    </form>
  );
};

export default DateRange;
