import { useState } from "react";
import "./App.css";
import Form from "./Form";
import Depense from "./Depense";

function App() {
  const [allDepense, setAllDepense] = useState([]);

  const [oneDepense, setOneDepense] = useState({
    description: "",
    price: "",
    date: "",
    timestamp: Date.now(),
  });

  const handleSubmitDepense = (e) => {
    e.preventDefault();
    console.log(oneDepense);
    setAllDepense([...allDepense, oneDepense]);
    setOneDepense({
      description: "",
      price: "",
      date: "",
      timestamp: Date.now(),
    });
  };

  function suppDepense(param) {
    setAllDepense(allDepense.filter((article) => article.timestamp !== param));
  }
  return (
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded py-8">
      <h1 className="font-bold text-4xl mb-8">Suivi des Dépenses</h1>
      <Form
        handleSubmitDepense={handleSubmitDepense}
        allDepense={allDepense}
        oneDepense={oneDepense}
        setOneDepense={setOneDepense}
      />
      {allDepense.length >= 1 ? (
        allDepense.map((article, index) => (
          <Depense article={article} key={index} suppDepense={suppDepense} />
        ))
      ) : (
        <h3 className="text-gray-500">Aucune dépense à afficher.</h3>
      )}
    </div>
  );
}

export default App;
