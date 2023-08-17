import React from "react";
import { ISale } from "../Context/DataContext";
import { NavLink } from "react-router-dom";

const SaleItem = ({ venda }: { venda: ISale }) => {
  return (
    <div className="sale box">
      <NavLink to={`/vendas/${venda.id}`} style={{ fontFamily: "monospace" }}>
        {venda.id}
      </NavLink>
      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
    </div>
  );
};

export default SaleItem;
