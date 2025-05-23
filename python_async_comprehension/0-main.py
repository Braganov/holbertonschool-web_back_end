#!/usr/bin/env python3
"""Script de test pour le générateur asynchrone"""
import asyncio

async_generator = __import__('0-async_generator').async_generator


async def print_yielded_values():
    """Affiche les valeurs produites par le générateur asynchrone"""
    result = []
    async for i in async_generator():
        result.append(i)
    print(result)

asyncio.run(print_yielded_values())
