# Avatar Viewer

Un visualiseur d'avatars 3D interactif construit avec React, Vite et Three.js.

## Fonctionnalités

- 🎭 Affichage d'avatars 3D en haute qualité
- 🔄 Changement dynamique entre avatars masculins et féminins
- 🎮 Contrôles orbitaux pour la rotation et le zoom
- 🌙 Interface sombre et moderne
- 📱 Responsive et optimisé

## Installation

1. Installez les dépendances :
```bash
npm install
```

2. Lancez le serveur de développement :
```bash
npm run dev
```

3. Ouvrez votre navigateur à l'adresse `http://localhost:3000`

## Utilisation

- Utilisez les boutons "Homme" et "Femme" pour changer d'avatar
- Faites glisser la souris pour faire tourner l'avatar
- Utilisez la molette de la souris pour zoomer/dézoomer
- L'avatar tourne automatiquement pour une meilleure visualisation

## Structure du projet

```
src/
├── components/
│   └── AvatarViewer.jsx    # Composant principal d'affichage 3D
├── App.jsx                 # Composant principal avec les contrôles
├── App.css                 # Styles de l'application
├── main.jsx               # Point d'entrée de l'application
└── index.css              # Styles globaux

public/
└── avatars/               # Dossier contenant les modèles 3D
    ├── male_body.glb
    └── female_muscle_human_body.glb
```

## Technologies utilisées

- **React 18** - Framework UI
- **Vite** - Build tool et serveur de développement
- **Three.js** - Bibliothèque 3D
- **@react-three/fiber** - Rendu Three.js avec React
- **@react-three/drei** - Utilitaires et helpers pour Three.js

## Dimensions

L'application est optimisée pour une résolution de **1800 x 720 pixels** comme demandé.

## Personnalisation

Pour ajouter de nouveaux avatars :
1. Placez vos fichiers `.glb` dans le dossier `public/avatars/`
2. Modifiez le composant `AvatarViewer.jsx` pour inclure les nouveaux modèles
3. Ajoutez les boutons correspondants dans `App.jsx`
