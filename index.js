/* Import des classes */
import Voiture from "./models/Voiture.js";
import Animal from "./models/Animal.js";
import Chien from "./models/Chien.js";
import Chat from "./models/Chat.js";

import { faker } from "@faker-js/faker";

/* Définition d'une nouvelle voiture */
const voiture = new Voiture("Toyota", "Camry", 2022, "Noir");

/* Affichage des informations de la voiture */
voiture.afficherDetails();

/* Modification de la couleur de la voiture */
voiture.setCouleur("Blanc");

/* Affichage des nouvelles informations de la voiture */
voiture.afficherDetails();

/* Affichage du bruit de l'animal */
const animal = new Animal();

/* Affichage du bruit du chat */
const chat = new Chat();

/* Affichage du bruit du chien */
const chien = new Chien();

/* Définition d'une liste d'animaux */
const listeAnimaux = [animal, chat, chien];

/* Affichage des bruits des animaux */
for (const el of listeAnimaux) {
    el.faireDuBruit();
}

/* Changement de couleur et affichage des détails */
voiture.changerCouleur("Bleu");


/* Génération d'une liste de voiture de 10 voitures*/
function VoitureListe() {
    let voitureListe = [];

    for (let i = 0; i < 10; i++) {
        voitureListe[i] = new Voiture(
            faker.vehicle.manufacturer(),
            faker.vehicle.model(),
            faker.date.anytime().getFullYear(),
            faker.color.human(),
        );
    }

    return voitureListe;
}

/* Récupération de la liste */
let liste = VoitureListe();

/* Affichage des détails de la liste */
for (let i = 0; i < liste.length; i++) {
    liste[i].afficherDetails();
};

/* fonction de selection et affichage des détails des voitures d'une année */
function selectionParAnnee(annee) {
    let listeParAnnee = [];
    for (let i = 0; i < liste.length; i++) {
        if (liste[i].getAnnee() === annee){
            listeParAnnee.push(liste[i]);
        }
    };
    console.log("Liste des voitures de l'annee " + annee + " :");
    for (let i = 0; i < listeParAnnee.length; i++) {
        listeParAnnee[i].afficherDetails();
    };  
}

/* Appel de la fonction */
selectionParAnnee(2025);






