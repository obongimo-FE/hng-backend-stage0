# Backend Stage 0 Task — Dynamic Profile Endpoint

## Overview
This project implements a `/me` endpoint that returns my profile data along with a random cat fact fetched from the Cat Facts API.

## Endpoint
GET -  `/me`

### Example Response
```json
{
  "status": "success",
  "user": {
    "email": "obongimo@gmail.com",
    "name": "Imo-obong Friday Akpan",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-17T23:41:06.527Z",
  "fact": "In just seven years, a single pair of cats and their offspring could produce a staggering total of 420,000 kittens."
}

#### Setup Instructions
    1. Clone the repository:
        git clone https://github.com/obongimo-FE/hng-backend-stage0.git

    2. Install Dependencies:
        npm install

    3. Run locally:
        node server.js

    4. Access the endpoint:
        http://localhost:3000/me

##### Dependencies
    - express
    - axios
    - cors

###### Environment Variables
    - PORT (optional): Server port number

