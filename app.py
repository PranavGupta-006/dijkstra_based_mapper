import pandas as pd
import numpy as np
import heapq
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

data = pd.read_csv("data.csv")

graph = {}

for _, row in data.iterrows():
    city1 = row["city1"]
    city2 = row["city2"]
    distance = row["distance"]

    if city1 not in graph:
        graph[city1] = []

    if city2 not in graph:
        graph[city2] = []

    graph[city1].append((city2, distance))
    graph[city2].append((city1, distance))


def dijkstra(graph, start, goal):

    dist = {node: float('inf') for node in graph}
    dist[start] = 0

    pq = [(0, start)]

    while pq:

        current_dist, node = heapq.heappop(pq)

        if node == goal:
            return current_dist

        if current_dist > dist[node]:
            continue

        for neighbor, weight in graph[node]:

            new_dist = current_dist + weight

            if new_dist < dist[neighbor]:

                dist[neighbor] = new_dist
                heapq.heappush(pq, (new_dist, neighbor))

    return float('inf')


@app.get("/dijkstra")
def run_dijkstra(start: str, goal: str):

    result = dijkstra(graph, start, goal)

    return {
        "start": start,
        "goal": goal,
        "distance": result
    }