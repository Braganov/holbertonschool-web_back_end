#!/usr/bin/env python3
"""
Module that provides a function to search for schools
by topic in MongoDB.
"""


def schools_by_topic(mongo_collection, topic):
    """
    Returns the list of schools having a specific topic.

    Args:
        mongo_collection: The pymongo collection object.
        topic (str): The topic searched.

    Returns:
        The list of schools having that topic.
    """
    return list(mongo_collection.find({"topics": topic}))
