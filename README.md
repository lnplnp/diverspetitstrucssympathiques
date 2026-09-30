# Divers Petits Trucs Sympathiques

Collection de petites applications web interactives autour d'astuces mathématiques.

## Constante de Kaprekar

Ce dossier contient une page web interactive qui démontre **la constante de Kaprekar pour n'importe quelle taille de nombre entre 2 et 10 chiffres**. 

La constante de Kaprekar est un phénomène mathématique fascinant : en appliquant un processus spécifique (soustraction répétée entre le plus grand et le plus petit nombre formés par les chiffres), on obtient toujours une constante caractéristique après un certain nombre d'itérations.

### Fonctionnalités
- **Sélection de la taille** : Choisissez le nombre de chiffres (n) entre 2 et 10 via un menu déroulant.
- **Validation automatique** : Le système vérifie que le nombre saisi a exactement n chiffres (zéros ajoutés devant si nécessaire) et que tous les chiffres ne sont pas identiques.
- **Algorithme universel** : Fonctionne pour toutes les tailles de 2 à 10 chiffres, avec les constantes connues pour chaque taille (ex: 495 pour 3 chiffres, 6174 pour 4 chiffres, 53955 pour 5 chiffres, etc.).
- **Affichage des étapes** : Visualisez chaque itération du calcul jusqu'à l'obtention de la constante.

### Constantes connues par taille
| Chiffres (n) | Constante(s) de Kaprekar |
|--------------|--------------------------|
| 2            | 9                        |
| 3            | 495                      |
| 4            | 6174                     |
| 5            | 53955, 59994             |
| 6            | 549945                   |
| 7            | 5599944                  |
| 8            | 55999944                 |
| 9            | 559999944                |
| 10           | 6317641599, 9999999999   |

### Utilisation
1. Sélectionnez le nombre de chiffres (n) dans le menu déroulant.
2. Entrez un nombre avec exactement n chiffres (ex: 1000 pour n=4, 123 pour n=3).
3. Cliquez sur "Calculer" pour voir les étapes jusqu'à la constante.

La page affichera les opérations intermédiaires et mettra en évidence la constante finale.

## Le tour des centaines

Ce dossier contient une page web interactive dédiée à **la multiplication mentale rapide de deux nombres proches de 100**.

L'astuce repose sur l'identité algébrique `A × B = 100 × (A − b) + (a × b)`, où `a` et `b` sont les écarts de A et B par rapport à 100. Elle permet de calculer de tête, en quelques secondes, des produits comme 88 × 96 ou 107 × 108.

### Fonctionnalités
- **Démonstrateur pas-à-pas** : Entrez deux nombres (50 à 150) et visualisez la décomposition complète en 4 étapes (écarts, produit des écarts, opération croisée, assemblage), avec gestion des cas particuliers (retenue, padding, nombres de part et d'autre de 100).
- **Entraînement (quiz)** : Génération aléatoire de multiplications proches de 100, avec score, série de bonnes réponses, précision, et solution détaillée à la demande.
- **Théorie** : Démonstration algébrique de la méthode et réponses aux questions fréquentes (commutativité, retenue, nombres supérieurs à 100).

### Utilisation
1. Ouvrez `index.html` dans un navigateur.
2. Testez des exemples classiques (88 × 96, 107 × 108...) ou entrez vos propres nombres.
3. Passez en mode Entraînement pour vous exercer, ou consultez l'onglet Théorie pour comprendre le fondement mathématique.
