#!/usr/bin/env python3
"""
Pagination hypermedia résiliente aux suppressions
"""

import csv
import math
from typing import List, Dict, Union, Tuple


class Server:
    """Classe de serveur pour paginer une base de données de prénoms populaires."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Dataset mis en cache"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexé par position de tri, à partir de 0"""
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Récupère une page avec des métadonnées hypermedia, résiliente aux suppressions.

        Args:
            index (int): L'index de départ (None par défaut).
            page_size (int): Nombre d'éléments par page.

        Returns:
            Dict: Un dictionnaire contenant les métadonnées de pagination et les données.
        """
        indexed_data = self.indexed_dataset()
        
        # Vérifier que l'index est valide
        assert index is None or (isinstance(index, int) and 0 <= index < len(indexed_data)), \
            "Index hors limites"

        if index is None:
            index = 0

        # Collecter les données pour la page actuelle
        data = []
        current_index = index
        next_index = index

        # Collecter page_size éléments ou jusqu'à la fin du dataset
        while len(data) < page_size and next_index < len(indexed_data):
            # Si l'index existe dans le dataset indexé
            if next_index in indexed_data:
                data.append(indexed_data[next_index])
                current_index = next_index

            next_index += 1
        
        return {
            'index': index,
            'data': data,
            'page_size': len(data),
            'next_index': next_index
        }
