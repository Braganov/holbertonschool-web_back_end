#!/usr/bin/env python3
"""Script de test pour la compréhension asynchrone"""
import asyncio

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def main():
    """Fonction principale pour tester la compréhension asynchrone"""
    print(await async_comprehension())

asyncio.run(main())
