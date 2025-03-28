/* styles.css */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
}

.container {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 300px;
}

h1 {
    text-align: center;
    font-size: 24px;
}

.nav-buttons {
    margin-bottom: 20px;
}

button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}

input[type="number"] {
    width: 50px;
    padding: 5px;
    margin-bottom: 10px;
}

.faction {
    margin-bottom: 20px;
    display: none; /* Hide the factions by default */
}

#result {
    margin-top: 20px;
    font-size: 18px;
}
