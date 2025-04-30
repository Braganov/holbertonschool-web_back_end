# Pagination en Python

## Objectifs d'apprentissage
À la fin de ce projet, vous devriez être capable d'expliquer à quiconque, sans l'aide de Google:

- Comment paginer un ensemble de données avec de simples paramètres page et page_size
- Comment paginer un ensemble de données avec des métadonnées hypermedia
- Comment paginer de manière résiliente aux suppressions

## Exigences
- Tous vos fichiers seront interprétés/compilés sur Ubuntu 20.04 LTS en utilisant python3 (version 3.9)
- Tous vos fichiers doivent se terminer par une nouvelle ligne
- La première ligne de tous vos fichiers doit être exactement #!/usr/bin/env python3
- Un fichier README.md, à la racine du dossier du projet, est obligatoire
- Votre code doit utiliser le style pycodestyle (version 2.5.*)
- La longueur de vos fichiers sera testée en utilisant wc
- Tous vos modules doivent avoir une documentation (python3 -c 'print(__import__("my_module").__doc__)')
- Toutes vos fonctions doivent avoir une documentation (python3 -c 'print(__import__("my_module").my_function.__doc__)')
- Une documentation n'est pas un simple mot, c'est une phrase complète expliquant le but du module, de la classe ou de la méthode (la longueur sera vérifiée)
- Toutes vos fonctions et coroutines doivent être annotées de type.

## Structure du Projet
- `0-simple_helper_function.py`: Fonction d'aide simple pour calculer les indices de pagination
- `1-simple_pagination.py`: Implémentation d'une pagination simple
- `2-hypermedia_pagination.py`: Implémentation d'une pagination avec métadonnées hypermedia
- `3-hypermedia_del_pagination.py`: Implémentation d'une pagination hypermedia résiliente aux suppressions
