import pandas as pd
import numpy as np
import heapq

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


start = 'Agra'
goal = 'Hyderabad'

result = dijkstra(graph, start, goal)

print(f"Distance from Start {start} to Goal {goal} is : {distance} Kilo Meters")
