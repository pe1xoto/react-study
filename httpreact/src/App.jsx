import { useState, useEffect, use } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";

// 4 - custom hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // 4 - custom hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  //console.log(data);

  const [name, SetName] = useState("");
  const [price, SetPrice] = useState("");

  // 1 - resgatando dados
  //useEffect(() => {
  //  async function fetchData() {
  //    try {
  //      const res = await fetch(url);
  //      const data = await res.json();
  //      setProducts(data);
  //    } catch (error) {
  //      console.error("Erro ao buscar os produtos:", error);
  //    }
  //  }

  //  fetchData();
  //}, []);

  //console.log(products);

  // 2 - add de produtos
  const handleSubmit = async (event) => {
    event.preventDefault();

    const product = {
      name,
      price,
    };

    //console.log(product);

    //const res = await fetch(url, {
    //  method: "POST",
    //  headers: {
    //    "Content-Type": "application/json",
    //  },
    //  body: JSON.stringify(product),
    //});

    // 3- carregamento dinâmico
    //const addProduct = await res.json();

    //setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5 - refatorando post
    httpConfig(product, "POST");

    SetName("");
    SetPrice("");
  };

  // 8 - desafio 6
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  document.body.className = "bg-purple-50 dark:bg-purple-900";

  return (
    <>
      <div className="App p-6 max-w-2xl mx-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Lista de Produtos
        </h1>
        {/* 6 - loading */}
        {loading && <p>Carregando dados...</p>}
        {error && <p>{error}</p>}
        {!error && (
          <ul className="mb-6 space-y-2">
            {items &&
              items.map((product) => (
                <li
                  key={product.id}
                  className="flex items-center p-3 border border-gray-300 dark:border-gray-700 rounded-md"
                >
                  <span className="font-medium flex-1 truncate mr-4">
                    {product.name}
                  </span>
                  <span className="text-green-600 dark:text-green-400 font-semibold w-32 text-right mr-4">
                    R$ {parseFloat(product.price).toFixed(2)}
                  </span>
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-50 whitespace-nowrap"
                  >
                    Excluir
                  </button>
                </li>
              ))}
          </ul>
        )}
        <div className="add-product bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <FloatLabel>
                <input
                  type="text"
                  value={name}
                  name="name"
                  onChange={(e) => SetName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                />
                <label className="block mb-1 font-medium">Nome</label>
              </FloatLabel>
            </div>

            <div>
              <FloatLabel>
                <input
                  type="number"
                  value={price}
                  name="price"
                  onChange={(e) => SetPrice(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                />
                <label className="block mb-1 font-medium">Preço</label>
              </FloatLabel>
            </div>

            {/* 7 - state de loading no post */}
            {loading && (
              <input
                type="submit"
                disabled
                value="Aguarde"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md cursor-pointer font-semibold transition"
              />
            )}
            {!loading && (
              <input
                type="submit"
                value="Criar"
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md cursor-pointer font-semibold transition"
              />
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
