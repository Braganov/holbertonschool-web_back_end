#!/usr/bin/env python3
"""Script de test pour la mesure du temps d'exécution"""
import asyncio


measure_runtime = __import__('2-measure_runtime').measure_runtime


async def main():
    """Fonction principale pour mesurer le temps d'exécution des compréhensions asynchrones"""
    return await(measure_runtime())

print(
    asyncio.run(main())
)
