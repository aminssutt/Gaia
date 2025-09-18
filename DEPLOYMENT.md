# Instructions de déploiement - Gaia

## 🚀 Déploiement sur GitHub Pages

Votre projet est maintenant optimisé pour le déploiement en ligne ! Voici comment procéder :

### Option 1: Déploiement automatique avec GitHub Actions (Recommandé)

1. **Pousser votre code sur GitHub** :
   ```bash
   git add .
   git commit -m "Configure deployment for GitHub Pages"
   git push origin main
   ```

2. **Activer GitHub Pages** :
   - Allez sur votre repository GitHub
   - Settings → Pages
   - Source: "GitHub Actions"
   - Le déploiement se fera automatiquement à chaque push sur main

3. **Votre site sera disponible à** :
   ```
   https://aminssutt.github.io/Gaia
   ```

### Option 2: Déploiement manuel

1. **Installer les dépendances** :
   ```bash
   npm install
   ```

2. **Déployer manuellement** :
   ```bash
   npm run deploy
   ```

## 🔧 Configurations ajoutées

### ✅ Vite Configuration
- **Base path** configuré pour GitHub Pages : `/Gaia/`
- **Build output** optimisé dans le dossier `dist`
- **Assets** correctement configurés

### ✅ Package.json
- **Homepage** : `https://aminssutt.github.io/Gaia`
- **Scripts de déploiement** : `predeploy` et `deploy`
- **gh-pages** ajouté aux devDependencies

### ✅ GitHub Actions
- **Workflow automatique** : `.github/workflows/deploy.yml`
- **Build et déploiement** automatiques sur chaque push
- **Node.js 18** avec cache npm pour des builds rapides

### ✅ Optimisations
- **`.nojekyll`** : Évite le traitement Jekyll par GitHub
- **Paths relatifs** : Tous les assets utilisent des chemins corrects

## 🌐 Plateformes supportées

Votre application fonctionnera parfaitement sur :
- **GitHub Pages** (configuration principale)
- **Netlify** (déployez le dossier `dist` après `npm run build`)
- **Vercel** (import direct du repository GitHub)
- **Surge.sh** (après build, `surge dist/`)

## 📱 Compatibilité

- ✅ **WebGL** : Navigateurs modernes supportés
- ✅ **Three.js** : Optimisé pour le web
- ✅ **Responsive** : Fonctionne sur desktop et mobile
- ✅ **HTTPS** : Compatible avec les domaines sécurisés

## 🔍 Vérifications post-déploiement

Une fois déployé, vérifiez que :
- [ ] Les modèles 3D se chargent correctement
- [ ] Les avatars masculin/féminin fonctionnent
- [ ] Les points interactifs sont cliquables
- [ ] Les vidéos d'exercices se lancent
- [ ] La navigation entre pages fonctionne
- [ ] Les popups de confirmation s'affichent

Votre application Gaia est prête pour le web ! 🎉