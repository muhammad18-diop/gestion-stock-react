import AfficheChaque from "./AfficheChaque"

function Afficher({tableau, supprimer, terminer, filtre}){


    return(
        tableau.map((tab) => (
            <AfficheChaque key={tab.id} produits={tab} supprimer={supprimer} terminer={terminer}/>
        ))
    )
}

export default Afficher