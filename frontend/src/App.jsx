import { useState } from "react";
import "./App.css";

const cities = [
  "Agra", "Ahmedabad", "Bengaluru", "Bhubaneswar", "Chennai", "Delhi", "Goa", 
  "Hyderabad", "Jaipur", "Kanpur", "Kochi", "Kolkata", "Lucknow", "Mumbai", 
  "Patna", "Pune", "Thiruvananthapuram", "Udaipur", "Varanasi", "Vishakhapatnam"
];

function App() {
  const [start, setStart] = useState("");
  const [goal, setGoal] = useState("");
  const [distance, setDistance] = useState(null);
  const [loading, setLoading] = useState(false);

  const computeDistance = async () => {
    if (!start || !goal) {
      alert("Select Start And Destination!!!");
      return;
    }

    if (start === goal) {
    alert("Silly you!! Start and destination are the same! - But if you really want the answer it is 0");
    return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `http://127.0.0.1:8000/dijkstra?start=${start}&goal=${goal}`
      );
      const data = await response.json();
      setDistance(data.distance);
    } catch (error) {
      console.error("Yikes! Looks Like a API error:", error);
      alert("Yikes! Looks Like Back-End is DEAD :(");
    }

    setLoading(false);
  };

  return (
    <div className="app-wrapper">
      <div className="container">
        
        <div className="header">
          <h1 className="title">Indian Cities Distance Mapper - ICDM</h1>
          <p className="subtitle1">ICDM Stands for Aye Cool Your Damm Mind -  Dun Dun Dun</p>
          <p className="subtitle">Find the shortest route between cities using Dijkstra algorithm</p>
        </div>

        <div className="controls">
          <div className="input-group">
            <label>Start City</label>
            <div className="select-wrapper">
              <select 
                value={start} 
                onChange={(e) => setStart(e.target.value)}
                disabled={loading}
              >
                <option value="" disabled>Select Start City</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="input-group">
            <label>Destination City</label>
            <div className="select-wrapper">
              <select 
                value={goal} 
                onChange={(e) => setGoal(e.target.value)}
                disabled={loading}
              >
                <option value="" disabled>Select Destination</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <button 
          className={`compute-btn ${loading ? "loading-state" : ""}`} 
          onClick={computeDistance}
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="spinner"></span>
              Computing...
            </>
          ) : (
            "Compute Distance"
          )}
        </button>

        {distance !== null && !loading && (
          <div className="result fade-in">
            <p className="result-label">Shortest Distance</p>
            <div className="distance-display">
              <span className="distance-number">{distance}</span>
              <span className="distance-unit">km</span>
            </div>
            <p className="route-summary">{start} to {goal}</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;