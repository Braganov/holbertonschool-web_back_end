#!/usr/bin/env python3
"""Module for task 9 - Let's duck type an iterable object."""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Compute the length of each element in an iterable of sequences.

    Args:
        lst: An iterable containing sequences

    Returns:
        A list of tuples, where each tuple contains a sequence and its length
    """
    return [(i, len(i)) for i in lst]
