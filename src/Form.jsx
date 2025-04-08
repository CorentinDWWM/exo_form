import React from "react";

export default function Form({
  handleSubmitDepense,
  setOneDepense,
  oneDepense,
}) {
  const handleChangeDescription = (e) => {
    setOneDepense({
      ...oneDepense,
      description: e.target.value,
    });
  };
  const handleChangePrice = (e) => {
    setOneDepense({
      ...oneDepense,
      price: e.target.value,
    });
  };
  const handleChangeDate = (e) => {
    setOneDepense({
      ...oneDepense,
      date: e.target.value,
    });
  };
  return (
    <form className="flex flex-col gap-4 mb-6" onSubmit={handleSubmitDepense}>
      <input
        type="text"
        name="text"
        placeholder="Description de la dépense"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring"
        value={oneDepense.description}
        onChange={handleChangeDescription}
        required
      />
      <input
        type="number"
        name="number"
        placeholder="Montant (€)"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring"
        value={oneDepense.price}
        onChange={handleChangePrice}
        required
      />
      <input
        type="date"
        name="date"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring"
        value={oneDepense.date}
        onChange={handleChangeDate}
        required
      />
      <input
        type="submit"
        value="Ajouter Dépense"
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
      />
    </form>
  );
}
