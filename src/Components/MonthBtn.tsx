import React from "react";

function nameMonth(n: number) {
  const date = new Date();
  date.setMonth(date.getMonth() + n);
  return new Intl.DateTimeFormat("pt-BR", { month: "long" }).format(date);
}

const MonthBtn = ({ n }: { n: number }) => {
  return <button>{nameMonth(n)}</button>;
};

export default MonthBtn;
