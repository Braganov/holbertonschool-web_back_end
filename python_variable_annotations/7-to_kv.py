#!/usr/bin/env python3
"""Module for task 7 - Complex types - string and int/float to tuple."""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Create a tuple from a string and an int/float.

    Args:
        k: A string
        v: An integer or float

    Returns:
        A tuple with the string k as first element and the square of v as float
        for the second element
    """
    return (k, float(v ** 2))
