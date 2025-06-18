/* Import des classes */
import Voiture from "./models/Voiture.js";
import Animal from "./models/Animal.js";
import Chien from "./models/Chien.js";
import Chat from "./models/Chat.js";

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