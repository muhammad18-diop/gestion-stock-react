import { useState } from "react";
import "./AjoutProduit.css"

function AjouterProduit({produit}){
    const [nom, setNom] = useState('')
    const [prix, setPrix] = useState('')

    function soummetre(e){
        e.preventDefault();

    if(nom === ""){
        alert("Le champ nom est vide")
    }

    if(prix === ""){
        alert("Le champ prix est vide")
    }

   const prod = {
        id: Date.now(),
        nom: nom,
        prix: prix,
        terminer: false
    }



    produit(prod)

    setNom("")
    setPrix("")
    }

    return(
        <div>
            <h2>Ajouter un produit</h2>
            <form onSubmit={soummetre}>
                <div>
                    <label htmlFor="nom">Nom:</label>
                    <input type="text" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} />
                </div>
                <div>

                    <label htmlFor="prix">Prix:</label>
                    <input type="number" id="prix" value={prix} onChange={(e) => setPrix(e.target.value)} />
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}

export default AjouterProduit