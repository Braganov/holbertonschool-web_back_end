#!/usr/bin/env python3
"""Module for task 5 - Complex types - List of floats."""

from typing import List


def sum_list(input_list: List[float]) -> float:
    """Calculate the sum of a list of floating point numbers.

    Args:
        input_list: A list of floating point numbers

    Returns:
        The sum of all numbers in the list as a float
    """
    return sum(input_list)
