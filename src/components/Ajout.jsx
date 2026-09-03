import { useState } from "react"

function Ajouter({produit}){

    const [nom, SetNom] = useState("")
    const [prix, Setprix] = useState("")
    const [quantite, Setquantite] = useState("")
    const [categorie, Setcategorie] = useState("")

    function soumetter(e){
        e.preventDefault();
        
        const prod = {
            id: Date.now(),
            nom: nom,
            prix: prix,
            quantite: quantite,
            categorie: categorie
        }

      produit(prod)
      SetNom("")
      Setprix("")
      Setquantite("")
      Setcategorie("")
    }
    return(
        <div>
            <form action="" onSubmit={soumetter}>
                <input type="text" value={nom} onChange={(e) => SetNom(e.target.value)} placeholder="Enter votre nom"/>
                <input type="number" value={prix} onChange={(e) => Setprix(e.target.value)} placeholder="Enter votre prix"/>
                <input type="number" value={quantite} onChange={(e) => Setquantite(e.target.value)} placeholder="Enter votre quantite"/>
                <input type="text" value={categorie} onChange={(e) => Setcategorie(e.target.value)} placeholder="Enter votre categorie"/>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    )
}

export default Ajouter