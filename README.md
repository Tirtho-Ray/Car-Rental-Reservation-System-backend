# Car Rental Reservation System

## Overview

The Car Rental Reservation System is a backend API designed to manage car rentals, reservations, and user accounts. It is built with TypeScript, Express.js, and Mongoose, providing a robust and scalable solution for car rental services.

## Technology Stack

### Backend
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express.js**: A fast, unopinionated, minimalist web framework for Node.js.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Mongoose**: A MongoDB object modeling tool designed to work in an asynchronous environment.
- **JWT (jsonwebtoken)**: A compact, URL-safe means of representing claims to be transferred between two parties.
- **JOD validation**.

## Features
- **User Authentication**: Secure user login and registration using JWT.
- **Car Management**: CRUD operations for managing car inventory.
- **Booking Management**: Create, read, update, and delete car reservations.
- **User Roles**: Admin and user roles with different access levels.

## Installation

1. Clone the repository:
    ```bash
    git clone (https://github.com/Tirtho-Ray/Car-Rental-Reservation-System-backend/tree/main)
    ```

2. Change into the project directory:
    ```bash
    cd car-rental-reservation-system
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add the following environment variables:
    ```env
   PORT = 5000
DB_URL = mongodb+srv://Car-Rental-Reservation-System:set Password@cluster0.thodmul.mongodb.net/Car-Rental-Reservation-System?retryWrites=true&w=majority&appName=Cluster0
BCRYPT_SALT_ROUND=6
JWT_ACCESS_SECRET=secret
JWT_ACCESS_EXPIRES_IN=7d
JWT_REFRESH_SECRET=refreshsecret
JWT_REFRESH_EXPIRES_IN=1y
    ```

5. Start the server:
    ```bash
    npm run start:Server
    ```

## API Endpoints

### Authentication
- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Login an existing user.

### Cars
- **GET /api/cars**: Get all cars.
- **POST /api/cars**: Add a new car (Admin only).
- **GET /api/cars/:id**: Get a car by ID.
- **PUT /api/cars/:id**: Update a car by ID (Admin only).
- **DELETE /api/cars/:id**: Delete a car by ID (Admin only).

### Booking
- **GET /api/booking**: Get all booking (Admin only).
- **POST /api/booking**: Create a new booking.(user only)
- **GeT /api/my-booking**: see user won a new booking.(user only)
- **GET /api/bookings?carId=id&date=needDate**: Get a booking by ID. (Admin only)
- **PATCH /api/cars/return**: Update a reservation by ID.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please Open an issue or submit a pull requeSt for any changes.

## Acknowledgements

- Inspired by various car rental services.
- Built with love using TypeScript and Express.js.

---


