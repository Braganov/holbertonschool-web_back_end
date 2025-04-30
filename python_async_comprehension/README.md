# Compréhension Asynchrone en Python

Ce projet se concentre sur la compréhension asynchrone en Python. Il couvre les objectifs d'apprentissage suivants :

- Comment écrire un générateur asynchrone
- Comment utiliser les compréhensions asynchrones
- Comment annoter les types pour les générateurs

## Exigences
- Python 3.9
- pycodestyle 2.5.x

## Fichiers
- `0-async_generator.py` : Implémente une fonction de générateur asynchrone qui produit des nombres aléatoires
- `1-async_comprehension.py` : Collecte des nombres aléatoires à l'aide d'une compréhension asynchrone
- `2-measure_runtime.py` : Mesure le temps d'exécution de compréhensions asynchrones parallèles

## Explications des Tâches

### 0. Générateur Asynchrone
Implémente une coroutine qui boucle 10 fois, attendant de manière asynchrone 1 seconde à chaque fois, puis produit un nombre aléatoire.

### 1. Compréhensions Asynchrones
Utilise une compréhension asynchrone pour collecter 10 nombres aléatoires du générateur asynchrone.

### 2. Temps d'exécution pour quatre compréhensions parallèles
Mesure le temps d'exécution total de l'exécution de async_comprehension quatre fois en parallèle.
Notez que le temps d'exécution est d'environ 10 secondes car chaque async_comprehension s'exécute pendant environ 10 secondes (10 itérations avec 1 seconde de pause chacune), mais en les exécutant en parallèle avec asyncio.gather, les quatre se terminent dans les mêmes ~10 secondes au lieu de prendre 40 secondes séquentiellement.
