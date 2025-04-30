#!/usr/bin/env python3
"""Module pour une fonction de générateur asynchrone"""
import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Produit de manière asynchrone des nombres aléatoires entre 0 et 10.
    Boucle 10 fois, attendant de manière asynchrone 1 seconde à chaque fois,
    puis produit un nombre aléatoire.
    """
    for _ in range(10):
        i = random.uniform(0, 10)
        await asyncio.sleep(1)
        yield i
