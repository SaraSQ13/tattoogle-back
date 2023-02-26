This API is built with Express and uses MongoDB as the database. It provides functionality for user authentication, tattoer listings and studio listings.

### Prerequisites

- [Node.js](https://nodejs.org/): ^12.0.0


<hr>

### Installing

Install packages npm:


```
npm install
```
## 🎈 Usage <a name="usage"></a>

Start the dev server with this command:

```
npm run dev
```

Run http://localhost:3000/ in your borwser to do the tests.
<br>

Start the production server with this command:

```
npm start
```

# API Endpoints

This API has the following endpoints:

## Auth Endpoints

- **POST** `/auth/register`: This endpoint is used to register a new user. It requires the following parameters in the request body: `email`, `password`, `name`.
- **POST** `/auth/login`: This endpoint is used to login a user. It requires the following parameters in the request body: `email`, `password`.

## Tatoo Studios Endpoints

- **GET** `/studios`: This endpoint is used to get all studios.
- **GET** `/studios/:name`: This endpoint is used to get a studio by name.

## Tatooers Endpoints

- **GET** `/tattoers`: This endpoint is used to get all the tattoers.
- **GET** `/tattoers/:name`: This endpoint is used to get tattoers by name.

## User Endpoints

- **GET** `/users`: This endpoint is used to get all users. Only superadmin users can access this endpoint.
- **GET** `/users/:name`: This endpoint is used to get a user by name.
- **DELETE** `/users/delete/:id`: This endpoint is used to delete a user by id.
- **PATCH** `/users/:userId/save`: This endpoint is used to save tattoers from users
