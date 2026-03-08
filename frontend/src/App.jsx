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
      alert("Please select both cities");
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
      console.error("API error:", error);
      alert("Backend connection failed");
    }

    setLoading(false);
  };

  return (
    <div className="app-wrapper">
      <div className="container">
        
        <div className="header">
          <h1 className="title">India Distance Mapper</h1>
          <p className="subtitle">Find the shortest route between cities</p>
        </div>

        <div className="controls">
          <div className="input-group">
            <label>Source City</label>
            <div className="select-wrapper">
              <select 
                value={start} 
                onChange={(e) => setStart(e.target.value)}
                disabled={loading}
              >
                <option value="" disabled>Select Source</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="connector">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
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