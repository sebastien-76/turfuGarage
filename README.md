# Brief Simplon TurfuGarage

## Objectifs

- Maîtriser la création de classes et d’objets
- Comprendre l’encapsulation (attributs privés, getters/setters)
- Implémenter de l’héritage entre classes
- Utiliser le polymorphisme via des méthodes redéfinies


## Structure

- Un dossier "models" contenant les classes créées.
- Un fichier index  dans lequel sont instanciées les différentes classes, et où sont appelées les méthodes.


## Logique

### Etapes 1, 2 et 3

La superclasse "Vehicule" est définie (models/Vehicule.js) avec les attributs privés "marque", "modele" et "annee", les getters et setters associés ainsi que la méthode "afficherDetails()".
La classe "Voiture" est définie (models/Voiture.js) en étendant la classe "Vehicule". Elle hérite des attributs, des accesseurs et méthodes de "Vehicule".
On définit, pour cette classe, l'attribut "couleur", les getter et setter associés et on redéfinie "afficherDetails" pour prendre en compte l'attribut couleur.

Dans index,
- on importe les différentes classes
- on instancie une nouvelle voiture ("Toyota", "Camry", 2022, "Noir")
- on appelle afficherDetails() pour afficher les différentes infos de la voiture
- on modifie la couleur de la voiture en utilisant le setter
- on appelle afficherDetails() pour afficher les nouvelles informations de la voiture

### Etape 4

La classe "Animal" est définie (models/Animal.js) avec la methode faireDuBruit().
La classe "Chien" est définie (models/Chien.js) en etendant "Animal" et en redéfinissant faireDuBruit().
La classe "Chat" est définie (models/Chat.js) en etendant "Animal" et en redéfinissant faireDuBruit().

Dans index.js,
- on importe les différentes classes,
- on instancie un animal, un chat et un chien
- on les ajoute dans une liste (tableau)
- on boucle sur les éléments du tableau pour appeler faireDuBruit() pour chacun des éléments de la liste afin d'afficher leur cri