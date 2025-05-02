#!/usr/bin/env python3
"""
Module fournissant des fonctions d'aide pour la pagination.
"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Calcule les indices de début et de fin pour une page et une taille de page.

    Args:
        page (int): Numéro de la page (commençant à 1).
        page_size (int): Nombre d'éléments par page.

    Returns:
        Tuple[int, int]: Un tuple contenant les indices de début et de fin.
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)
