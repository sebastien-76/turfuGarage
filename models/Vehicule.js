class Vehicule {
    /* Définition des attributs */
    #marque;
    #modele;
    #annee;

    constructor(marque, modele, annee) {
        this.#marque = marque;
        this.#modele = modele;
        this.#annee = annee;
    }

    /* Définition des getters et setters */
    getMarque() {
        return this.#marque;
    }

    setMarque(marque) {
        this.#marque = marque;
    }

    getModele() {
        return this.#modele;
    }

    setModele(modele) {
        this.#modele = modele;
    }

    getAnnee() {
        return this.#annee;
    }

    setAnnee(annee) {
        this.#annee = annee;
    }

    
    afficherDetails() {
        console.log(`Marque: ${this.#marque} - Modele: ${this.#modele} - Année : ${this.#annee}`);
    }
}

export default Vehicule;