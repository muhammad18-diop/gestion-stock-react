import { useState, useEffect } from 'react'
import  {Navabar}  from './components/navbar'
import {  Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AjouterProduit from './components/AjoutProduit'
import Afficher from './components/AfficherProduit'
import "./components/app.css"


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

    </>
  )
}

export default App

