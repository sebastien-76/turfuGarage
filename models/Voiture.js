import Vehicule from "./Vehicule.js";

export default class Voiture extends Vehicule {
    /* Définition des attributs */
    #couleur;
    constructor(marque, modele, annee, couleur) {
        super(marque, modele, annee);
        this.#couleur = couleur;
    }

    /* Définition des getters et setters */
    
    setCouleur(couleur) {
        this.#couleur = couleur;
    }

        getCouleur() {
        return this.#couleur;
    }

    /* Définition de la methode d'affichage des informations */
    afficherDetails() {
        super.afficherDetails();
        console.log(`Couleur: ${this.#couleur}`);
    }
}