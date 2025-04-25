#!/usr/bin/env python3
"""Module for task 6 - Complex types - Mixed list."""

from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Calculate the sum of a list containing integers and floats.

    Args:
        mxd_lst: A list containing integers and floating point numbers

    Returns:
        The sum of all numbers in the list as a float
    """
    return float(sum(mxd_lst))
