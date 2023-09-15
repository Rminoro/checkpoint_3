import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListaProdutos } from "../Components/ListaProdutos";

export default function InserirProduto() {
  document.title = "Inserir Produto";

  const navigate = useNavigate();

  // Estado para armazenar os dados do novo produto
  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    preco: 0,
  });

  const handleChangeProduto = (event) => {
    // Destructuring
    const { name, value } = event.target;

    // Atualiza o estado do novo produto
    setNovoProduto({ ...novoProduto, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Gere um novo ID para o produto
    const novoId = ListaProdutos.length + 1;

    // Crie um novo produto com o ID gerado e os dados do estado
    const novoProdutoCompleto = { id: novoId, ...novoProduto };

    // Adicione o novo produto à lista de produtos
    ListaProdutos.push(novoProdutoCompleto);

    alert("Produto inserido com sucesso!");

    // Redirecione de volta para a página de produtos
    navigate("/produtos");
  };

  return (
    <>
      <div>
        <h1>Inserir Produto</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <legend>Novo Produto</legend>
              <div>
                <label htmlFor="idNome">Nome:</label>
                <input
                  type="text"
                  name="nome"
                  id="idNome"
                  onChange={handleChangeProduto}
                  value={novoProduto.nome}
                  required
                />
              </div>
              <div>
                <label htmlFor="idPreco">Preço:</label>
                <input
                  type="number"
                  name="preco"
                  id="idPreco"
                  onChange={handleChangeProduto}
                  value={novoProduto.preco}
                  required
                />
              </div>
              <div>
                <button type="submit">INSERIR</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}