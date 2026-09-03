import React from 'react';
import  "./app.css"

function Affichons({ liste }) {
  // Gestion du cas où la liste est vide ou non définie
  if (!liste || liste.length === 0) {
    return <p>Aucun produit à afficher.</p>;
  }

  return (
    <div className="conteneur-liste">
      {liste.map((element, index) => (
        // Utilisation de la prop 'key' requise par React
        <div key={element.id || index} className="carte-produit">
          <h3>{element.nom}</h3>
          <p>Prix : {element.prix}</p>
          <p>Quantité : {element.quantite}</p>
          <p>Catégorie : {element.categorie}</p>
        </div>
      ))}
    </div>
  );
}

export default Affichons;