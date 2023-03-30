import React, { useEffect, useState } from "react";
import { getProdutos } from "../../api/apiProdutos";
import CardProdutos from "./CardProdutos";
import "./Produtos.css";

const Produtos = () => {
const [produtos, setProdutos] = useState([]);
      useEffect(() => {
      async function handleRequisicao() {
      const response = await getProdutos();
      console.log(response)
      setProdutos(response);
    } handleRequisicao();
  
}, []);

  return (
  <div className="pageProdutos  mb-5">
  <h1> Lista de Produtos </h1>

  <div className="cardProdutos">
          {produtos ? produtos.map((item) => (
          <CardProdutos
          img={item.img}
          nome={item.nome}
          cor={item.cor}
          preco={item.preco}/>
))
    : "Opa"}
     </div>
     </div>
);};

export default Produtos;
