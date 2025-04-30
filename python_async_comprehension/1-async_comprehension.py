#!/usr/bin/env python3
"""Module pour la compréhension asynchrone"""
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Collecte 10 nombres aléatoires à l'aide d'une compréhension asynchrone sur async_generator.
    Renvoie les 10 nombres aléatoires.
    """
    return [i async for i in async_generator()]
