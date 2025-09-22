
# Backend Task


## Setup Instructions

### 1. Clone the repository
```
git clone <your-repo-url>
cd <repo-folder>
```

### 2. Install dependencies
```
npm install
```

### 3. Set up environment variables
- Copy your `.env` file to `config/.env` (see example below).
- Example `config/.env`:
  ```
  DBURL = 'mongodb://root:root@localhost:27017/'
  PORT = 3000
  ```

### 4. Start MongoDB locally
Ensure MongoDB is running on your machine (default port 27017).

### 5. Run the backend locally
```
npm run start:dev
```

---

## Docker Setup (Alternative)
To run the backend and MongoDB using Docker Compose:
```
docker compose up --build
```
This will start both the backend and MongoDB containers. In this case, set `DBURL` in `config/.env` to:
```
DBURL = 'mongodb://root:root@mongo:27017/'
```

## Assumptions Made
- MongoDB is used as the database and runs in a separate container named `mongo`.
- Environment variables are stored in `config/.env` and not committed to the repository.
- The backend is a NestJS application.

## Features Implemented
- RESTful API for backend operations (see Postman docs below)
- MongoDB integration
- Dockerized setup for easy deployment

## API Documentation
- Postman Docs: [View Collection](https://documenter.getpostman.com/view/30060548/2sB3HtGx2t)

---

For any issues, please open an issue in this repository.

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
