#!/usr/bin/env python3
"""Module pour mesurer le temps d'exécution des compréhensions asynchrones"""
import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Exécute async_comprehension quatre fois en parallèle en utilisant asyncio.gather.
    Mesure le temps d'exécution total et le renvoie.
    """
    start_time = time.time()

    # Exécuter quatre compréhensions asynchrones en parallèle
    await asyncio.gather(
        async_comprehension(),
        async_comprehension(),
        async_comprehension(),
        async_comprehension()
    )

    end_time = time.time()
    return end_time - start_time
