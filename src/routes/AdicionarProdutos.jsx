import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ListaProdutos } from "../Components/ListaProdutos";

export default function AdicionarProdutos() {
  document.title = "Inserir Produto";

  const navigate = useNavigate();
  
  const [novoProduto, setNovoProduto] = useState({
    nome: "",
    preco: 0,
  });

  const handleChangeProduto = (event) => {
 
    const { name, value } = event.target;

    setNovoProduto({ ...novoProduto, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const novoId = ListaProdutos.length + 1;


    const novoProdutoCompleto = { id: novoId, ...novoProduto };

    ListaProdutos.push(novoProdutoCompleto);

    alert("Produto inserido com sucesso!");

   
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