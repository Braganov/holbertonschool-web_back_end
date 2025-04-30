#!/usr/bin/env python3
"""
Fichier principal
"""

index_range = __import__('simple_helper_function').index_range

res = index_range(1, 7)
print(f"Type: {type(res)}")
print(f"Result: {res}")

res = index_range(page=3, page_size=15)
print(f"Type: {type(res)}")
print(f"Result: {res}")
