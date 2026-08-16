import "./Afficher.css"

function AfficheChaque({produits, supprimer, terminer}){


    return(
        <div className="affiche">
            <h3 key={produits.id} style={{
                textDecoration : produits.terminer ? 'line-through' : 'none',
                cursor: "pointer"
            }}  onClick={() => terminer(produits.id)}> nom : {produits.nom} - prix : {produits.prix} </h3>
           <div className="button">
             <button onClick={() => supprimer(produits.id)}>Supprimer</button>
            <button onClick={() => terminer(produits.id)}>  {produits.terminer ? "Acheter" : "Vendre"} </button>
           </div>
            
        </div>
    )
}

export default AfficheChaque




