#!/usr/bin/env python3
"""Module for task 8 - Complex types - functions."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Create a function that multiplies a float by a given multiplier.

    Args:
        multiplier: The multiplier value

    Returns:
        A function that takes a float and returns the product of the float
        and the multiplier
    """
    def multiply_by_multiplier(n: float) -> float:
        """Multiply a number by the multiplier.

        Args:
            n: The number to multiply

        Returns:
            The product of n and the multiplier
        """
        return n * multiplier

    return multiply_by_multiplier
