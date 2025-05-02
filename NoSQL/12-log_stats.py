#!/usr/bin/env python3
"""
Python script that provides stats about Nginx logs
stored in MongoDB.
"""
from pymongo import MongoClient


if __name__ == "__main__":
    """
    Provides stats about Nginx logs stored in MongoDB.
    """
    client = MongoClient('mongodb://127.0.0.1:27017')
    nginx_collection = client.logs.nginx

    # Total number of logs
    total_logs = nginx_collection.count_documents({})
    print(f"{total_logs} logs")

    # Number of documents per HTTP method
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = nginx_collection.count_documents({"method": method})
        print(f"    method {method}: {count}")

    # Number of documents with method=GET and path=/status
    status_check = nginx_collection.count_documents(
        {"method": "GET", "path": "/status"}
    )
    print(f"{status_check} status check")
