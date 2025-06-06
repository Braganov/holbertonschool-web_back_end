#!/usr/bin/env python3
"""
Module implémentant un serveur avec pagination hypermedia.
"""
import csv
import math
from typing import List, Dict, Union, Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Calcule les indices de début et de fin pour une page et une taille de page données.

    Args:
        page (int): Numéro de la page (commençant à 1).
        page_size (int): Nombre d'éléments par page.

    Returns:
        Tuple[int, int]: Un tuple contenant les indices de début et de fin.
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size

    return (start_index, end_index)


class Server:
    """Classe de serveur pour paginer une base de données de prénoms populaires."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Dataset mis en cache"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
        Récupère une page spécifique du dataset.
        
        Args:
            page (int): Numéro de la page à récupérer (commençant à 1).
            page_size (int): Nombre d'éléments par page.
            
        Returns:
            List[List]: La page du dataset.
        """
        assert isinstance(page, int) and page > 0, "Page doit être un entier positif"
        assert isinstance(page_size, int) and page_size > 0, "Page_size doit être un entier positif"

        dataset = self.dataset()
        
        try:
            start_idx, end_idx = index_range(page, page_size)
            return dataset[start_idx:end_idx]
        except IndexError:
            return []
    
    def get_hyper(self, page: int = 1, page_size: int = 10) -> Dict:
        """
        Récupère une page avec des métadonnées hypermedia.

        Args:
            page (int): Numéro de la page à récupérer (commençant à 1).
            page_size (int): Nombre d'éléments par page.

        Returns:
            Dict: Un dictionnaire contenant les métadonnées de pagination et les données.
        """
        page_data = self.get_page(page, page_size)
        total_data = len(self.dataset())
        total_pages = math.ceil(total_data / page_size) if page_size > 0 else 0
        
        return {
            'page_size': len(page_data),
            'page': page,
            'data': page_data,
            'next_page': page + 1 if page < total_pages else None,
            'prev_page': page - 1 if page > 1 else None,
            'total_pages': total_pages
        }
