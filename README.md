# 🌉 NuitDeLInfo

Dépôt officiel du service web développé pour l'événement **Nuit de l'Info**. Ce projet utilise une architecture **Full Stack** intégrant des technologies modernes pour créer une application web performante, évolutive, et maintenable.

---

# 🌐 Architecture du Projet

Ce projet est structuré en deux parties principales, **Frontend** et **Backend**, qui communiquent via une API GraphQL pour offrir une flexibilité et une extensibilité optimales.

---

# 📂 Structure du Projet

```plaintext
NuitDeLInfo/
│
├── backend/                  # Serveur Node.js (Express, GraphQL)
│   ├── src/
│   │   ├── resolvers/        # Résolveurs GraphQL
│   │   ├── schemas/          # Schémas GraphQL
│   │   ├── config/           # Configuration (DB, variables)
│   │   ├── models/           # Modèles de données MySQL
│   │   ├── index.js          # Entrée principale du serveur
│   │   └── server.js         # Configuration du serveur Express
│   └── package.json          # Dépendances backend
│
├── frontend/                 # Frontend React
│   ├── public/               # Fichiers publics (favicon, index.html)
│   ├── src/
│   │   ├── components/       # Composants React
│   │   ├── pages/            # Pages principales
│   │   ├── graphql/          # Requêtes GraphQL
│   │   ├── App.js            # Point d'entrée React
│   │   └── index.js          # Rend le projet dans le DOM
│   └── package.json          # Dépendances frontend
│
└── README.md                 # Documentation du projet
└── LICENSE
```

# 🚀 Technologies Utilisées
## Frontend

Le frontend est construit avec React.js, et inclut les outils suivants :

    React.js : Permet la création d'une interface utilisateur réactive et modulaire.
    Apollo Client : Gère les requêtes et la communication avec l'API GraphQL.
    React Scripts : Offre un environnement de développement préconfiguré.

## Backend

Le backend repose sur Node.js, avec les technologies suivantes :

    Express.js : Framework léger pour le serveur HTTP.
    GraphQL : API puissante pour les requêtes et mutations des données.
    MySQL : Base de données relationnelle performante et cohérente.
    dotenv : Gestion sécurisée des variables d’environnement.
    nodemon : Recharge automatiquement le serveur pour faciliter le développement.

# 🌟 Fonctionnalités Clés

    GraphQL API : Fournit des requêtes et mutations flexibles pour gérer les données efficacement.
    Base de Données MySQL : Organise et stocke les données de manière relationnelle.
    Interface Dynamique : Propose une expérience utilisateur moderne et réactive grâce à React.js

---

# 📖 Comment Contribuer ?

1. Cloner le dépôt :  
   Clonez ce dépôt sur votre machine locale à l'aide de la commande suivante :  
   ```bash
       git clone <URL_DU_DÉPÔT>
   ```
2. Créer une branche spécifique :
    Avant d'apporter des modifications, créez une branche spécifique pour votre fonctionnalité ou correction :
    ```bash
       git checkout -b feature/nom-de-la-fonctionnalité
    ```
3. Effectuer un commit :
    Ajoutez vos modifications et effectuez un commit avec un message clair et descriptif :
    ```bash
       git add .
       git commit -m "Ajout de la fonctionnalité : description"
    ```
4. Envoyer vos modifications :
    Poussez vos modifications vers le dépôt distant sur la branche créée :
    ```bash
       git push origin feature/nom-de-la-fonctionnalité
    ```
5. Créer une Pull Request :
    Allez sur la page du dépôt GitHub.
    Ouvrez une Pull Request (PR) pour soumettre vos modifications. Assurez-vous de décrire clairement les changements apportés.

Une fois votre Pull Request ouverte, elle sera examinée et validée avant d'être fusionnée dans la branche principale.

# 📄 Licence

Ce projet est sous licence **GPL v3**. Vous êtes libre d'utiliser, modifier et redistribuer ce projet, sous réserve de respecter les conditions de la licence GPL v3.

## Conditions de la Licence GPL v3 :
- Vous pouvez **utiliser**, **modifier** et **redistribuer** ce projet, à condition de fournir le code source et de distribuer le logiciel sous la même licence GPL v3.
- Toute redistribution doit être accompagnée du code source complet du logiciel ou d'une offre de mise à disposition du code source.
- Si vous modifiez le logiciel et le redistribuez, vous devez également fournir une copie de la licence GPL v3.
- Toute redistribution doit inclure le texte de cette licence.

## Avertissement :
Le logiciel est fourni "tel quel", sans aucune garantie. Les auteurs ne peuvent être tenus responsables de tout dommage, perte de données ou autre problème découlant de l'utilisation du logiciel.