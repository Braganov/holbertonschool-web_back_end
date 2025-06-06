#!/usr/bin/env python3
"""
Module that provides a function to update topics
of a school in MongoDB.
"""


def update_topics(mongo_collection, name, topics):
    """
    Changes all topics of a school document based on the name.

    Args:
        mongo_collection: The pymongo collection object.
        name (str): The school name to update.
        topics (list): The list of topics approached in the school.

    Returns:
        None
    """
    mongo_collection.update_many(
        {"name": name}, 
        {"$set": {"topics": topics}}
    )
