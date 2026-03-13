# Dijkstra Based Mapper

A path-finding and mapping system that computes optimal routes using Dijkstra's shortest path algorithm. The project consists of a FastAPI backend that processes graph data and calculates shortest paths, and a React frontend that allows users to interact with the system.

This project demonstrates how classical graph algorithms can be integrated into modern web architectures for applications such as route planning, robotics simulations, and graph analysis.

---

## Overview

The system models a network of nodes and weighted edges representing distances or costs between locations. Using Dijkstra's algorithm, the application determines the shortest path between any two nodes.

The backend is responsible for:

- Loading graph data from a CSV dataset
- Computing shortest paths
- Exposing API endpoints for route queries

The frontend communicates with the backend to request path computations and display the resulting path.

---

## Features

- Dijkstra's shortest path algorithm implementation
- Backend API built with FastAPI
- Graph data processing from CSV datasets
- React frontend for interacting with the system
- Modular project structure for future expansion

---

## Repository Structure

```
dijkstra_based_mapper/
│
├── frontend/          React interface for interacting with the mapper
├── app.py             Main FastAPI backend
├── app0.py            Path computation logic
├── data.csv           Dataset representing nodes and weighted edges
└── README.md
```

---

## Algorithm

The system uses Dijkstra's algorithm, a classical graph search algorithm for finding the shortest path between nodes in a weighted graph.

**Steps:**

1. Initialize the starting node with distance 0
2. Set all other nodes to infinity
3. Select the node with the smallest tentative distance
4. Update the distances of its neighboring nodes
5. Repeat until the destination node is reached or all nodes are processed

**Time Complexity** (with a priority queue):

```
O((V + E) log V)
```

Where `V` = number of vertices and `E` = number of edges.

---

## System Requirements

- Python 3.8 or higher
- pip
- Node.js
- npm

### Installing Python and pip

**macOS**

```bash
# Check if Python is installed
python3 --version

# Install via Homebrew (if not installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install python

# Verify pip
pip3 --version
```

**Linux (Ubuntu / Debian)**

```bash
sudo apt update
sudo apt install python3 python3-pip python3-venv

python3 --version
pip3 --version
```

**Windows**

Download Python from [python.org/downloads](https://www.python.org/downloads/), run the installer, and enable **Add Python to PATH**.

```cmd
python --version
pip --version
```

### Installing Node.js and npm

**macOS**

```bash
brew install node
node -v
npm -v
```

**Linux (Ubuntu / Debian)**

```bash
sudo apt install nodejs npm
node -v
npm -v
```

**Windows**

Download the LTS version from [nodejs.org](https://nodejs.org) and run the installer.

```cmd
node -v
npm -v
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/PranavGupta-006/dijkstra_based_mapper.git
cd dijkstra_based_mapper
```

### Backend Setup

Create and activate a virtual environment:

```bash
# Create
python3 -m venv venv

# Activate (macOS / Linux)
source venv/bin/activate

# Activate (Windows)
venv\Scripts\activate
```

Install dependencies:

```bash
pip install fastapi uvicorn pandas
```

### Frontend Setup

```bash
cd frontend
npm install
```

---

## Running the Application

### Backend

```bash
python3 -m uvicorn app:app --reload
```

The backend runs at `http://127.0.0.1:8000`

Interactive API documentation is available at `http://127.0.0.1:8000/docs`

### Frontend

```bash
cd frontend
npm run dev
```

The frontend runs at `http://localhost:5173`

---

## Example Workflow

1. Load the graph dataset from `data.csv`
2. Start the FastAPI backend server
3. Start the React frontend application
4. Enter the start and destination nodes in the interface
5. The backend runs Dijkstra's algorithm
6. The computed shortest path is returned and displayed in the frontend

---

## Potential Applications

- Autonomous vehicle route planning simulations
- Robotics navigation experiments
- Network routing simulations
- Graph algorithm visualization
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

