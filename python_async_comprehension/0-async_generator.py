#!/usr/bin/env python3
"""Module for an asynchronous generator function"""
import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """
    Asynchronously yields random numbers between 0 and 10.
    Loops 10 times, each time waiting 1 second asynchronously,
    then yields a random number.
    """
    for _ in range(10):
        i = random.uniform(0, 10)
        await asyncio.sleep(1)
        yield i
