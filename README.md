# WorldDestinationsAPI

A lightweight Node.js HTTP API serving curated travel destinations worldwide.

---

## Features

- Get a list of destinations via `/api` endpoint.
- Filter destinations by query parameters:  
  - continent
  - country
- Access destinations by path parameters:  
  - /api/continent/:continentName
  - /api/country/:countryName
- Returns JSON with details like fun facts and descriptions.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/WorldDestinationsAPI.git
cd WorldDestinationsAPI
```

2. Install dependencies

```bash
npm install
```

3. Start the server

```bash
node server.js
```

4. Access the API

-Open your browser or an API client (like Postman or Insomnia) and visit:
```bash
http://localhost:8000/api
```
