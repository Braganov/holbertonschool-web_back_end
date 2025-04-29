# Python Async Comprehension

This project focuses on asynchronous comprehension in Python. It covers the following learning objectives:

- How to write an asynchronous generator
- How to use async comprehensions
- How to type-annotate generators

## Requirements
- Python 3.9
- pycodestyle 2.5.x

## Files
- `0-async_generator.py`: Implements an asynchronous generator function that yields random numbers
- `1-async_comprehension.py`: Collects random numbers using an async comprehension
- `2-measure_runtime.py`: Measures the runtime of parallel async comprehensions

## Task Explanations

### 0. Async Generator
Implements a coroutine that loops 10 times, each time asynchronously waits 1 second, then yields a random number.

### 1. Async Comprehensions
Uses async comprehension to collect 10 random numbers from the async generator.

### 2. Run time for four parallel comprehensions
Measures the total runtime of executing async_comprehension four times in parallel.
Note that the runtime is roughly 10 seconds because each async_comprehension runs for about 10 seconds (10 iterations with 1 second sleep each), but by running them in parallel using asyncio.gather, all four complete in the same ~10 seconds instead of taking 40 seconds sequentially.
