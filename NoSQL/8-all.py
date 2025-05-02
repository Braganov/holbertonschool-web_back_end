#!/usr/bin/env python3
"""
Module that provides a function to list all documents in a MongoDB collection.
"""


def list_all(mongo_collection):
    """
    Lists all documents in a collection.

    Args:
        mongo_collection: The pymongo collection object.

    Returns:
        List of all documents or an empty list if no document is found.
    """
    documents = list(mongo_collection.find())
    return documents
