import { useState, useEffect } from 'react'
import  {Navabar}  from './components/navbar'
import {  Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AjouterProduit from './components/AjoutProduit'
import Afficher from './components/AfficherProduit'
import "./components/app.css"
import Ajouter from './components/Ajout'
import Affichons from './components/listProduit'



function App() {

  const [taches, setTaches] = useState([])
  
  function mettre(produit){
    setTaches([...taches, produit])
  }
  useEffect(() => {
    console.log(taches);
    
  }, [taches]);

  const supprimer = (id) => {
    setTaches(taches.filter(p => p.id != id))
  }

  const basculer = (id) => {
    setTaches(taches.map ((tache) => 
    tache.id === id ? {...tache, terminer: !tache.terminer} : tache
    ))
  }

  const [filtre, setFultres] = useState("Tous")
  const tachesFiltrees = taches.filter((tache) => {
    if (filtre === 'en_cours') return !tache.terminer;
    if (filtre === 'terminees') return tache.terminer;
    return true; 
  });

  const [list, setList] = useState([])

  function ajouterUnProduit(prod){
    setList([...list, prod])
  }

  useEffect(() => {
    console.log(list);
  },[list])

  useEffect(() => {
    localStorage.setItem("donnees", JSON.stringify(list))
  }, [list])

  const [filtrer, setFiltrer] = useState("Tous");

const produitFiltrer = list.filter((item) => {
  // 1. Si la catégorie "Tous" est sélectionnée, on conserve tout
  if (filtrer === "Tous") return true;

  // 2. Sinon, on compare directement la catégorie sélectionnée à celle de l'élément
  return item.categorie === filtrer;
});

const produitsAffiches = list.filter((item) => {
    // 1. Vérifie si le nom correspond au texte recherché (en minuscules pour éviter les problèmes de casse)
    const correspondRecherche = item.nom
      .toLowerCase()
      .includes(recherche.toLowerCase());

    // 2. Vérifie la catégorie
    const correspondCategorie =
      filtrer === "Tous" || item.categorie === filtrer;

    return correspondRecherche && correspondCategorie;
  });
  return (
    <>
      
       <AjouterProduit produit={mettre}/>

       <div className="filtre"  style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "25%",
        marginTop: "15px",
       }}>
        <button onClick={() => setFultres("Tous")}>Tous</button>
        <button onClick={() => setFultres("en_cours")}>En Stock</button>
        <button onClick={() => setFultres("terminees")}>Vendu</button>
       </div>
               <Afficher tableau={tachesFiltrees} supprimer={supprimer} terminer={basculer} filtre={tachesFiltrees}/>

               <Ajouter produit={ajouterUnProduit}/>

               

               <div className="button">
                <button onClick={() => setFiltrer("Tous")}> Tous</button>
               <button onClick={() => setFiltrer("Vetement")}> Vetement</button>
               <button onClick={() => setFiltrer("Electronique")}> Electronique</button>;
               <Affichons liste={produitFiltrer}/>

               </div>
    </>
  )
}

export default App

