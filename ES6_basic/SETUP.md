# Guide de Configuration du Projet ES6_basic

Ce document détaille la configuration nécessaire pour exécuter le projet ES6_basic.

## Installation de NodeJS 20.x

Pour installer NodeJS 20.x dans votre répertoire personnel :

```bash
curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Vérifiez l'installation :
```bash
nodejs -v
# Sortie attendue : v20.15.1 ou similaire
npm -v
# Sortie attendue : 10.7.0 ou similaire
```

## Installation des dépendances du projet

Dans le répertoire de votre projet, installez les dépendances suivantes :

### Jest (Framework de test)
```bash
npm install --save-dev jest
```

### Babel (Transpilateur JavaScript)
```bash
npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/node
```

### ESLint (Linter JavaScript)
```bash
npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-jest
```

## Fichiers de configuration

### package.json
Ce fichier définit les scripts et les dépendances du projet.

```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "@babel/node": "^7.8.0",
    "eslint": "^6.8.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

### babel.config.js
Ce fichier configure Babel pour transpiler le code ES6+ en JavaScript compatible.

```javascript
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

### .eslintrc.js
Ce fichier configure ESLint pour valider votre code selon les règles définies.

```javascript
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

## Installation finale

Après avoir créé ces fichiers de configuration, exécutez la commande suivante pour installer toutes les dépendances :

```bash
npm install
```

## Exécution des exercices

Pour exécuter un exercice spécifique :

```bash
npm run dev <nom-fichier-main>
```

Par exemple :
```bash
npm run dev 2-main.js
```

Pour vérifier le code avec ESLint :
```bash
npm run lint <nom-fichier>
```

Pour exécuter tous les tests :
```bash
npm test
```
