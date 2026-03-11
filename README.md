# Dijkstra Based Mapper

A path-finding and mapping system that computes optimal routes using **Dijkstra’s shortest path algorithm**.  
The project provides a backend service that processes graph data and calculates optimal paths, along with a frontend interface for interacting with the system.

This project demonstrates how classical graph algorithms can be integrated into modern web architectures for applications such as route planning, autonomous navigation simulations, and graph analysis.

---

## Overview

The system models a network of nodes and weighted edges representing distances or costs between locations.  
Using Dijkstra’s algorithm, the application determines the shortest path between nodes.

The backend is responsible for:

- Loading graph data from a dataset
- Computing shortest paths
- Exposing endpoints for route queries

The frontend interacts with the backend to request path computations and visualize results.

---

## Features

- Implementation of **Dijkstra’s shortest path algorithm**
- Backend API built using **FastAPI**
- Graph data processing from CSV datasets
- Frontend interface for interacting with the system
- Modular structure allowing future expansion

---

## Repository Structure

```
dijkstra_based_mapper
│
├── frontend/          Frontend interface for interacting with the mapper
├── app.py             Main FastAPI backend
├── app0.py            Backend logic for path computation
├── data.csv           Dataset representing nodes and weighted edges
├── README.md
```

---

## Algorithm

The project uses **Dijkstra’s Algorithm**, a classical graph search algorithm used to find the shortest path between nodes in a weighted graph.

Basic steps of the algorithm:

1. Initialize the starting node with distance 0.
2. Set all other nodes to infinity.
3. Select the node with the smallest tentative distance.
4. Update distances of its neighbors.
5. Repeat until the destination node is reached or all nodes are processed.

Time complexity:

```
O((V + E) log V)
```

when implemented with a priority queue.

---

## Installation

Clone the repository:

```
git clone https://github.com/PranavGupta-006/dijkstra_based_mapper.git
cd dijkstra_based_mapper
```

Create a virtual environment:

```
python3 -m venv venv
source venv/bin/activate
```

Install dependencies:

```
pip install fastapi uvicorn pandas
```

---

## Running the Backend

Start the FastAPI server:

```
uvicorn app:app --reload
```

The API will be available at:

```
http://127.0.0.1:8000
```

FastAPI documentation interface:

```
http://127.0.0.1:8000/docs
```

---

## Example Workflow

1. Load the graph dataset from `data.csv`.
2. Send a request to the backend specifying the start and destination nodes.
3. The backend runs Dijkstra’s algorithm.
4. The computed shortest path is returned to the frontend.

---

## Potential Applications

- Autonomous vehicle route planning simulations
- Robotics navigation experiments
- Network routing simulations
- Graph algorithm visualization tools
- Educational demonstrations of shortest path algorithms

---

## Future Improvements

- Interactive graph visualization
- Dynamic obstacle support
- Real-time map updates
- Integration with GIS datasets
- Support for additional algorithms such as A* and Bellman-Ford

---

## License

This project is intended for educational and research purposes.
