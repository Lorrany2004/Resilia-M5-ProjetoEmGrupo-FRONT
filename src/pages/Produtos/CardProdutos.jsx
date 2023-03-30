import React from 'react'
import "./CardProdutos.css"

const CardProdutos = ({ nome, cor, preco, img}) => {
    
return(
        <div className='container'>
        <img src={img}/>
        <h2>Produto</h2>
        <p>Nome: {nome}</p>
        <p>Cor: {cor}</p>
        <p>Preco: {preco}</p>
        </div>
)}

export default CardProdutos
