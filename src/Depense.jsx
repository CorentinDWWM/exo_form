import React from "react";

export default function Depense({ article, suppDepense }) {
  return (
    <div className="flex justify-between max-w-2xl mx-auto p-4 bg-gray-100 rounded py-8 border border-gray-300 mt-6 gap-3 flex-wrap">
      <div className="text-left">
        <h3 className="font-bold text-2xl text-blue-500">
          {article.description}
        </h3>
        <p>Montant: {article.price} €</p>
        <p>Date: {article.date}</p>
      </div>
      <div className="flex justify-between items-center gap-2">
        <button className="bg-green-500 h-fit px-3 py-2 rounded cursor-pointer">
          Modifier
        </button>
        <button
          onClick={() => suppDepense(article.timestamp)}
          className="bg-red-500 h-fit px-3 py-2 rounded cursor-pointer"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
}
